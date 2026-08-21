from pydantic import BaseModel, ConfigDict, Field


class DiseaseResponse(BaseModel):
    id: int
    class_name: str
    disease_name: str
    severity: str
    description: str
    treatment: dict | None

    model_config = ConfigDict(from_attributes=True)


class DiseaseCreate(BaseModel):
    class_name: str = Field(
        min_length=1,
        max_length=255,
    )
    disease_name: str = Field(
        min_length=1,
        max_length=255,
    )
    severity: str = Field(
        min_length=1,
        max_length=50,
    )
    description: str = Field(
        min_length=1,
    )
    treatment: dict | None = None


class DiseaseUpdate(BaseModel):
    class_name: str | None = Field(
        default=None,
        min_length=1,
        max_length=255,
    )
    disease_name: str | None = Field(
        default=None,
        min_length=1,
        max_length=255,
    )
    severity: str | None = Field(
        default=None,
        min_length=1,
        max_length=50,
    )
    description: str | None = Field(
        default=None,
        min_length=1,
    )
    treatment: dict | None = None