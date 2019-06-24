$(window).ready(function(){
	var prod_sliderArea = $('#producteurs .inner').outerWidth();
	var prod_elementWidth = $('#producteurs li').outerWidth();
	var prod_totalElements = $('#producteurs ul li').length;
	var prod_visibleElements = prod_sliderArea / prod_elementWidth;
	var prod_maxIndex = prod_totalElements - prod_visibleElements;
	var prod_currentIndex = 0;

	$('#producteurs .slider-nav button').click(function(event) {
		prod_slideDirection = jQuery(this).attr('data-direction');

		if(prod_slideDirection == 'prev') {
			if(prod_currentIndex > 0) {
				--prod_currentIndex;
				$('#producteurs .inner').css('left', -prod_currentIndex*prod_elementWidth);
				$('#producteurs .slider-nav button').removeClass('disabled');
			}

			if(prod_currentIndex == 0) {
				$(this).addClass('disabled');
			}
		}

		else if(prod_slideDirection == 'next') {
			if(prod_currentIndex < prod_maxIndex) {
				++prod_currentIndex;
				$('#producteurs .inner').css('left', -prod_currentIndex*prod_elementWidth);
				$('#producteurs .slider-nav button').removeClass('disabled');
			}

			if(prod_currentIndex > prod_maxIndex - 1) {
				$(this).addClass('disabled');
			}
		}
	});

	var rece_sliderArea = $('#recettes .inner').outerWidth();
	var rece_elementWidth = $('#recettes li').outerWidth();
	var rece_totalElements = $('#recettes ul li').length;
	var rece_visibleElements = rece_sliderArea / rece_elementWidth;
	var rece_maxIndex = rece_totalElements - rece_visibleElements;
	var rece_currentIndex = 0;

	$('#recettes .slider-nav button').click(function(event) {
		rece_slideDirection = jQuery(this).attr('data-direction');

		if(rece_slideDirection == 'prev') {
			if(rece_currentIndex > 0) {
				--rece_currentIndex;
				$('#recettes .inner').css('left', -rece_currentIndex*rece_elementWidth);
				$('#recettes .slider-nav button').removeClass('disabled');
			}

			if(rece_currentIndex == 0) {
				$(this).addClass('disabled');
			}
		}

		else if(rece_slideDirection == 'next') {
			if(rece_currentIndex < rece_maxIndex) {
				++rece_currentIndex;
				$('#recettes .inner').css('left', -rece_currentIndex*rece_elementWidth);
				$('#recettes .slider-nav button').removeClass('disabled');
			}

			if(rece_currentIndex > rece_maxIndex - 1) {
				$(this).addClass('disabled');
			}
		}
	});

});