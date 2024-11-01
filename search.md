---
layout: default
title: Search
---

<form action="{{ site.baseurl }}/search.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <input type="submit" value="search">
</form>

<ul id="search-results"></ul>  

<script>
  window.store = {
    {% for resource in site.resources %}
      "{{ resource.url | slugify }}": {
        "title": "{{ resource.title | xml_escape }}",
        "author": "{{ resource.author | xml_escape }}",
        "category": "{{ resource.category | xml_escape }}",
        "content": {{ resource.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ resource.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="{{ site.baseurl }}/assets/js/lunr.js"></script>
<script src="{{ site.baseurl }}/assets/js/search.js"></script>



### [Return to Collection](https://MatSciEdu.github.io/DSM-CORE/resource-collection)  
### [Return Home](https://MatSciEdu.github.io/DSM-CORE)
