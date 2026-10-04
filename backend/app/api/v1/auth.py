from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt

from app.core.config import settings
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password
)
from app.schemas.schemas import LoginRequest, TokenRefreshRequest, TokenResponse, UserProfile

router = APIRouter(prefix="/auth", tags=["Authentication & Zero-Trust Access"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_PREFIX}/auth/token")

# Simulated High-Security User Database
DEMO_PASSWORD_HASH = hash_password("Antigravity#2026@MilitaryGrade")

MOCK_USERS = {
    "admin": {
        "id": "sec-usr-001",
        "username": "admin",
        "password_hash": DEMO_PASSWORD_HASH,
        "role": "Security Architect",
        "security_clearance": "DEFCON-1",
        "two_factor_enabled": True
    },
    "guest": {
        "id": "sec-usr-002",
        "username": "guest",
        "password_hash": hash_password("guest123"),
        "role": "Verified Observer",
        "security_clearance": "PUBLIC-RESTRICTED",
        "two_factor_enabled": False
    }
}

@router.post("/login", response_model=TokenResponse)
async def login(credentials: LoginRequest):
    """Authenticate with Argon2id and issue signed JWT with rotation refresh token."""
    user = MOCK_USERS.get(credentials.username)
    if not user or not verify_password(credentials.password, user["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid security credentials or access key mismatch",
            headers={"WWW-Authenticate": "Bearer"},
        )

    payload = {"sub": user["username"], "role": user["role"], "clearance": user["security_clearance"]}
    access_token = create_access_token(payload)
    refresh_token = create_refresh_token(payload)

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60
    )

@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(request: TokenRefreshRequest):
    """Zero-trust token rotation: Exchanges valid refresh token for a newly rotated key pair."""
    try:
        decoded = decode_token(request.refresh_token)
        if decoded.get("type") != "refresh":
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token type")
        
        username = decoded.get("sub")
        user = MOCK_USERS.get(username)
        if not user:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Subject revoked")

        payload = {"sub": user["username"], "role": user["role"], "clearance": user["security_clearance"]}
        new_access = create_access_token(payload)
        new_refresh = create_refresh_token(payload)

        return TokenResponse(
            access_token=new_access,
            refresh_token=new_refresh,
            token_type="bearer",
            expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60
        )
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token expired")
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Security validation failed")

@router.get("/me", response_model=UserProfile)
async def get_current_user(token: str = Depends(oauth2_scheme)):
    """Retrieve verified profile of authenticated principal."""
    try:
        payload = decode_token(token)
        username = payload.get("sub")
        user = MOCK_USERS.get(username)
        if not user:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User revoked")
        return UserProfile(
            id=user["id"],
            username=user["username"],
            role=user["role"],
            security_clearance=user["security_clearance"],
            two_factor_enabled=user["two_factor_enabled"]
        )
    except jwt.PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Signature invalid")
