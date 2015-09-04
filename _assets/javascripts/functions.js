
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

		if (typeof (CodeMirror) == 'undefined') { console.log("Functions: CodeMirror must be loaded!"); return; }

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



function initGalleries() {
	$('.gallery').length && $('.gallery').each(function() {
		if (typeof $.fn.slick === 'undefined') { console.log("Functions: Slick must be loaded!"); return; }

		$(this).fadeIn(); // in case hidden in markup

		var options = {
			adaptiveHeight: true,
			arrows: false,
			dots: false
		};

		// add custom options
		if ($(this).hasClass('gallery--dots') ||
			$(this).hasClass('gallery--dots--nested')) {
			options['dots'] = true;
		}

		if ($(this).hasClass('gallery--arrows')) {
			options['arrows'] = true;
		}

		// link main and thumbnail galleries
		if ($(this).hasClass('gallery--linked--main')) {
			options['asNavFor'] = '.gallery--linked--thumbs';
			options['infinite'] = true;// must be infinite
			options['fade'] = true;
			//options['swipe'] = true;
			options['slidesToShow'] = 1;
			options['slidesToScroll'] = 1;

			// If there are only a few items, double/triple them up to fill the page (at least 5)
			// Seems silly but it cycles infinitely anyway. (same for --main and --thumbs)
			var slides = $(this).html();
			while ($(this).children().length < 4) {
				$(this).append(slides);
			}
		}
		if ($(this).hasClass('gallery--linked--thumbs')) {

			// If there is only one item, remove the thumbnails entirely
			if ($(this).children().length < 2) {
				$(this).remove();
				return;
			}

			// If there are only a few items, double/triple them up to fill the page (at least 5)
			// Seems silly but it cycles infinitely anyway. (same for --main and --thumbs)
			var slides = $(this).html();
			while ($(this).children().length < 4) {
				$(this).append(slides);
			}

			options['asNavFor'] = '.gallery--linked--main';
			// centerMode can be false but you're not able to slide backward
			options['adaptiveHeight'] = false;
			options['centerMode'] = false;
			options['infinite'] = true; // must be infinite
			options['variableWidth'] = false; // must be false
			options['focusOnSelect'] = true;
			options['swipe'] = false; // ought to stay false

			var slidesToShow = [3,6,8,10]; // xs,sm,md,lg

			options['slidesToScroll'] = 1;
		}

		// Gallery options for gallery with data-gallery-breakpoints
		if ($(this).attr('data-gallery-breakpoints')) {
			var breakpoints = $(this).data('gallery-breakpoints');
			// If there are less than 10 items, adjust slidesToShow or it breaks
			var itemCount = $(this).children().length;
			for (var i=0; i<breakpoints.length; i++) {
				if (breakpoints[i] >= itemCount) {
					breakpoints[i] = itemCount;
				} else if (breakpoints[i] <= 0) {
					breakpoints[i] = 1;
				}
			}

			options['responsive'] = [
				{
					breakpoint: sm, // xs-sm
					settings: {
						slidesToShow: breakpoints[0]
						//arrows: false
					}
				},
				{
					breakpoint: md, // sm-md
					settings: {
						slidesToShow: breakpoints[1]
					}
				},
				{
					breakpoint: lg, // md-lg
					settings: {
						slidesToShow: breakpoints[2]
					}
					//settings: "unslick"
				}
			];
			options['slidesToShow'] = breakpoints[3]; // lg +
		}

		$(this).slick(options);

		$(window).trigger('resize'); // to make sure heights are set properly
	});
}
