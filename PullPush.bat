@echo off

echo.
echo  **** Committing source code ****
echo.
git config credential.helper store
git add --all
git commit -m "."
git pull origin source
echo.
echo  ****     We okay to push?     **
echo.
pause
git push origin source


echo.
echo  **** Committing master code (the site) ****
echo.
cd _site
git config credential.helper store
git add --all
git commit -m "."
git pull origin master
echo.
echo  ****     We okay to push?     **
echo.
pause
git push origin master


echo.
echo.
echo ****************
echo *  All done!!  *
echo ****************
echo.
echo.

pause