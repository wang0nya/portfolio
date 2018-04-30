(function () {
	"use strict";
	// navbar scroll effect
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('nav').css('background', 'rgba(255,255,255, 0.8)');
		} else {
			$('nav').css('background', 'transparent');
		}
	});
})();
