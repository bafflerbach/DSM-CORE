---
layout: default
title: Resource Collection
---

<body>
  <h1>Index of Resources</h1>
  <ul>
    {% for resource in site.resources %}
    <li>
      <a href="{{ site.baseurl | escape }}{{resource.url}}">{{resource.title}}</a><br>
      Resource categories: {{resource.category}}<br>
      Last Updated: {{resource.date}}<br>
    </li>
    {% endfor %}
  </ul>
</body>

{% for resource in site.resources %}
 <span>{{ resource.title }}</span>
{% endfor %}

***
### [Return to Collection](https://bafflerbach.github.io/DSM-CORE/resource-collection)
### [Return Home](https://bafflerbach.github.io/DSM-CORE)
