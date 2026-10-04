from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field, EmailStr

# Auth Schemas
class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int

class TokenRefreshRequest(BaseModel):
    refresh_token: str

class LoginRequest(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    password: str = Field(..., min_length=8)

class UserProfile(BaseModel):
    id: str
    username: str
    role: str
    security_clearance: str
    two_factor_enabled: bool

# Crypto Schemas
class EncryptRequest(BaseModel):
    plaintext: str = Field(..., max_length=10000)
    custom_key: Optional[str] = None

class EncryptResponse(BaseModel):
    ciphertext: str
    nonce: str
    key: str
    algorithm: str
    timestamp: str

class DecryptRequest(BaseModel):
    ciphertext: str
    nonce: str
    key: str

class DecryptResponse(BaseModel):
    plaintext: str
    integrity_verified: bool

# AI Engine Schemas
class AIAnalysisRequest(BaseModel):
    prompt: str = Field(..., min_length=3, max_length=4000)
    model: str = Field(default="gemini-3.5-pro", description="Model name: gemini-3.5-pro or claude-3.5-sonnet")
    mode: str = Field(default="architecture_audit", description="Mode: ui_generation, code_integrity, architecture_audit")
    context: Optional[Dict[str, Any]] = None

class AIAnalysisResponse(BaseModel):
    model_config = {"protected_namespaces": ()}
    model_used: str
    mode: str
    execution_time_ms: float
    output: str
    confidence_score: float
    security_score: int
    recommendations: List[str]

# Telemetry Schemas
class TelemetryStat(BaseModel):
    metric: str
    value: str
    status: str
    trend: str

class ThreatEvent(BaseModel):
    id: str
    timestamp: str
    source_ip: str
    threat_type: str
    severity: str  # LOW, MEDIUM, HIGH, CRITICAL
    action_taken: str
    status: str

class DefenseStatus(BaseModel):
    grid_status: str
    active_threats_blocked: int
    waf_status: str
    zero_trust_handshake: str
    tls_version: str
    encryption_standard: str
    ddos_mitigation: str
    uptime: str

# Project Schemas
class ProjectItem(BaseModel):
    id: str
    title: str
    category: str
    summary: str
    full_description: str
    tech_stack: List[str]
    security_rating: str
    performance_score: int
    features: List[str]
    architecture_overview: str
    demo_url: Optional[str] = None
    github_url: Optional[str] = None

# Contact Form Schema
class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)
    is_encrypted: bool = True
