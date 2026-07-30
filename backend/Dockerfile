FROM python:3.12-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /app

COPY requirements.txt .

RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Install CPU version of PyTorch explicitly
RUN pip install --no-cache-dir \
    torch==2.8.0 \
    torchvision==0.23.0 \
    --index-url https://download.pytorch.org/whl/cpu

# Install remaining dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Create a non-root user
RUN useradd -m appuser

# Give ownership of application files
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser


EXPOSE 7860

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]