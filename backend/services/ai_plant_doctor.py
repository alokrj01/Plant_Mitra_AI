from google import genai

from config.settings import get_settings
from models import Prediction, User
from schemas.ai_plant_doctor import PlantDoctorAnswer
from sqlalchemy.orm import Session

from fastapi import HTTPException, status


settings = get_settings()

client = genai.Client(
    api_key=settings.GEMINI_API_KEY,
)


def ask_plant_doctor(
    prediction_id: int,
    question: str,
    db: Session,
    current_user: User,
) -> dict:

    prediction = (
        db.query(Prediction)
        .filter(
            Prediction.id == prediction_id,
            Prediction.user_id == current_user.id,
        )
        .first()
    )

    if prediction is None:
        raise ValueError("Prediction not found.")

    disease = prediction.disease

    if disease is None:
        raise ValueError(
            "Disease information is not available for this prediction."
        )

    prompt = f"""
You are Plant Mitra AI's Plant Doctor.

Answer the user's question using ONLY the trusted
disease information provided below.

STRICT RULES:

1. Do not introduce facts that are not present in the
   trusted information.
2. Do not invent treatments, medicines, pesticides,
   fungicides, dosages, or application instructions.
3. You may mention a treatment or product ONLY if it is
   explicitly present in the trusted treatment information.
4. Do not provide dosage, frequency, or application
   instructions unless explicitly present in the trusted data.
5. Do not claim that the diagnosis is 100% certain.
6. The model confidence is a prediction confidence,
   not absolute certainty.
7. If the trusted information is insufficient to answer
   the question, say so clearly in the summary.
8. Never present the AI prediction as a confirmed diagnosis.
9. Distinguish between the model's prediction and confirmed
   disease identification.
10. Keep the response concise and practical.
11. Do not create unrelated information.

TRUSTED DISEASE INFORMATION:

Disease: {disease.disease_name}
Severity: {disease.severity}
Description: {disease.description}
Treatment information: {disease.treatment}
Model confidence: {prediction.confidence:.2%}

IMPORTANT:
The disease diagnosis comes from Plant Mitra AI's image/text
prediction model. Do not describe the diagnosis as being based
on symptoms reported by the user unless the user explicitly
provided symptoms in their question.

User question:
{question}
"""

    try:
        interaction = client.interactions.create(
            model="gemini-3.6-flash",
            input=prompt,
            response_format=PlantDoctorAnswer.model_json_schema(),
        )

        answer = PlantDoctorAnswer.model_validate_json(
            interaction.output_text
        )

    except Exception as error:
        print(f"Plant Doctor AI error: {error}")

        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Plant Doctor is temporarily unavailable. Please try again later.",
        )

    return {
        "prediction_id": prediction.id,
        "disease_name": disease.disease_name,
        "answer": answer.model_dump(),
    }