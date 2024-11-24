@echo off
cd /d "%~dp0"
start cmd /c "npm start"
timeout /t 5 >nul
start chrome --incognito http://localhost:3000
pause