import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.security import MilitaryGradeCrypto, hash_password, verify_password

client = TestClient(app)

def test_health_check():
    """Verify system health endpoint and security headers."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "HEALTHY"
    assert "security_matrix" in data

    # Verify Strict Enterprise Security Headers
    assert response.headers.get("X-Frame-Options") == "DENY"
    assert response.headers.get("X-Content-Type-Options") == "nosniff"
    assert response.headers.get("Referrer-Policy") == "strict-origin-when-cross-origin"
    assert "Strict-Transport-Security" in response.headers
    assert "Content-Security-Policy" in response.headers

def test_prometheus_metrics():
    """Verify Prometheus observability endpoint."""
    response = client.get("/metrics")
    assert response.status_code == 200
    assert "antigravity_threats_blocked_total" in response.text
    assert "antigravity_crypto_handshake_seconds" in response.text

def test_military_grade_crypto_isolated():
    """Test standalone AES-256-GCM cipher encryption and authenticated decryption."""
    original = "CONFIDENTIAL_PAYLOAD_ANTIGRAVITY_DEFENSE_2026"
    res = MilitaryGradeCrypto.encrypt(original)
    
    assert res["algorithm"] == "AES-256-GCM"
    assert len(res["ciphertext"]) > 0
    assert len(res["nonce"]) > 0
    assert len(res["key"]) > 0

    decrypted = MilitaryGradeCrypto.decrypt(res["ciphertext"], res["nonce"], res["key"])
    assert decrypted == original

def test_crypto_api_endpoints():
    """Test encryption and decryption through the REST API."""
    original = "REST_API_ENCRYPTED_TRANSMISSION"
    enc_res = client.post("/api/v1/telemetry/crypto/encrypt", json={"plaintext": original})
    assert enc_res.status_code == 200
    data = enc_res.json()
    assert data["algorithm"] == "AES-256-GCM"

    # Decrypt via API
    dec_res = client.post("/api/v1/telemetry/crypto/decrypt", json={
        "ciphertext": data["ciphertext"],
        "nonce": data["nonce"],
        "key": data["key"]
    })
    assert dec_res.status_code == 200
    assert dec_res.json()["plaintext"] == original
    assert dec_res.json()["integrity_verified"] is True

def test_argon2id_hashing():
    """Verify Argon2id password derivation with memory hardness."""
    pw = "SuperSecure#Passphrase2026!"
    hashed = hash_password(pw)
    assert hashed.startswith("$argon2id$")
    assert verify_password(pw, hashed) is True
    assert verify_password("WrongPassphrase", hashed) is False

def test_auth_login_and_token_rotation():
    """Test OAuth2 + JWT authentication and zero-trust token rotation."""
    login_res = client.post("/api/v1/auth/login", json={
        "username": "muhammadislom",
        "password": "Antigravity#2026@MilitaryGrade"
    })
    assert login_res.status_code == 200
    tokens = login_res.json()
    assert "access_token" in tokens
    assert "refresh_token" in tokens

    # Test token rotation
    refresh_res = client.post("/api/v1/auth/refresh", json={
        "refresh_token": tokens["refresh_token"]
    })
    assert refresh_res.status_code == 200
    new_tokens = refresh_res.json()
    assert "access_token" in new_tokens
    # New rotated refresh token must be issued
    assert new_tokens["refresh_token"] != tokens["refresh_token"]

def test_defense_telemetry():
    """Verify defense telemetry and threat stream."""
    status_res = client.get("/api/v1/telemetry/status")
    assert status_res.status_code == 200
    assert "Cloudflare" in status_res.json()["waf_status"]

    metrics_res = client.get("/api/v1/telemetry/metrics")
    assert metrics_res.status_code == 200
    assert len(metrics_res.json()) >= 4

    threat_res = client.get("/api/v1/telemetry/threat-feed")
    assert threat_res.status_code == 200
    assert len(threat_res.json()) > 0

def test_frontier_ai_engine():
    """Verify frontier AI endpoint for UI synthesis and code integrity."""
    req_payload = {
        "prompt": "Test telemetry card UI",
        "model": "gemini-3.5-pro",
        "mode": "ui_generation"
    }
    ai_res = client.post("/api/v1/ai/analyze", json=req_payload)
    assert ai_res.status_code == 200
    ai_data = ai_res.json()
    assert ai_data["security_score"] >= 95
    assert len(ai_data["output"]) > 0

def test_projects_catalog():
    """Verify portfolio projects endpoint and filtering."""
    res = client.get("/api/v1/projects")
    assert res.status_code == 200
    projects = res.json()
    assert len(projects) == 6

    # Detail check
    proj_id = projects[0]["id"]
    detail_res = client.get(f"/api/v1/projects/{proj_id}")
    assert detail_res.status_code == 200
    assert detail_res.json()["id"] == proj_id

def test_encrypted_contact_submission():
    """Verify contact dispatch and SHA-256 cryptographic receipt generation."""
    msg = {
        "name": "Jane Enterprise",
        "email": "jane@defense.gov",
        "subject": "Quantum Cryptography Inquiry",
        "message": "We require deployment of zero-trust architecture across edge nodes."
    }
    res = client.post("/api/v1/contact", json=msg)
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "DISPATCH_CONFIRMED"
    assert "cryptographic_receipt" in data
    assert data["cryptographic_receipt"].startswith("SHA256-")

def test_telegram_bot_status():
    """Verify Telegram bot operational telemetry endpoint."""
    res = client.get("/api/v1/contact/bot-status")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "ONLINE"
    assert "muhammadislom10" in data["bot_handle"]
    assert "99.99%" in data["uptime"]

def test_api_v1_health_and_metrics():
    """Verify dedicated /api/v1/health and /api/v1/metrics endpoints."""
    h_res = client.get("/api/v1/health")
    assert h_res.status_code == 200
    h_data = h_res.json()
    assert h_data["status"] == "HEALTHY"
    assert h_data["uptime_seconds"] >= 0

    m_res = client.get("/api/v1/metrics")
    assert m_res.status_code == 200
    assert "antigravity_http_requests_total" in m_res.text

def test_contact_send_api():
    """Verify POST /api/v1/contact/send with cryptographic validation and receipt."""
    payload = {
        "name": "Enterprise Client",
        "email": "partner@enterprise.io",
        "subject": "Telegram Automation Project RFP",
        "message": "We would like to hire you for a high-concurrency bot architecture.",
        "phone": "+998 50 301 63 47",
        "company": "Enterprise Global"
    }
    res = client.post("/api/v1/contact/send", json=payload)
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "DISPATCH_CONFIRMED"
    assert "SHA256-" in data["cryptographic_receipt"]
    assert data["zero_trust_status"] == "VERIFIED_AUDIT_PASS"

def test_projects_architecture_and_statistics():
    """Verify deep project architecture and portfolio analytics endpoints."""
    stat_res = client.get("/api/v1/projects/statistics/summary")
    assert stat_res.status_code == 200
    stats = stat_res.json()
    assert stats["total_active_projects"] == 6
    assert stats["average_performance_score"] >= 95

    arch_res = client.get("/api/v1/projects/word-game/architecture")
    assert arch_res.status_code == 200
    arch = arch_res.json()
    assert "WebSocket" in arch["data_flow"]

    filter_res = client.get("/api/v1/projects?category=Multiplayer Gaming")
    assert filter_res.status_code == 200
    assert len(filter_res.json()) >= 1

