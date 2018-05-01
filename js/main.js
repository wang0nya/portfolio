(function () {
	"use strict";
	// Wait for window load
	$(window).on('load', function () {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	});
	// navbar scroll effect
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('nav').css('background', 'rgba(255,255,255, 0.8)');
		} else {
			$('nav').css('background', 'transparent');
		}
	});
})();
