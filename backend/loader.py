import os
from dataclasses import dataclass

import joblib
import torch
from torchvision import transforms, models
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
)

from model1 import ImageClassifierCNN
from services.plant_gate import (
    PlantGate,
    PLANT_GATE_THRESHOLD,
)


@dataclass
class ModelBundle:
    device: torch.device

     # Existing disease model
    image_model: ImageClassifierCNN
    image_transform: transforms.Compose

     # New plant/crop gate
    plant_gate: PlantGate

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

    # ========================================================
    # Plant/Crop Gate
    # MobileNetV3-Small
    # ========================================================

    plant_gate_model = models.mobilenet_v3_small(
        weights=None
    )

    plant_gate_model.classifier[3] = torch.nn.Linear(
        1024,
        5,
    )

    plant_gate_checkpoint = os.path.join(
        models_dir,
        "plant_gate_stage3_best.pth",
    )

    gate_checkpoint = torch.load(
        plant_gate_checkpoint,
        map_location=device,
    )

    if (
        isinstance(gate_checkpoint, dict)
        and "model_state_dict" in gate_checkpoint
    ):
        gate_state_dict = (
            gate_checkpoint["model_state_dict"]
        )
    else:
        gate_state_dict = gate_checkpoint

    plant_gate_model.load_state_dict(
        gate_state_dict
    )

    plant_gate_model.to(device)
    plant_gate_model.eval()

    # --------------------------------------------------------
    # Gate transform
    #
    # This is the ImageNet normalization used during
    # MobileNetV3 Stage 3 training.
    # --------------------------------------------------------
    plant_gate_transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=[
                0.485,
                0.456,
                0.406,
            ],
            std=[
                0.229,
                0.224,
                0.225,
            ],
        ),
    ])

    plant_gate = PlantGate(
        model=plant_gate_model,
        transform=plant_gate_transform,
        device=device,
        threshold=PLANT_GATE_THRESHOLD,
    )

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
        text_model_path,
        local_files_only=True,
    )

    text_model = AutoModelForSequenceClassification.from_pretrained(
        text_model_path,
        local_files_only=True,
    )

    text_model.eval()

    print("✅ All AI models loaded successfully.")

    return ModelBundle(
        device=device,
        image_model=image_model,
        image_transform=image_transform,
        plant_gate=plant_gate,
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