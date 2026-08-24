from datetime import datetime, timezone

from sqlalchemy import (Boolean, Column, DateTime, Integer, String, JSON, ForeignKey, Float,)
from sqlalchemy.orm import relationship
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

  role = Column(
    String(20),
    default="user",
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

  predictions = relationship(
        "Prediction",
        back_populates="user",
  )

  refresh_tokens = relationship(
        "RefreshToken",
        back_populates="user",
        cascade="all, delete-orphan",
    )


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    token_hash = Column(
        String(64),
        unique=True,
        nullable=False,
        index=True,
    )

    expires_at = Column(
        DateTime(timezone=True),
        nullable=False,
    )

    revoked_at = Column(
        DateTime(timezone=True),
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    user = relationship(
        "User",
        back_populates="refresh_tokens",
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

    predictions = relationship(
        "Prediction",
        back_populates="disease",
    )

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )

    disease_id = Column(
        Integer,
        ForeignKey("diseases.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )

    prediction_type = Column(
        String(20),
        nullable=False,
    )

    predicted_class = Column(
        String(255),
        nullable=False,
    )

    confidence = Column(
        Float,
        nullable=False,
    )

    input_text = Column(
        String,
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    user = relationship(
        "User",
        back_populates="predictions",
    )

    disease = relationship(
        "Disease",
        back_populates="predictions",
    )