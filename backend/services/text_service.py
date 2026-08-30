import torch
from sqlalchemy.orm import Session

from loader import get_models
from models import Disease, Prediction, User
from config.mappings import text_to_db_mapping


def predict_text(
  data, 
  db: Session,
  current_user: User | None = None,
) -> dict:

    models = get_models()

    encoder = models.encoder
    tokenizer = models.tokenizer
    text_model = models.text_model

    inputs = tokenizer(
        data.text,
        return_tensors="pt",
        truncation=True,
        padding=True,
    )

    with torch.inference_mode():
        outputs = text_model(**inputs)

    logits = outputs.logits

    probabilities = torch.softmax(logits, dim=1)

    pred_idx = torch.argmax(logits, dim=-1).tolist()

    confidence = probabilities[0][pred_idx[0]].item()

    pred_label = str(
        encoder.inverse_transform(pred_idx)[0]
    )

    db_search_label = text_to_db_mapping.get(
        pred_label,
        pred_label,
    )

    db_info = (
        db.query(Disease)
        .filter(Disease.class_name == db_search_label)
        .first()
    )

    response = {
        "text": data.text,
        "Predicted_label": pred_label,
        "confidence": f"{confidence:.2%}",
    }

    if db_info:
        response.update(
            {
                "disease_name": db_info.disease_name,
                "severity": db_info.severity,
                "description": db_info.description,
                "treatment": db_info.treatment,
            }
        )
    else:
        response["info"] = (
            f"Database details not found for: {db_search_label}"
        )

    if current_user:
      prediction = Prediction(
          user_id=current_user.id,
          disease_id=db_info.id if db_info else None,
          prediction_type="text",
          predicted_class=pred_label,
          confidence=confidence,
          input_text=data.text,
      )
      try:
        db.add(prediction)
        db.commit()
        db.refresh(prediction)
      except Exception:
        db.rollback()
        raise

      response["prediction_id"] = prediction.id

    return response