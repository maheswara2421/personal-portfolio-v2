@echo off
echo === PROJECT VERIFICATION TEST ===
echo.

echo [1/5] Testing package.json scripts...
call npm run --silent build --dry-run 2>nul && echo "✅ Build script exists" || echo "❌ Build script issue"
echo.

echo [2/5] Testing config files...
if exist "src\config.js" (echo "✅ Config file exists") else (echo "❌ Config file missing")
if exist "tailwind.config.js" (echo "✅ Tailwind config exists") else (echo "❌ Tailwind config missing")
if exist "postcss.config.js" (echo "✅ PostCSS config exists") else (echo "❌ PostCSS config missing")
echo.

echo [3/5] Testing content structure...
if exist "content" (echo "✅ Content directory exists") else (echo "❌ Content directory missing")
echo.

echo [4/5] Testing image assets...
if exist "src\images\logo.png" (echo "✅ Logo image exists") else (echo "❌ Logo image missing")
if exist "static\og.png" (echo "✅ OG image exists") else (echo "❌ OG image missing")
echo.

echo [5/5] Testing dependencies...
call npm list --depth=0 --silent | findstr "gatsby" >nul && echo "✅ Gatsby installed" || echo "❌ Gatsby missing"
call npm list --depth=0 --silent | findstr "tailwindcss" >nul && echo "✅ TailwindCSS installed" || echo "❌ TailwindCSS missing"
echo.

echo === VERIFICATION COMPLETE ===
echo.
echo If all items show ✅, the project is properly configured!
echo If any show ❌, there may be remaining issues to address.
pause
