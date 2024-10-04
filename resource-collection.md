---
layout: default
title: Resource Collection
---

<body>
  <h1>Index of Resources</h1>
  
  <ul>
    {% for resource in site.resources %}
    <li>
      <a href="{{ site.baseurl | escape }}{{resource.url}}"><h3>{{resource.title}}</h3></a>
      <b>Categories:</b> {{resource.category}}<br>
      <b>Last Updated:</b> {{resource.date | date: "%Y-%m-%d"}}<br>
    </li>
    {% endfor %}
  </ul>
</body>

***
### [Return to Collection](https://bafflerbach.github.io/DSM-CORE/resource-collection)
### [Return Home](https://bafflerbach.github.io/DSM-CORE)
