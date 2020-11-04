---
layout: default
title: Liquid objects tags and filters
---

<h1> {{ page.title }} </h1>


## Liquid lets you do a lot!


{{ page.title | upcase }}

{{ page.title | remove: "and" }}

{{ 'logo' | append: '.jpg' }}

{{ "I wish I was an Oscar Myers weiner." | truncatewords: 4 }}

{% unless page.title == 'Home Page' %}
  This is not the home page.
{% endunless %}

{% if page.title == 'Liquid objects tags and filters' %}
  Jekyll Liquid is so kewl!
{% endif %}


{% assign favorite_food = 'unhealthy' %}

My favorite food is {{ favorite_food }}.

{% assign first_time_visitor = true %}
{% if first_time_visitor == true %}
  Welcome to the site!
{% endif %}

