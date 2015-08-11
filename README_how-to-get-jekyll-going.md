(Install ruby first if need be)

gem install jekyll
gem install jekyll-sitemap

jekyll build --watch

# or better yet, this which is accessible at localhost:4000
jekyll serve

#.. should happily be compiling into /_site
#(if errors, do the stuff below)

# now, to minify the js (sass already happily compresses if set in _config.yml)
# install imagemagick (sigh!):
http://docs.wand-py.org/en/0.2.4/guide/install.html

gem install jekyll-assets
gem install uglifier

(re-open prompt)
