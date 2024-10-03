---
layout: default
---

## Resource Collection

[Resource 1](https://bafflerbach.github.io/DSM-CORE/resources/template_resource)

### auto section? does html code here work?
<head>
  <title>Index of /</title>
</head>

<body>
  <h1>Index of Resources</h1>
  <ul>
    {% for url in site.resources %}
    <li><a href="{{ site.baseurl | escape }}{{ url.path | escape }}">{{ url.path | escape }}</a> </li>
    {% endfor %}
  </ul>
</body>

[back](../)
