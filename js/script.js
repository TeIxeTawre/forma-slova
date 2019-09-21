jQuery(document).ready(function() {
	$('.ham').on('click', function() {
		$('body').toggleClass('activeMenu');
	});

	$('.header-two-slider').owlCarousel({
		items: 1,
		nav: false
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
		$('body').addClass('active-phone');
	$(window).resize(function() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		    $('body').addClass('active-phone');
		} else {
			$('body').removeClass('active-phone');
		}
	});
	
});
