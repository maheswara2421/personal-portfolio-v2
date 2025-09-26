@echo off
echo === Force installing with yarn ===
cd /d "c:\Users\karti\OneDrive\Documents\Mohan_vivek\personal-portfolio-main"
if exist "yarn.lock" del yarn.lock
yarn install --force
echo === Force install complete ===
pause
