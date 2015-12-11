---
layout:     project
title:      Image Test 2 __
permalink:  /:categories/:title.html
summary:    Just a cheeky test
category:   electronics
paginate:
  collection: electronics
tags:       electronics rpi raspberrypi chiptunes
gallery-images:
 - file: test4.jpg
   alt: test
---



<br />dwadwa<br />

{% for electronic in paginator.electronics %}
{{ electronic }}
{{ electronic.title }}
{{ electronic.content }}
{% endfor %}

<br />dwadwa<br />