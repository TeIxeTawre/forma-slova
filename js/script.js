jQuery(document).ready(function() {
	$('.ham').on('click', function() {
		$('body').toggleClass('activeMenu');
	});

	$('.header-two-slider').owlCarousel({
		items: 1,
		nav: false,
		loop: true
	});
	
	if($('#card-second').children('.card').length == 3) {
		$('#card-second').addClass('threeGrid');
	}

	if($('#card-first').children('.card') == 3) {
		$('#card-first').addClass('threeGrid');
	}

	$('input').focus(function() {
		$(this).closest('.label-pair').children('label').css('display', 'none');
	});

	$('input').focusout(function() {
		if ($(this).val() == '')
			$(this).closest('.label-pair').children('label').css('display', 'block');
	});	
	
	$('textarea').focus(function() {
		$(this).closest('.label-pair').children('label').css('display', 'none');
	});
	$('textarea').focusout(function() {
		if ($(this).val() == '')
			$(this).closest('.label-pair').children('label').css('display', 'block');
	});

});