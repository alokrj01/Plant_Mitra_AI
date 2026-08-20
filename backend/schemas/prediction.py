from datetime import datetime

from pydantic import BaseModel, ConfigDict


class PredictionResponse(BaseModel):
    id: int
    prediction_type: str
    predicted_class: str
    confidence: float
    input_text: str | None
    disease_id: int | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class PredictionHistoryResponse(BaseModel):
    items: list[PredictionResponse]
    page: int
    page_size: int
    total: int
    has_next: bool