import base64
import os
from datetime import datetime, timedelta, timezone
from typing import Any, Dict, Optional, Tuple

import jwt
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

from app.core.config import settings

ph = PasswordHasher(
    time_cost=3,
    memory_cost=65536,
    parallelism=4,
    hash_len=32,
    salt_len=16
)

def hash_password(password: str) -> str:
    """Hash password using Argon2id."""
    return ph.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify password with Argon2id."""
    try:
        return ph.verify(hashed_password, plain_password)
    except VerifyMismatchError:
        return False
    except Exception:
        return False

def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """Generate signed JWT access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire, "type": "access", "iat": datetime.now(timezone.utc)})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

def create_refresh_token(data: Dict[str, Any]) -> str:
    """Generate signed JWT refresh token with rotation payload."""
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire, "type": "refresh", "jti": os.urandom(16).hex()})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

def decode_token(token: str) -> Dict[str, Any]:
    """Decode and validate signature of JWT."""
    return jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])

# AES-256-GCM Military-Grade Cryptography Utility
class MilitaryGradeCrypto:
    @staticmethod
    def generate_key() -> str:
        """Generate 256-bit AES key, base64 encoded."""
        key = AESGCM.generate_key(bit_length=256)
        return base64.b64encode(key).decode('utf-8')

    @staticmethod
    def encrypt(plaintext: str, key_b64: Optional[str] = None) -> Dict[str, str]:
        """Encrypt string with AES-256-GCM returning ciphertext, nonce, and tag."""
        if not key_b64:
            key_bytes = AESGCM.generate_key(bit_length=256)
            key_b64 = base64.b64encode(key_bytes).decode('utf-8')
        else:
            key_bytes = base64.b64decode(key_b64)

        aesgcm = AESGCM(key_bytes)
        nonce = os.urandom(12)  # 96-bit recommended nonce for GCM
        data_bytes = plaintext.encode('utf-8')
        encrypted = aesgcm.encrypt(nonce, data_bytes, None)

        return {
            "ciphertext": base64.b64encode(encrypted).decode('utf-8'),
            "nonce": base64.b64encode(nonce).decode('utf-8'),
            "key": key_b64,
            "algorithm": "AES-256-GCM",
            "timestamp": datetime.now(timezone.utc).isoformat()
        }

    @staticmethod
    def decrypt(ciphertext_b64: str, nonce_b64: str, key_b64: str) -> str:
        """Decrypt AES-256-GCM ciphertext."""
        key_bytes = base64.b64decode(key_b64)
        nonce_bytes = base64.b64decode(nonce_b64)
        ciphertext_bytes = base64.b64decode(ciphertext_b64)

        aesgcm = AESGCM(key_bytes)
        decrypted = aesgcm.decrypt(nonce_bytes, ciphertext_bytes, None)
        return decrypted.decode('utf-8')
