---
title: Liquid objects tags and filters

---

<h1> {{ page.title}} </h1>


Here's the site time:
{{ site.time }}

Here's a nicer site time format: 
{{ site.time | date_to_string }}


{% unless page.title == 'Home Page' %}
  This is not the home page.
{% endunless %}

{% unless page.title == 'Liquid objects tags and filters' %}
  Jekyll Liquid is so kewl!
{% endunless %}


{{ page.title | upcase }}

{{ pate.title | remove: "and" }}

{{ 'logo' | append: '.jpg' }}

{{ 'jekyll-git-hub' | camelcase }}

{{ "I wish I was an Oscar Myers weiner." | truncatewords: 4 }}


{% assign favorite_food = 'whopper' %}

My favorite food is {{ favorite_food }}.


{% assign first_time_visitor = true %}
{% if first_time_visitor == true %}
  Welcome to the site!
{% endif %}
