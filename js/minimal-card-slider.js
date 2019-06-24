$(window).ready(function(){
	var sliderArea = $('.card-slider .inner').outerWidth();
	var elementWidth = $('.card-slider li').outerWidth();
	var totalElements = $('.card-slider ul li').length;
	var visibleElements = sliderArea / elementWidth;
	var maxIndex = totalElements - visibleElements;
	var currentIndex = 0;

	$('.slider-nav button').click(function(event) {
		slideDirection = jQuery(this).attr('data-direction');

		if(slideDirection == 'prev') {
			if(currentIndex > 0) {
				--currentIndex;
				$(this).closest('inner').css('left', -currentIndex*elementWidth);
				$(this).removeClass('disabled');
			}

			if(currentIndex == 0) {
				$(this).addClass('disabled');
			}
		}

		else if(slideDirection == 'next') {
			if(currentIndex < maxIndex) {
				++currentIndex;
				$(this).closest('inner').css('left', -currentIndex*elementWidth);
				$(this).removeClass('disabled');
			}

			if(currentIndex > maxIndex - 1) {
				$(this).addClass('disabled');
			}
		}
	});

});