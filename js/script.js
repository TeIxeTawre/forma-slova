jQuery(document).ready(function() {
	$('.ham').on('click', function() {
		$('body').toggleClass('activeMenu');
	});

	$('.header-two-slider').owlCarousel({
		items: 1,
		nav: false,
		loop: true
	});
	
});