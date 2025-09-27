@echo off
echo === Creating yarn.lock from package.json ===
cd /d "c:\Users\karti\OneDrive\Documents\Mohan_vivek\personal-portfolio-main"
if exist "yarn.lock" del yarn.lock
yarn import
echo === Complete ===
pause
