---
layout: default
title: Resource Collection
---

<body>
  <h1>Index of Resources</h1>
  <ul>
    {% for resource in site.resources %}
    <li>
      <a href="{{ site.baseurl | escape }}{{resource.url}}"><h2>{{resource.title}}</h2></a><br>
      <b>Resource categories:</b> {{resource.category}}<br>
      <b>Last Updated:</b> {{resource.date}}<br>
    </li>
    {% endfor %}
  </ul>
</body>

***
### [Return to Collection](https://bafflerbach.github.io/DSM-CORE/resource-collection)
### [Return Home](https://bafflerbach.github.io/DSM-CORE)
