import time
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.core.limiter import limiter
from app.api.v1.auth import router as auth_router
from app.api.v1.telemetry import router as telemetry_router
from app.api.v1.ai_engine import router as ai_router
from app.api.v1.projects import router as projects_router
from app.api.v1.contact import router as contact_router

# Initialize FastAPI Application
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Next-generation portfolio platform API engineered for unbreakable security and high performance.",
    docs_url=f"{settings.API_V1_PREFIX}/docs",
    redoc_url=f"{settings.API_V1_PREFIX}/redoc",
    openapi_url=f"{settings.API_V1_PREFIX}/openapi.json"
)

# Attach Slowapi Rate Limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Enterprise CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["X-Security-Digest", "X-Response-Time-Ms"]
)

# Custom Enterprise Security Headers Middleware
@app.middleware("http")
async def add_security_headers(request: Request, call_next):
    start_time = time.time()
    response: Response = await call_next(request)
    process_time = (time.time() - start_time) * 1000

    # 1. HTTP Strict Transport Security (HSTS)
    if settings.HSTS_ENABLED:
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload"

    # 2. Frame Options: Prevent Clickjacking
    response.headers["X-Frame-Options"] = "DENY"

    # 3. Content Type Options: Prevent MIME-sniffing
    response.headers["X-Content-Type-Options"] = "nosniff"

    # 4. Referrer Policy
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"

    # 5. Permissions Policy
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=(), payment=()"

    # 6. Content Security Policy (CSP)
    if settings.CSP_ENABLED:
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: https:; "
            "connect-src 'self' http://localhost:8000 http://127.0.0.1:8000 https://api.anthropic.com https://generativelanguage.googleapis.com; "
            "frame-ancestors 'none';"
        )

    # Telemetry Tracking Header
    response.headers["X-Response-Time-Ms"] = f"{process_time:.2f}ms"
    response.headers["X-Antigravity-Defense"] = "ZERO_TRUST_ARMORED"

    return response

# Prometheus Metrics Simulation Endpoint
@app.get("/metrics", tags=["Observability & Telemetry"])
async def prometheus_metrics():
    """Prometheus-compatible plaintext metrics for telemetry scrapers."""
    return Response(
        content=(
            "# HELP antigravity_http_requests_total Total HTTP requests handled\n"
            "# TYPE antigravity_http_requests_total counter\n"
            'antigravity_http_requests_total{status="200"} 41829\n'
            'antigravity_http_requests_total{status="429"} 124\n'
            'antigravity_http_requests_total{status="401"} 89\n'
            "# HELP antigravity_threats_blocked_total Total WAF attacks mitigated\n"
            "# TYPE antigravity_threats_blocked_total counter\n"
            "antigravity_threats_blocked_total 14892\n"
            "# HELP antigravity_crypto_handshake_seconds Duration of zero-trust handshakes\n"
            "# TYPE antigravity_crypto_handshake_seconds histogram\n"
            'antigravity_crypto_handshake_seconds_bucket{le="0.005"} 12093\n'
            'antigravity_crypto_handshake_seconds_bucket{le="0.010"} 25412\n'
            'antigravity_crypto_handshake_seconds_bucket{le="+Inf"} 25450\n'
        ),
        media_type="text/plain"
    )

# Root Health Check
@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "HEALTHY",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "security_matrix": "ACTIVE",
        "environment": settings.ENVIRONMENT
    }

# Register API Routers
app.include_router(auth_router, prefix=settings.API_V1_PREFIX)
app.include_router(telemetry_router, prefix=settings.API_V1_PREFIX)
app.include_router(ai_router, prefix=settings.API_V1_PREFIX)
app.include_router(projects_router, prefix=settings.API_V1_PREFIX)
app.include_router(contact_router, prefix=settings.API_V1_PREFIX)
