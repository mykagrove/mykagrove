---
layout: default
---

{% comment %}
	Simplified from _layouts/categegory.md
{% endcomment %}

<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
			<div class="posts">
				{% for post in site.posts] %}
					{% include listing.html %}
				{% endfor %}
			</div>
		</div>
	</div>
</div>
