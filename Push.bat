@echo off

git add --all
git commit -m '.'
git push origin source

cd _site

git add --all
git commit -m '.'
git push origin source

pause