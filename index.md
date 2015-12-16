---
layout: default
---

{% comment %}
	{{ site | inspect }}
	{{ site.posts | inspect }}
{% endcomment %}

<br /><br />Posts:<br />
{% for post in site.posts %}
	{{ post.title }}
{% endfor %}

<br /><br />

{% comment %}
<ul class="post-list">
	{% for post in site.posts %}
		<li>
			<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

			<h2>
				<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
			</h2>
		</li>
	{% endfor %}
</ul>

{% endcomment %}
