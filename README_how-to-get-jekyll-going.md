
# Setting up this site initially
git clone https://github.com/mykagrove/mykagrove.github.io.git
git checkout source
# then within that, make a folder called _site .. go into it and
git clone https://github.com/mykagrove/mykagrove.github.io.git
git checkout master

That way you've got a folder which is the site source and inside that, a folder to which the site compiles.. which is actually the master branch of the whole repo. IM A GENIUS

(Install ruby first if need be)

gem install jekyll

# linux (if need be)
sudo apt-get install nodejs
# windows (install node normally)

# if using jekyll-assets - try installing manually on windows although it's fewked, otherwise:
sudo apt-get install imagemagick

# install everything in the gemfile by running:
gem install bundle
bundle

# might need this
bundle update

# (need to reboot linux at this point)

# WINDOWS
jekyll build --watch
# or better yet, this which is accessible at localhost:4000
jekyll serve

# LINUX (presumably accessing external /media/sf_www files)
# we've gotta force polling and not use serve (although it's possible, but not useful)
jekyll build --watch --force_polling


#.. should happily be compiling into /_site
#(if errors, do the stuff below)

# now, to minify the js (sass already happily compresses if set in _config.yml)
# install imagemagick (sigh!):
http://docs.wand-py.org/en/0.2.4/guide/install.html

(re-open prompt)

(https://github.com/jekyll-assets/jekyll-assets/tree/legacy#jekyllassets)
this might update soon to v3 but it's all buggy


# IMPORTANT NOTE
Github pages compiles jekyll stuff in safe mode, so can't use jekyll-assets or other plugins!
However, the solution to this is create a 'source' branch (and make it default) to commit everything to, then have it only commit the _site folder to master branch. See below:

# How to commit

(Actually, IGNORE THIS BIT:)
rake publish
This uses Rakefile to commit to the two branches
(http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)

Push.bat
(it runs git commit to the source branch in this folder, then CDs into _site and commits that to master)