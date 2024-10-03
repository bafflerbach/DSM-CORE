---
permalink: /assets/js/search-content.js
---
window.store = {
  {% assign searchable_pages = site.pages | where_exp: "page", "page.menu == 'main'" %}
  {% assign searchable_documents = site.documents %}
  {% for page in searchable_pages %}
    {% assign searchable_documents = searchable_documents | push: page %}
  {% endfor %}
  {% for doc in searchable_documents %}
    "{{ doc.url | slugify }}": {
      "title": "{{ doc.title | xml_escape }}",
      "author": "{{ doc.author | xml_escape }}",
      "category": "{{ doc.category | xml_escape }}",
      "content": {{ doc.content | strip_html | jsonify }},
      "url": "{{ doc.url | xml_escape }}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
}
