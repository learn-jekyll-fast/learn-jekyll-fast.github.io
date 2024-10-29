// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 6.0 AOS ACTIVE CODE
// :: 7.0 PREVENT DEFAULT ACTIVE CODE
// :: 8.0 COUNTERUP ACTIVE CODE
// :: 9.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 10.0 FEATURES SLIDER ACTIVE CODE
// :: 11.0 TESTIMONIALS ACTIVE CODE
// :: 12.0 APP SCREENSHOTS ACTIVE CODE
// :: 13.0 CONTACT FORM ACTIVE CODE

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $(window).on("load", function () {
        $('.preloader-wapper').addClass('loaded');
        if ($('.preloader-wapper').hasClass('loaded')) {
            $('.preloader-main').delay(1200).queue(function () {
                $(this).remove();
            });
        }
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 6.0 AOS ACTIVE CODE
    AOS.init();

    // :: 7.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 8.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 9.0 FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".fancyVideo").fancybox({
        animationEffect : "zoom-in-out",
        transitionEffect : "circular",
        maxWidth    : 800,
        maxHeight   : 600
    });

    // :: 10.0 FEATURES SLIDER ACTIVE CODE
    $('.features-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        dotsContainer: '.features-content'
    });

    // :: 11.0 TESTIMONIALS ACTIVE CODE
    var testimonialSlider = $('.testimonials');
    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });

    testimonialSlider.on("translate.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
    testimonialSlider.on("translated.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    });
    $('.thumb-next').on('click', function () {
        testimonialSlider.trigger('next.owl.carousel', [300]);
        return false;
    });
    $('.thumb-prev').on('click', function () {
        testimonialSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });

    // :: 12.0 APP SCREENSHOTS ACTIVE CODE
    $('.app-screenshots').slick({
        dots: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
          ]
    });

    // :: 13.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

}(jQuery));