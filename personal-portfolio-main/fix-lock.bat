@echo off
echo === Cleaning up lock files ===
cd /d "c:\Users\karti\OneDrive\Documents\Mohan_vivek\personal-portfolio-main"
if exist "yarn.lock" del yarn.lock
if exist "package-lock.json" del package-lock.json
echo === Generating new yarn.lock ===
yarn install
echo === Complete ===
pause
