---
layout: default
title: Resource Collection
---

<body>
  <h1>Index of Resources</h1>
  <ul>
    {% for resource in site.resources %}
    <li><a href="{{ site.baseurl | escape }}/resources/{{resource.url}}">{{resource.title}}</a> </li>
    {% endfor %}
  </ul>
</body>

{% for resource in site.resources %}
 <span>{{ resource.title }}</span>
{% endfor %}

### [Return to Collection](https://bafflerbach.github.io/DSM-CORE/resource-collection)
### [Return Home](https://bafflerbach.github.io/DSM-CORE)
