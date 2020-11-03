---
title: Liquid objects tags and filters

---

<h1> {{ page.title }} </h1>


## Liquid lets you do a lot!


{{ page.title | upcase }}

{{ page.title | remove: "and" }}


{{ 'logo' | append: '.jpg' }}

{{ "I wish I was an Oscar Myers weiner." | truncatewords: 4 }}
