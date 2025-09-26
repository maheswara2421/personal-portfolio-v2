@echo off
echo === Installing with npm and generating yarn.lock ===
cd /d "c:\Users\karti\OneDrive\Documents\Mohan_vivek\personal-portfolio-main"
if exist "yarn.lock" del yarn.lock
if exist "package-lock.json" del package-lock.json
npm install --legacy-peer-deps
yarn import
echo === Complete ===
pause
