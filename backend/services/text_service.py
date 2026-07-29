import torch
from sqlalchemy.orm import Session

from loader import get_models
from models import Disease
from config.mappings import text_to_db_mapping


def predict_text(data, db: Session) -> dict:

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

    return response