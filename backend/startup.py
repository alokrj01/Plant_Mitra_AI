from pathlib import Path
from huggingface_hub import snapshot_download

BASE_DIR = Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR / "Models"

REPO_ID = "alokrj/plant-disease-classifier"

def download_models():
    required_files = [
    MODEL_DIR / "cnn_model.pth",
    MODEL_DIR / "encoder.pkl",
    MODEL_DIR / "best-model-text",
    ]

    if all(path.exists() for path in required_files):
      print("✅ All models already exist.")
      return

    print("📥 Downloading models from Hugging Face...")

    snapshot_download(
        repo_id=REPO_ID,
        local_dir=".",
        allow_patterns="Models/*",
    )

    print("✅ Models downloaded successfully.")