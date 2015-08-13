@echo off

echo.
echo Committing source code
git add --all
git commit -m '.'
git push origin source


echo.
echo Committing master code (the site)
cd _site
git add --all
git commit -m '.'
git push origin source

pause