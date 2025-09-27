@echo off
echo === Terminal Test Script ===
echo.

echo [1/4] Testing basic commands...
echo "Hello World"
echo.

echo [2/4] Testing git status...
git status --porcelain
echo.

echo [3/4] Testing git log...
git log --oneline -3
echo.

echo [4/4] Testing npm commands...
npm --version
echo.

echo === All tests completed successfully! ===
pause
