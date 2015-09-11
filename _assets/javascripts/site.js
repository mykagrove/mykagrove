//= require functions
//= require slick
//= require jquery.averagecolor
//= require jquery.silliness

var xs = 0, sm = 768, md = 992, lg = 1200;

// On jquery load
$(function() {
	initMobileMenu();

	beastyCode();

	$('.js-silliness').silliness();

	footerDate();
});

// On window load
$(window).load(function() {
	initGalleries();

	colorGalleries();

	colorListings();

	hoverListings();
});