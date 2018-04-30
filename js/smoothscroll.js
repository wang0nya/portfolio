(function () {
	"use strict";
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 1000
	});
	// appear on scroll
	var sr = new ScrollReveal({
		reset: true
	});
	sr.reveal('.fas', {
		duration: 2000
	});
	sr.reveal('.brand-text', {
		duration: 2000
	});
	sr.reveal('.social', {
		duration: 3000
	});
	sr.reveal('.portfolio-image', {
		duration: 2000
	});
	sr.reveal('.contact-form', {
		duration: 2000
	});
	sr.reveal('.service-text', {
		duration: 1000
	});
})();
