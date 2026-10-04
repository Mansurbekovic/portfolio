# -----------------------------------------------------------------------------
# ANTIGRAVITY INNOVATIONS — HARDENED BACKEND CONTAINER
# -----------------------------------------------------------------------------
FROM python:3.11-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Final Minimal Hardened Runtime
FROM python:3.11-slim

WORKDIR /app

# Create unprivileged system user
RUN groupadd -g 1001 antigravity && \
    useradd -u 1001 -g antigravity -s /bin/sh antigravity

COPY --from=builder /root/.local /home/antigravity/.local
COPY . /app

ENV PATH=/home/antigravity/.local/bin:$PATH \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

RUN chown -R antigravity:antigravity /app /home/antigravity

USER antigravity

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4", "--proxy-headers"]
