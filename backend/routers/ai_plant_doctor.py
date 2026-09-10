from database import get_db
from dependencies.auth import get_current_user
from fastapi import APIRouter, Depends, HTTPException, status
from models import User
from schemas.ai_plant_doctor import (
    PlantDoctorRequest,
    PlantDoctorResponse,
)
from services.ai_plant_doctor import ask_plant_doctor
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/api/v1/ai/plant-doctor",
    tags=["AI Plant Doctor"],
)


@router.post(
    "",
    response_model=PlantDoctorResponse,
)
def plant_doctor(
    data: PlantDoctorRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    try:
        return ask_plant_doctor(
            prediction_id=data.prediction_id,
            question=data.question,
            db=db,
            current_user=current_user,
        )

    except ValueError as error:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(error),
        )