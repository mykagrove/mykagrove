//= require functions
//= require slick
//= require jquery.averagecolor

var xs = 0, sm = 768, md = 992, lg = 1200;

// On jquery load
$(function() {
	initMobileMenu();

	beastyCode();

	silliness();

	footerDate();
});

// On window load
$(window).load(function() {
	initGalleries();

	colorGalleries();
});