@echo off
title Antigravity Innovations Launcher
echo =================================================================
echo   [!] ANTIGRAVITY INNOVATIONS -- SYSTEM INITIALIZER
echo   Where Unbreakable Security Meets Artful Engineering
echo =================================================================

start "Antigravity Backend (FastAPI)" cmd /k "cd /d %~dp0backend && uvicorn app.main:app --reload --host 127.0.0.1 --port 8000"
timeout /t 2 >nul
start "Antigravity Frontend (React 19)" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo [OK] Both development servers have been launched in separate terminals!
echo   * React 19 Frontend: http://localhost:5173
echo   * FastAPI OpenAPI Docs: http://127.0.0.1:8000/api/v1/docs
echo =================================================================
pause
