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

https://github.com/jekyll-assets/jekyll-assets/tree/legacy#jekyllassets
this might update soon to v3 but it's all buggy