$(function () {
    'use strict'; // Start of use strict

    /* header animation*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("fixed-me header-fixed");
        } else {
            $("header").removeClass("fixed-me header-fixed");
        }
    });
    /*end header animation*/

    /*menu toggle button*/
    $('.navbar-icon').on('click', function () {
        $(this).toggleClass('open');
    });
    /*end menu toggle button*/
    /*quote popup*/
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
    /*quote popup end*/

    /*click to scroll menu*/
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 50
        }, 1500);
    });
    /*end scroll menu*/
    $('.nav-link').on('click', function (e) {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < 991) {
            $(".navbar-toggler").click();
        }
    });

    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ti ti-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
    $(function () {
        var theYear = new Date().getFullYear();
        $('#year').html(theYear);
    });

});


/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function () {
    'use strict'; // Start of use strict
    // Loader 
    $('#preloader').delay(1000).fadeOut(500);
});
