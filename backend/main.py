from contextlib import asynccontextmanager
from startup import download_models
from loader import initialize_models

from fastapi import (FastAPI, UploadFile, File, Depends)
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from services.text_service import predict_text
from services.image_service import predict_image

#Database Imports
from sqlalchemy.orm import Session
from database import engine, Base, get_db

@asynccontextmanager
async def lifespan(app: FastAPI):

    print("🚀 Starting Plant Mitra AI...")

    download_models()

    initialize_models()

    print("✅ Models initialized successfully.")

    yield

    print("🛑 Shutting down Plant Mitra AI...")

# Create Database Tables
Base.metadata.create_all(bind=engine)

#Initialize FastAPI app
app = FastAPI(
   title = "Plant Mitra AI",
    version="1.0.0",
     lifespan=lifespan,
  )

#Middleware for CORS(cross origin resource sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class TextInput(BaseModel):
  text:str

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
   db: Session = Depends(get_db)
):
   return predict_image(file, db)

  
#API Route
@app.post("/text-prediction")
def text_prediction(
   data: TextInput,
   db: Session = Depends(get_db)
):
  return predict_text(data, db)


