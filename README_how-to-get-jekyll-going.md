(Install ruby first if need be)

# install everything in the gemfile by running:
gem install bundle
bundle

jekyll build --watch

# or better yet, this which is accessible at localhost:4000
jekyll serve

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
rake publish

This uses Rakefile to commit to the two branches

(http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)