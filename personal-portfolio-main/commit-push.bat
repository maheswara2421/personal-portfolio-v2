@echo off
echo === Committing and pushing changes ===
cd /d "c:\Users\karti\OneDrive\Documents\Mohan_vivek\personal-portfolio-main"
git add yarn.lock
git commit -m "fix: regenerate yarn.lock to fix build error"
git push
echo === Complete ===
pause
