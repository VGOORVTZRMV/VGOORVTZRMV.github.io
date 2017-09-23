/*
	Theme Custom Scripts
*/

(function($){ "use strict";
             
/*=========================================================================
        Preloader
=========================================================================*/
$(window).on('load', function() {
    $('body').addClass('loaded');
});

/*=========================================================================
        Sticky Header Animation & Scroll To Top
=========================================================================*/ 
        
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50 ) {

            $('body').addClass('scrollActive');

        } else {
            $('body').removeClass('scrollActive');
        }
        
        
        //Scroll To Top
        if ($('body').scrollTop() >= 50) {
            
			// If page is scrolled more than 50px
			$('#scroll-to-top').fadeIn(200);    // Fade in the arrow
            
		} else {
            
			$('#scroll-to-top').fadeOut(200);   // Else fade out the arrow
            
		}
    });
             
 /*=========================================================================
        Scroll Spy
=========================================================================*/
    $('body').scrollspy({
        
        target: '#navbar',
        offset: 80
        
    });

/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
    smoothScroll.init({
		offset: 60
	});
             
/*=========================================================================
    Portfolio Carousel
=========================================================================*/       
    $('#portfolio_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        margin: 20,
        dots: false,
        navText: [ '<i class="fa fa-step-backward"></i> Prev', 'Next <i class="fa fa-step-forward"></i>' ],
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

             
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img_popup').venobox();
             
/*=========================================================================
        Skills Counter
=========================================================================*/
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

/*=========================================================================
       AOS Active
=========================================================================*/
             
    AOS.init({
        easing: 'ease-out-back',
        disable: 'mobile',
        offset: 200,
        duration: 1200,
        delay: 100,
		once: true
    });
             
/*=========================================================================
        Google Map Settings
=========================================================================*/
             
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        
        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400), 
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            styles: [
                {"stylers": [{"visibility":"simplified"}]},{"stylers":[{"color":"#131314"}]},{"featureType":"water","stylers":[{"color":"#131313"},{"lightness":7}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":25}]}]
        };

        var mapElement = document.getElementById('google_map');
        
        var map = new google.maps.Map(mapElement, mapOptions);
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Hexa!'
        });
    }

})(jQuery);
