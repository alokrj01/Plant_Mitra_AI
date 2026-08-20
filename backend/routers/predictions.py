from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from database import get_db
from dependencies.auth import get_current_user
from models import Prediction, User
from schemas.prediction import (
  PredictionHistoryResponse,
  PredictionResponse,
)


router = APIRouter(
    prefix="/api/v1/predictions",
    tags=["Predictions"],
)


@router.get(
    "/history",
    response_model=PredictionHistoryResponse,
)
def get_prediction_history(
    page: int = Query(
        default=1,
        ge=1,
    ),
    page_size: int = Query(
        default=20,
        ge=1,
        le=100,
    ),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    base_query = (
        db.query(Prediction)
        .filter(Prediction.user_id == current_user.id)
    )

    total = base_query.count()

    offset = (page - 1) * page_size

    predictions = (
        base_query
        .order_by(Prediction.created_at.desc())
        .offset(offset)
        .limit(page_size)
        .all()
    )

    return PredictionHistoryResponse(
        items=predictions,
        page=page,
        page_size=page_size,
        total=total,
        has_next=(offset + len(predictions)) < total,
    )

@router.get(
    "/{prediction_id}",
    response_model=PredictionResponse,
)
def get_prediction(
    prediction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    prediction = (
        db.query(Prediction)
        .filter(
            Prediction.id == prediction_id,
            Prediction.user_id == current_user.id,
        )
        .first()
    )

    if prediction is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Prediction not found.",
        )

    return prediction