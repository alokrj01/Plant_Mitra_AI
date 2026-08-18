FROM python:3.12-slim

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.12.0 /uv /uvx /bin/

ENV PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

WORKDIR /app

# System dependencies required by the application
RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency metadata first for better Docker layer caching
COPY pyproject.toml uv.lock ./

# Install exactly what is in uv.lock
# Do not install the project itself yet.
RUN uv sync --locked --no-install-project

# Copy application source and model files
COPY . .

# Sync again after copying the project
RUN uv sync --locked

# Create a non-root user
RUN useradd -m appuser

# Give ownership of application files and virtual environment
RUN chown -R appuser:appuser /app

# Use uv-managed environment by default
ENV PATH="/app/.venv/bin:$PATH"

USER appuser

EXPOSE 7860

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]