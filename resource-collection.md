---
layout: default
title: Resource Collection
---

<body>
  <h1>Index of Resources</h1>
  <ul>
    {% for url in site.pages %}
    <li><a href="{{ site.baseurl | escape }}{{ url.path | escape }}">{{ url.path | escape }}</a> </li>
    {% endfor %}
  </ul>
</body>

[back](../)
