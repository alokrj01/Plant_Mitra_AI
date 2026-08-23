import torch
from PIL import Image

from fastapi import UploadFile, HTTPException
from sqlalchemy.orm import Session

from loader import get_models

from models import Disease, Prediction, User
from config.mappings import idx_to_class

ALLOWED_IMAGE_TYPES = {
  "image/jpeg",
  "image/png",
  "image/webp",
}

MAX_IMAGE_SIZE = 10 * 1024 * 1024

def predict_image(
  file: UploadFile, 
  db: Session,
  current_user: User | None = None,
) -> dict:
    if file.content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported image type. Please upload a JPEG, PNG, or WebP image.",
        )

    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size > MAX_IMAGE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="Image file is too large. Maximum size is 10 MB.",
        )

    models = get_models()

    device = models.device
    image_model = models.image_model
    image_transform = models.image_transform

    try:
        image = Image.open(file.file).convert("RGB")
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid or corrupted image file.",
        )

    img_tensor = image_transform(image).unsqueeze(0).to(device)

    with torch.inference_mode():
        output = image_model(img_tensor)

        probabilities = torch.softmax(output, dim=1)

        pred_idx = int(
            torch.argmax(output, dim=1).item()
        )


        confidence = probabilities[0][pred_idx].item()

    pred_label = idx_to_class[pred_idx]

    db_info = (
        db.query(Disease)
        .filter(Disease.class_name == pred_label)
        .first()
    )

    response = {
        "predicted_class": pred_label,
        "confidence": f"{confidence:.2%}",
    }

    if db_info:
        response.update({
            "disease_name": db_info.disease_name,
            "severity": db_info.severity,
            "description": db_info.description,
            "treatment": db_info.treatment,
        })
    else:
        response["info"] = (
            "Database details not found for this class."
        )

    if current_user:
      prediction = Prediction(
          user_id=current_user.id,
          disease_id=db_info.id if db_info else None,
          prediction_type="image",
          predicted_class=pred_label,
          confidence=confidence,
      )

      try:
        db.add(prediction)
        db.commit()
        db.refresh(prediction)
      except Exception:
        db.rollback()
        raise

    return response