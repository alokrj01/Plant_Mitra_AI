from pydantic import BaseModel, Field


class PlantDoctorRequest(BaseModel):
    prediction_id: int = Field(
        gt=0,
    )
    question: str = Field(
        min_length=1,
        max_length=1000,
    )


class PlantDoctorAnswer(BaseModel):
    summary: str
    immediate_actions: list[str]
    prevention: list[str]


class PlantDoctorResponse(BaseModel):
    prediction_id: int
    disease_name: str
    answer: PlantDoctorAnswer