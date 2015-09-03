
$(function() {

	initMobileMenu();

	beastyCode();

	silliness();

	footerDate(); // because no php..

});


/*
 * Dead simple mobile nav menu button
 * (could be expanded out to use generic .nav__button and nearby .nav in future)
 */
function initMobileMenu() {
	$('.nav__button--header').length &&
	$('.nav--primary').length &&
	$('.nav__button--header').click(function() {
		$('.nav--primary').stop().slideToggle();
	});
}


/* Create beasty code mirrors for any code blocks - created in markdown files in this fashion:
 *
 * ~~~
 * 	Code and such
 * ~~~
 * {: .beast data-mode="javascript"}
 *
 * Other useful modes are: clike (c), htmlmixed, sass, css, shell, vbscript (batch), xml, python, sql
 * NOTE: These will need to be added in as a // = require line at the top of this file!
 */
function beastyCode() {
	$('.beast code').length &&
	$('.beast').each(function() {
		// Grab the code and mode
		var codeElem = $(this).find('code');
		var code = codeElem.html();
		var mode = 'htmlmixed';
		if ($(this).data('mode')) mode = $(this).data('mode');

		// Create codemirror
		var output = CodeMirror(this, {
			value: code,
			mode: mode,
			//theme: "night",
			theme: "vibrant-ink",
			lineWrapping: true,
			lineNumbers: true,
			styleActiveLine: true,
			matchBrackets: true,
			//keyMap: "sublime",
			readOnly: false
		});

		// If codemirror has been succesfully created, tidy everything else up
		if ($(this).find('.CodeMirror').length) {
			$(this).find('.CodeMirror').unwrap();
			codeElem.remove();
		}
	});
}


/*
 * Let's throw a little bit of silliness into the mix
 */
var cursorTimeout, cursorStates, cursorStatesIndex;
function silliness() {
	cursorStates = [
		"n-resize",
		"ne-resize",
		"e-resize",
		"se-resize",
		"s-resize",
		"sw-resize",
		"w-resize",
		"nw-resize"
	];
	cursorStatesIndex = 0;
	$('.header__logo').hover(function() {
		cursorTimeout = setInterval(function() {
			$('.header__logo').css('cursor', cursorStates[cursorStatesIndex]);
			//console.log(cursorStates[cursorStatesIndex]);
			cursorStatesIndex++;
			if (cursorStatesIndex >= cursorStates.length) cursorStatesIndex = 0;
		}, 60);
	}, function() {
		$('.header__logo').css('cursor', 'auto');
		clearInterval(cursorTimeout);
	});
}

/* Update the year (in footer) just in case
 * Not using PHP, so {{ site.time | date: '%y' }} in markup only reflects last time it was compiled
 */
function footerDate() {
	$('.js-year-update').length &&
	$('.js-year-update').text((new Date).getFullYear());
}