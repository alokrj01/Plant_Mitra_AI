from dataclasses import dataclass

import torch
from PIL import Image


PLANT_GATE_THRESHOLD = 0.88

PLANT_GATE_CLASSES = [
    "non_plant",
    "other_plant",
    "pepper",
    "potato",
    "tomato",
]

SUPPORTED_CROPS = {
    "pepper",
    "potato",
    "tomato",
}


@dataclass
class PlantGateResult:
    route: str
    predicted_class: str
    confidence: float


class PlantGate:
    """
    Plant/Crop validation gate.

    Routes an image into one of four states:

        not_plant
        unsupported_crop
        uncertain
        supported

    Only supported crops should reach the disease classifier.
    """

    def __init__(
        self,
        model: torch.nn.Module,
        transform,
        device: torch.device,
        threshold: float = PLANT_GATE_THRESHOLD,
    ):
        self.model = model
        self.transform = transform
        self.device = device
        self.threshold = threshold

    def predict(
        self,
        image: Image.Image,
    ) -> PlantGateResult:

        image_tensor = (
            self.transform(image)
            .unsqueeze(0)
            .to(self.device)
        )

        with torch.inference_mode():

            output = self.model(
                image_tensor
            )

            probabilities = torch.softmax(
                output,
                dim=1,
            )

            confidence, pred_idx = torch.max(
                probabilities,
                dim=1,
            )

        predicted_class = PLANT_GATE_CLASSES[
            int(pred_idx.item())
        ]

        confidence_value = float(
            confidence.item()
        )

        # ----------------------------------------------------
        # Low-confidence prediction
        # ----------------------------------------------------

        if confidence_value < self.threshold:

            return PlantGateResult(
                route="uncertain",
                predicted_class=predicted_class,
                confidence=confidence_value,
            )

        # ----------------------------------------------------
        # Non-plant
        # ----------------------------------------------------

        if predicted_class == "non_plant":

            return PlantGateResult(
                route="not_plant",
                predicted_class=predicted_class,
                confidence=confidence_value,
            )

        # ----------------------------------------------------
        # Plant but unsupported crop
        # ----------------------------------------------------

        if predicted_class == "other_plant":

            return PlantGateResult(
                route="unsupported_crop",
                predicted_class=predicted_class,
                confidence=confidence_value,
            )

        # ----------------------------------------------------
        # Supported crop
        # ----------------------------------------------------

        if predicted_class in SUPPORTED_CROPS:

            return PlantGateResult(
                route="supported",
                predicted_class=predicted_class,
                confidence=confidence_value,
            )

        # ----------------------------------------------------
        # Defensive fallback
        # ----------------------------------------------------

        return PlantGateResult(
            route="uncertain",
            predicted_class=predicted_class,
            confidence=confidence_value,
        )