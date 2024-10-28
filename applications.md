---
layout: minimal
title:  "Applications Dashboard"
blurb: "Welcome to the applications dashboard."
---

<section id="testimonials" class="section testimonials style2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title style2">
                        <span class="wow fadeInDown" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">Applications Dashboard</span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">Your Productivity Apps </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">This applications portal allows React apps to be quickly deployed, removed and updated on the fly!</p>
                    </div>
                </div>
            </div>
            <div class="row">
                
{% for page in site.pages %}
  {% if page.path contains 'apps/' %}
  <div class="col-lg-4 col-md-6 col-12">
  
			  <div class="single-testimonial">
				<div class="top-section">
					<i class="lni lni-ux"></i>
					<h3><a href="{{ page.url }}">{{ page.title }}</a>
						
						<span><a href="{{ page.url }}">Get Started!</a></span>
					</h3>
				</div>
				<p>{{ page.blurb }}</p>
			</div>

				 </div>
  {% endif %}
{% endfor %}
               
                
            </div>
        </div>
    </section>




