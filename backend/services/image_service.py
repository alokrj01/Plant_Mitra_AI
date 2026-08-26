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
    plant_gate = models.plant_gate

    try:
        image = Image.open(file.file).convert("RGB")
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid or corrupted image file.",
        )


    # ========================================================
    # Plant/Crop Gate
    #
    # IMPORTANT:
    # Disease CNN has NOT been called yet.
    # ========================================================

    gate_result = plant_gate.predict(
        image
    )


    gate_confidence = (
        gate_result.confidence
    )

    # ========================================================
    # NOT A PLANT
    # ========================================================

    if gate_result.route == "not_plant":

        return {
            "status": "rejected",
            "gate": "not_plant",
            "predicted_class": "non_plant",
            "confidence": (
                f"{gate_confidence:.2%}"
            ),
            "message": (
                "The uploaded image does not "
                "appear to contain a plant. "
                "Please upload a clear image "
                "of a plant or leaf."
            ),
        }

    # ========================================================
    # UNSUPPORTED CROP
    # ========================================================

    if (
        gate_result.route
        == "unsupported_crop"
    ):

        return {
            "status": "rejected",
            "gate": "unsupported_crop",
            "predicted_class": "other_plant",
            "confidence": (
                f"{gate_confidence:.2%}"
            ),
            "message": (
                "A plant was detected, but "
                "this crop is currently not "
                "supported for disease detection. "
                "Currently supported crops are "
                "pepper, potato, and tomato."
            ),
        }

    # ========================================================
    # UNCERTAIN
    # ========================================================

    if gate_result.route == "uncertain":

        return {
            "status": "uncertain",
            "gate": "uncertain",
            "predicted_class": (
                gate_result.predicted_class
            ),
            "confidence": (
                f"{gate_confidence:.2%}"
            ),
            "message": (
                "The image could not be "
                "classified confidently as a "
                "supported plant. Please upload "
                "a clear, well-focused image "
                "showing the plant or leaf."
            ),
        }


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