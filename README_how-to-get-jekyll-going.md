
# Setting up this site initially

git clone https://github.com/mykagrove/mykagrove.github.io.git

cd mykagrove.github.io

git checkout source

# check it out again within, rename to _site and switch it to master branch::

git clone https://github.com/mykagrove/mykagrove.github.io.git

move mykagrove.github.io _site

cd _site

git checkout master



That way you've got a folder which is the site source and inside that, a folder to which the site
compiles.. which is actually the master branch of the whole repo. IM A GENIUS



(Install ruby and jekyll first if need be - see troubleshooting at end)



# linux (if need be)

sudo apt-get install nodejs

# windows (install node normally)



# if using jekyll-assets - try installing manually on windows although it's fewked, otherwise:

sudo apt-get install imagemagick



# install bundler

gem install bundler

# ^ in the VM if using one!!



# install everything in the gemfile by running:

bundle install

# ^ in the VM if using one!! See troubleshooting if problems (likely)

# NOTE: if you've installed once, it locks versions so you have to use:

bundle update

bundler update

# ^ in linux

# Troubleshooting the above:

delete Gemfile.lock

sudo gem cleanup

or bundle* commands above with sudo



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

However, the solution to this is create a 'source' branch (and make it default) to commit
everything to, then have it only commit the _site folder to master branch. See below:



# How to commit


Push.bat

(it runs git commit to the source branch in this folder, then CDs into _site and commits that to
master)




# TROUBLESHOOTING (LINUX)


# Ruby is notoriously difficult to install an up-to-date version, this is the way:

gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.2.2

sudo reboot

sudo apt-get install python-software-properties

sudo apt-add-repository ppa:brightbox/ruby-ng

sudo apt-get update

sudo apt-get install ruby2.2-dev

rvm use 2.2.2 --default

# Make sure jekyll is installed with sudo (it's a thing)

sudo gem install jekyll

sudo gem install bundler

bundler update




# Remove all gems if ever needed

for x in `gem list --no-versions`; do gem uninstall $x -a -x -I; done
