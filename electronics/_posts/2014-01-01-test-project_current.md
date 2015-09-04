---
layout:     project
title:      Project Test Current
permalink:  /:categories/:title.html
summary:    Just a cheeky test
category:   electronics
tags:       electronics rpi raspberrypi chiptunes
gallery-images:
 - file: test4.jpg
   alt: test4
 - file: black.jpg
   alt: black
 - file: red.jpg
   alt: red
 - file: test3.jpg
   alt: Test3 alt text
 - file: test.jpg
   alt: Test alt text
---




~~~
function sassWatch(data) {
	var sassStyle = isProduction === true ? 'compressed' : 'expanded';

	//gulp.src(data.watch)
	//.pipe(watch({glob: data.watch, emitOnGlob: true, silent: true}, function() {

	watch(data.watch, {emitOnGlob: true, silent: true}, function(file, cb) {

	sassCompiling();

	var css = rubySass(data.src, { sourcemap: true })
~~~
{: .beast data-mode="javascript"}





Inline code blocks too ``function proper() { console.log('code blocks'); }``





Testing project layout.

### When adding images use the assets like a baws:

#### Pixels (contain)
{% image test.jpg alt="Test bro" [resize:50x50] %}

#### Pixels (cover)
{% image test.jpg alt="Test bro" [resize:50x50^] %}

#### Pixels (force)
{% image test.jpg alt="Test bro" [resize:!50x50] %}

#### Percent (contain)
{% image test.jpg alt="Test bro" [resize:25%] %}



### Can link to asset files like:
{{ 'test.jpg' | asset_path }}

https://github.com/jekyll-assets/jekyll-assets/tree/legacy#jekyllassets


https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Can link to other posts:
[disabled while figuring out directory structure]
{% comment %}
<a href="{% post_url 2017-01-01-coming-soon %}">Like this</a>
{% endcomment %}

### When I come to it, include some photos of my sketches, it's gold mate.
Srs.


# \#

## \#\#

### \#\#\#

#### \#\#\#\#


There is a significant amount of subtle, yet precisely calibrated, styling to ensure
that your content is emphasized while still looking aesthetically pleasing.

All links are easy to [locate and discern](#), yet don't detract from the harmony
of a paragraph. The _same_ goes for italics and __bold__ elements. Even the the strikeout
works if <del>for some reason you need to update your post</del>. For consistency's sake,
<ins>The same goes for insertions</ins>, of course.

### Code, with syntax highlighting

Here's an example of some ruby code with line anchors.

{% highlight ruby lineanchors %}
# The most awesome of classes
class Awesome < ActiveRecord::Base
	include EvenMoreAwesome

	validates_presence_of :something
	validates :email, email_format: true

	def initialize(email, name = nil)
		self.email = email
		self.name = name
		self.favorite_number = 12
		puts 'created awesomeness'
	end

	def email_format
		email =~ /\S+@\S+\.\S+/
	end
end
{% endhighlight %}

Here's some CSS:

{% highlight css %}
.foobar {
	/* Named colors rule */
	color: tomato;
}
{% endhighlight %}

# Headings!

They're responsive, and well-proportioned (in `padding`, `line-height`, `margin`, and `font-size`).
They also heavily rely on the awesome utility, [BASSCSS](http://www.basscss.com/).

##### They draw the perfect amount of attention

This allows your content to have the proper informational and contextual hierarchy. Yay.

### There are lists, too

	* Apples
	* Oranges
	* Potatoes
	* Milk

	1. Mow the lawn
	2. Feed the dog
	3. Dance

### Images look great, too

![desk](https://cloud.githubusercontent.com/assets/1424573/3378137/abac6d7c-fbe6-11e3-8e09-55745b6a8176.png)


### There are also pretty colors

Also the result of [BASSCSS](http://www.basscss.com/), you can <span class="bg-dark-gray white">highlight</span> certain components
of a <span class="red">post</span> <span class="mid-gray">with</span> <span class="green">CSS</span> <span class="orange">classes</span>.

I don't recommend using blue, though. It looks like a <span class="blue">link</span>.

### Stylish blockquotes included

You can use the markdown quote syntax, `>` for simple quotes.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta mauris.

However, you need to inject html if you'd like a citation footer. I will be working on a way to
hopefully sidestep this inconvenience.

<blockquote>
	<p>
		Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
	</p>
	<footer><cite title="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</cite></footer>
</blockquote>

### There's more being added all the time

Checkout the [Github repository](https://github.com/johnotander/pixyll) to request,
or add, features.

Happy writing.
