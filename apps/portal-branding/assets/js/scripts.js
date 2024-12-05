(function ($) {

	$(function () {
		$.ajaxSetup({
			cache: false
		});
		setTimeout(() => {
			// /*PRELOADER JS*/
			// $(window).on('load', function () {
			// 	$('.spinner').fadeOut();
			// 	$('.preloader').delay(350).fadeOut('slow');
			// });
			// /*END PRELOADER JS*/

			/*START MENU JS*/
			$('#main-menu').slicknav({
				label: '',
				duration: 1000,
				easingOpen: "easeOutBounce", //available with jQuery UI
				prependTo: '#mobile_menu',
				closeOnClick: true,
				easingClose: "swing",
				easingOpen: "swing",
				openedSymbol: "&#9660;",
				closedSymbol: "&#9658;"
			});

			/* START MENU JS */
			$('.navbar-fixed-top a').on('click', function (e) {
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});


			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('#navigation').addClass('menu-shrink');
				} else {
					$('#navigation').removeClass('menu-shrink');
				}
			});

			$(document).on('click', '.navbar-collapse.in', function (e) {
				if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
					$(this).collapse('hide');
				}
			});
			/* END MENU JS */


			// /* START APP-SCREENS */

			// $('.app_screens_slider').slick({
			// 	slidesToShow: 5,
			// 	slidesToScroll: 1,
			// 	infinite: true,
			// 	centerMode: true,
			// 	centerPadding: '0px',
			// 	autoplay: false,
			// 	dots: true,
			// 	autoplaySpeed: 5000,
			// 	responsive: [
			// 		{
			// 			breakpoint: 991,
			// 			settings: {
			// 				slidesToShow: 3,
			// 			}
			// 		},
			// 		{
			// 			breakpoint: 767,
			// 			settings: {
			// 				slidesToShow: 1,
			// 			}
			// 		}
			// 	]
			// });
			// /* START APP-SCREENS */

			// Vide Section
			$("#video").simplePlayer();

			// // Review slider
			// $('.review_slider').owlCarousel({
			// 	smartSpeed: 650,
			// 	navText: ['<i class="ti-arrow-left "></i>', '<i class="ti-arrow-right"></i>'],
			// 	autoplay: true,
			// 	autoplayTimeout: 10000,
			// 	mouseDrag: true,
			// 	loop: true,
			// 	nav: true,
			// 	responsive: {
			// 		0: {
			// 			items: 1
			// 		},
			// 		600: {
			// 			items: 1
			// 		},
			// 		1000: {
			// 			items: 3
			// 		}
			// 	}
			// });

			// $('.slider_active').owlCarousel({
			// 	smartSpeed: 650,
			// 	navText: ['<i class="ti-arrow-left "></i>', '<i class="ti-arrow-right"></i>'],
			// 	autoplay: true,
			// 	autoplayTimeout: 10000,
			// 	mouseDrag: true,
			// 	loop: true,
			// 	nav: true,
			// 	responsive: {
			// 		0: {
			// 			items: 1
			// 		},
			// 		600: {
			// 			items: 1
			// 		},
			// 		1000: {
			// 			items: 1
			// 		}
			// 	}
			// })
		}, 1500);

	});


})(jQuery);