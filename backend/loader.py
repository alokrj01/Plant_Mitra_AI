import os
from dataclasses import dataclass

import joblib
import torch
from torchvision import transforms
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
)

from Models.model1 import ImageClassifierCNN


@dataclass
class ModelBundle:
    device: torch.device
    image_model: ImageClassifierCNN
    image_transform: transforms.Compose
    encoder: object
    tokenizer: AutoTokenizer
    text_model: AutoModelForSequenceClassification


def load_models() -> ModelBundle:
    """
    Load all AI models required by the application.
    """

    current_dir = os.path.dirname(os.path.abspath(__file__))
    models_dir = os.path.join(current_dir, "Models")

    # ==========================
    # Device
    # ==========================

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"🚀 Using device: {device}")

    # ==========================
    # Image Classification Model
    # ==========================

    image_model = ImageClassifierCNN(num_classes=15)

    image_model.load_state_dict(
        torch.load(
            os.path.join(models_dir, "cnn_model.pth"),
            map_location=device,
        )
    )


    image_model.to(device)
    image_model.eval()

    # ==========================
    # Image Transform
    # ==========================

    mean = [
        0.45923691987991333,
        0.4754456877708435,
        0.4114924371242523,
    ]

    std = [
        0.18601608276367188,
        0.16261300444602966,
        0.20084309577941895,
    ]

    image_transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=mean, std=std),
    ])

    # ==========================
    # Label Encoder
    # ==========================

    encoder = joblib.load(
        os.path.join(models_dir, "encoder.pkl")
    )

    # ==========================
    # Text Classification Model
    # ==========================

    text_model_path = os.path.join(
        models_dir,
        "best-model-text"      # Use the correct folder name
    )

    tokenizer = AutoTokenizer.from_pretrained(
        text_model_path
    )

    text_model = AutoModelForSequenceClassification.from_pretrained(
        text_model_path
    )

    text_model.eval()

    print("✅ All AI models loaded successfully.")

    return ModelBundle(
        device=device,
        image_model=image_model,
        image_transform=image_transform,
        encoder=encoder,
        tokenizer=tokenizer,
        text_model=text_model,
    )


# ==========================================
# Global Model Store
# ==========================================

_models : ModelBundle | None = None

def initialize_models():
    """
    Load all models once during application startup.
    """
    global _models

    if _models is None:
        _models = load_models()


def get_models() -> ModelBundle:
    """
    Return loaded models.
    """
    if _models is None:
        raise RuntimeError(
            "Models have not been initialized. Call initialize_models() first."
        )

    return _models