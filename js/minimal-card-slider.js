$(".card-slider").each(function(){
	var $slider = $(this),
		$sliderContainer = $slider.find(".inner"),
		$sliderList = $slider.find(".inner > ul"),
		$sliderItem = $slider.find(".inner > ul > li"),
		$sliderButton = $slider.find(".slider-nav button"),
		$slidePrev = $slider.find('[data-direction="prev"]'),
		$slideNext = $slider.find('[data-direction="next"]'),
		setItemWidth = function(){
			$sliderList.removeAttr("style");
			var curWidth = $($sliderItem[0]).outerWidth() * $sliderItem.length;
			$sliderList.css("width", curWidth);
		},
		slide = function(){
			var $button = $(this),
				dir = $button.data("direction"),
				curPos = parseInt($sliderList.css("left")) || 0,
				moveto = 0,
				containerWidth = $sliderContainer.outerWidth(),
				listWidth = $sliderList.outerWidth(),
				before = (curPos + containerWidth),
				after = listWidth + (curPos - containerWidth);
		if(after < containerWidth) {
			$slideNext.addClass('disabled');
			$slidePrev.removeClass('disabled');
		}
		
		else if(curPos == 0) {
			$slidePrev.addClass('disabled');
			$slideNext.removeClass('disabled');
		}	
		else {
			$slidePrev.removeClass('disabled');
			$slideNext.removeClass('disabled');
		}	
			
			if(dir=="next"){
				moveto = (after < containerWidth) ? curPos - after : curPos - containerWidth;
			} else {
				moveto = (before >= 0) ? 0 : curPos + containerWidth;
			}



			$sliderList.css('left', moveto);
		};
	$(window).resize(function(){
		setItemWidth();
	});
	setItemWidth();
	
	$sliderButton.on("click", slide);
});

/*$(".card-slider").each(function(){
	var	slider = $(this),
		sliderButton = slider.find(".slider-nav button"),
		sliderArea = slider.find('.inner > ul'),
		currentIndex = 0,
		slidePrev = slider.find('[data-direction="prev"]'),
		slideNext = slider.find('[data-direction="next"]'),
		currentWindowSize = $(window).width();
	getWindowSize = function() {
		var newWindowSize = $(window).width();

		return newWindowSize;
	},
	setItem = function() {
		slider.removeAttr('data-maxIndex');
		sliderAreaWidth = slider.find('.inner > ul').outerWidth();
		elementWidth = slider.find('.inner > ul > li').outerWidth();
		visibleElements = parseInt(sliderAreaWidth / elementWidth);
		slider.attr('data-maxIndex', slider.find('.inner > ul > li').length - visibleElements);
	},
	slide = function(){
		var slideDirection = $(this).attr('data-direction');
		var maxIndex = $(this).closest('.card-slider').attr('data-maxIndex');

		if(getWindowSize() != currentWindowSize) {
			currentWindowSize = $(window).width();
			setItem();
		}
		
		if(slideDirection == 'prev') {
			if(currentIndex > 0) {
				--currentIndex;
				sliderArea.css('left', -currentIndex*elementWidth);
				slideNext.removeClass('disabled');
			}
		}

		else if(slideDirection == 'next') {
			if(currentIndex < maxIndex) {
				++currentIndex;
				sliderArea.css('left', -currentIndex*elementWidth);
				slidePrev.removeClass('disabled');
			}
		}

		if(currentIndex == maxIndex) {
			slideNext.addClass('disabled');
		}
		else if(currentIndex == 0) {
			slidePrev.addClass('disabled');
		}
		else {
			slidePrev.removeClass('disabled');
			slideNext.removeClass('disabled');
		}
	};
	setItem();
	sliderButton.on("click", slide);

});
*/