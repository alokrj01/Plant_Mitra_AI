from contextlib import asynccontextmanager

from database import get_db
from dependencies.auth import get_current_user_optional
from fastapi import Depends, FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from loader import initialize_models
from models import User
from pydantic import BaseModel, Field, field_validator
from routers.admin import router as admin_router
from routers.ai_plant_doctor import router as ai_plant_doctor_router
from routers.auth import router as auth_router
from routers.predictions import router as predictions_router
from services.image_service import predict_image
from services.text_service import predict_text
from sqlalchemy.orm import Session


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("🚀 Starting Plant Mitra AI...")
    initialize_models()
    print("✅ Models initialized successfully.")
    yield
    print("🛑 Shutting down Plant Mitra AI...")

# Create Database Tables
# Base.metadata.create_all(bind=engine)

#Initialize FastAPI app
app = FastAPI(
   title = "Plant Mitra AI",
    version="1.0.0",
     lifespan=lifespan,
  )

app.include_router(auth_router)
app.include_router(admin_router)
app.include_router(predictions_router)
app.include_router(ai_plant_doctor_router)

#Middleware for CORS(cross origin resource sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class TextInput(BaseModel):
  text:str = Field(
    min_length=1,
    max_length=1000,
  )

  @field_validator("text")
  @classmethod
  def validate_text(cls, value: str) -> str:
    value = value.strip()

    if not value:
      raise ValueError("text cannot be empty or whitespace.")

    return value

#API Route
@app.get("/")
def health_check():
   return {
      "message": "🌱 Plant Mitra AI Backend is Running",
      "service": "Plant Disease Detection API",
      "status": "healthy",
      "available_endpoints": [
         "/image-prediction",
         "/text-prediction",
         "/docs"
      ]
   }


#API Route
@app.post("/image-prediction")
def image_predict(
   file: UploadFile = File(...), 
   db: Session = Depends(get_db),
   current_user: User | None = Depends(get_current_user_optional),
):
   return predict_image(
    file, 
    db,
    current_user,
   )

  
#API Route
@app.post("/text-prediction")
def text_prediction(
   data: TextInput,
   db: Session = Depends(get_db),
   current_user: User | None = Depends(get_current_user_optional),
):
  return predict_text(
    data, 
    db,
    current_user,
  )


