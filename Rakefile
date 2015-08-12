require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system "echo 1"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "echo 2"
    system "git commit -m #{message.inspect}"
    system "git remote add origin https://github.com/mykagrove/mykagrove.github.io"
    system "echo 3"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end