---
layout: blog
title:  "Scrumtuous Blog on Agile, Scrum & DevOps"
blurb: "Here are all of our tasty blog posts."
date:   2022-01-01 01:11:00 -0500
categories: 
canonical: http://www.scrumtuous.com/blog.html
keywords: Scrumtuous Blog Agile DevOps AWS Certification Scrum
---
abc
{% for post in site.posts %}			
<div style="border: 1px solid #DEDEDE;" class=" col-12 col-sm-12  col-md-6 col-lg-4 mb-1 mt-1">

               
               <div  style="border: 1px dashed #6831e3;" class="card mb-1 mt-2">
                  <div class="card-header">
                     <a href="{{ post.url }}">{{ post.title }}</a>
                  </div>
                  <div class="card-body">
                     <p class="card-text">{{ post.blurb }}</p>
                     <a href="{{ post.url }}" class="btn btn-primary btn-sm" style="background: linear-gradient(45deg, #6831e3, #f528cb);">Check it out</a>
                  </div>
               </div>
               



</div>
{% endfor %}

<hr/>

{% for post in site.posts %}			
<div style="border: 1px solid #DEDEDE;" class="col-12 col-sm-12 col-md-6 col-lg-4 mb-1 mt-1">
   <div style="border: 1px dashed #6831e3;" class="card mb-1 mt-2">
      <div class="card-header">
         <a href="{{ post.url }}">
            {{ post.title }}
            {% if post.secured %}
               <span style="color: red; margin-left: 5px;">
                                    <!-- SVG lock icon -->
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 3px;">
                     <path d="M12 2C9.243 2 7 4.243 7 7v5H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-2V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v5H9V7zm5 9.722V18a1 1 0 0 1-2 0v-1.278a2 2 0 1 1 2 0z" fill="currentColor"/>
                  </svg>Locked
               </span>
            {% endif %}
         </a>
      </div>
      <div class="card-body">
         <p class="card-text">{{ post.blurb }}</p>
         <a href="{{ post.url }}" class="btn btn-primary btn-sm" style="background: linear-gradient(45deg, #6831e3, #f528cb);">Check it out</a>
      </div>
   </div>
</div>
{% endfor %}
