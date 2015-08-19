

<br />OKAY BANNER<br />


<br /><br />✓<br />
{{ page.test }}


<br /><br />✓<br />
{% image test.jpg [resize:30x20] %}

<br /><br />✓<br />
{{ 'test.jpg alt="Logo" [resize:30x20]' | image }}

<br /><br />X<br />
{% capture imagestring %}{{ page.test }} alt="Logo" [resize:30x20]{% endcapture %}
{{ imagestring | image }}
{% comment %}
{% endcomment %}

<br /><br />X<br />
{{ ' [resize:30x20]' | prepend: page.test | image }}
{% comment %}
{% endcomment %}


<br /><br />?<br />
{{ page.test | append: ' [resize:40x30]' | image }}
{% comment %}
{% endcomment %}


{% comment %}
<br /><br />?<br />
{% capture filename %}'{{ page.test }} [resize:20x20]'{% endcapture %}
{% endcomment %}
{% comment %}
{% assign filename = page.test | prepend: "'" | append: " [resize:20x20]'" %}
<br /> <br /> <br /> <br />
{{ filename }}
<br /> <br /> <br /> <br />
{{ filename | image }}
{% endcomment %}



{% comment %}
{{ page.test | append:' [resize:30x20]' | image }}
{% endcomment %}


<br />NOKAY BANNER<br />
