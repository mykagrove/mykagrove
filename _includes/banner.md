

<br />BANNER<br />

{% comment %}
{% if page.banner %}
  {% for image in page.banner %}
    <img src="{{ image }}" />
  {% endfor %}
{% endif %}
{% endcomment %}


{{ page.test | append: ' [resize:40x30]' | image }}


<br />/ BANNER<br />
