
When you put HTML in markdown, sometimes..
in order to stop it doing <p> on linebreaks and stuff the top level tag needs to be a default block element and <a> isn't one.
So you have to put markdown="block" on the <a> tag.. or wrap the whole thing in a div.
Say a for loop such as

<div>
{% for product in site.products %}
<a href="{{ product.url }}">foo</a>
{% endfor %}
</div>

You need the wrapping div or it starts parsing it all as text like an idiot.
