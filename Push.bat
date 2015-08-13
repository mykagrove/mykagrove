@echo off

echo.
echo  **** Committing source code ****
git config credential.helper store
git add --all
git commit -m '.'
git push origin source


echo.
echo  **** Committing master code (the site) ****
echo.
cd _site
git config credential.helper store
git add --all
git commit -m '.'
git push origin source

pause