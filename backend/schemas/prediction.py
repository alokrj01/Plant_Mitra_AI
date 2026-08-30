from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict


class PredictionResponse(BaseModel):
    id: int
    prediction_type: str
    predicted_class: str
    confidence: float
    input_text: str | None
    disease_id: int | None
    created_at: datetime
    feedback: Literal["correct", "incorrect"] | None = None

    model_config = ConfigDict(from_attributes=True)


class PredictionHistoryResponse(BaseModel):
    items: list[PredictionResponse]
    page: int
    page_size: int
    total: int
    has_next: bool

class PredictionFeedbackRequest(BaseModel):
    feedback: Literal["correct", "incorrect"]


class PredictionFeedbackResponse(BaseModel):
    id: int
    prediction_id: int
    user_id: int
    feedback: Literal["correct", "incorrect"]
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)