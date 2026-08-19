from datetime import datetime, timezone

from sqlalchemy import Boolean, Column, DateTime, Integer, String, JSON
from database import Base

class User(Base):
  __tablename__ = "users"

  id = Column(Integer, primary_key=True, index=True)

  email = Column(
    String(255),
    unique=True,
    index=True,
    nullable=False,
  )

  password_hash = Column(
    String(255),
    nullable=False,
  )

  is_active = Column(
    Boolean,
    default=True,
    nullable=False,
  )

  is_verified = Column(
    Boolean,
    default=False,
    nullable=False,
  )

  created_at = Column(
    DateTime(timezone=True),
    default=lambda: datetime.now(timezone.utc),
    nullable=False,
  )

  updated_at = Column(
    DateTime(timezone=True),
    default=lambda: datetime.now(timezone.utc),
    onupdate=lambda: datetime.now(timezone.utc),
    nullable=False,
  )

class Disease(Base):
    __tablename__ = "diseases"

    id = Column(Integer, primary_key=True, index=True)
    class_name = Column(String, unique=True, index=True) # e.g., "Potato___Early_blight"
    disease_name = Column(String) # e.g., "Potato - Early Blight"
    severity = Column(String)     # e.g., "Moderate"
    description = Column(String)
    
    #Treatment is an object that's why store in JSON format
    treatment = Column(JSON)