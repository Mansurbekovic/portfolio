# -----------------------------------------------------------------------------
# ANTIGRAVITY INNOVATIONS — 1-CLICK DEV ENVIRONMENT LAUNCHER
# -----------------------------------------------------------------------------
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "   🚀 ANTIGRAVITY INNOVATIONS — DEV LAUNCHER" -ForegroundColor Cyan
Write-Host "   Where Unbreakable Security Meets Artful Engineering" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan

$CurrentDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Start Backend
Write-Host "`n[1/2] Starting Python FastAPI Backend (Port 8000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$CurrentDir\backend'; uvicorn app.main:app --reload --host 127.0.0.1 --port 8000"

# Start Frontend
Write-Host "[2/2] Starting React 19 + Vite Frontend (Port 5173)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$CurrentDir\frontend'; npm run dev"

Write-Host "`n✓ System Online!" -ForegroundColor Cyan
Write-Host "  Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "  Backend API: http://127.0.0.1:8000/api/v1/docs" -ForegroundColor White
Write-Host "=================================================================" -ForegroundColor Cyan
