function select_first_tab() {
	$('.tab-pane').first().addClass("active");
	$('.nav-tabs li').first().addClass("active");
}

function go_to_hash(hash) {
	$('.tab-pane').removeClass("active");
	$('.nav-tabs li').removeClass("active");

    var tagSelector = '#' + hash;
    var tabId = $(tagSelector).closest('.tab-pane').attr('id');
    if (!tabId) {
        select_first_tab();
        animate(hash)
        return;
    }

    var menuId = tabId.substr(5);

    var menuSelectorId = '#menu-selector-' + menuId;
    var menuTabId = '#menu-' + menuId;

    $(menuSelectorId).addClass("active");
    $(menuTabId).addClass("active");

    animate(hash)
}

function animate(hash) {
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top - 4
    }, 500)
}

jQuery(function($) {
  "use strict";

  select_first_tab();

	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function() { 
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  Event counter 
	/* -----------------------------------------------------------*/

	if ( $( '.countdown' ).length > 0 ) {
		$(".countdown").jCounter({
		  	date: '21 October 2018 9:00:00',
		  	fallback: function() { console.log("count finished!") }
		});
	}

	/* ----------------------------------------------------------- */
	/*  Event Map 
	/* -----------------------------------------------------------*/

	if ( $( '#map' ).length > 0 ) {
                tomtom.key("0xf9hSptMrG8EN2uEAVJ3tnZJ4lri1LW");
                var map = tomtom.map("map", {
					center: [51.750632, 19.450548],
				    zoom: 15
                });
                var marker = tomtom.L.marker([51.750632, 19.450548], {

                }).bindPopup('EXPO-Łódź<br>Al. Politechniki 4<br>93-590 Łódź<br><img src="http://expo-lodz.pl/assets/gallery/C5D-7927.jpg" width="150" /> ').addTo(map);
	}

	/* ----------------------------------------------------------- */
	/*  Gallery popup
	/* ----------------------------------------------------------- */

	  $(document).ready(function(){

			$(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade", innerHeight:"700"});

			$(".popup").colorbox({iframe:true, innerWidth:650, innerHeight:450});

	  });



	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

		$('.counterUp').counterUp({
		 delay: 10,
		 time: 1000
		});

	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});
		
		$('#back-to-top').tooltip('hide');


    /* ----------------------------------------------------------- */
    /*  Modal video
    /* ----------------------------------------------------------- */

    $(".js-modal-btn").modalVideo();


});