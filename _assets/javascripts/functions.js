
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

		if ($(this).hasClass('gallery--arrows')) {
			options['arrows'] = true;
		}

		// link main and thumbnail galleries
		// NOTE: There can be only one! (per page)
		if ($(this).hasClass('gallery--linked__main')) {
			options['asNavFor'] = '.gallery--linked__thumbs';
			options['infinite'] = true; // must be infinite
			options['fade'] = true;
			//options['swipe'] = true;
			options['slidesToShow'] = 1;
			options['slidesToScroll'] = 1;
		}

		if ($(this).hasClass('gallery--linked__thumbs')) {

			// If there is only one item, remove the thumbnails entirely
			if ($(this).children().length < 2) {
				$(this).remove();
				return;
			}

			options['asNavFor'] = '.gallery--linked__main';
			// centerMode can be false but you're not able to slide backward
			options['adaptiveHeight'] = false;
			if ($(this).children().length > 10) {
				options['centerMode'] = true;
			} else {
				options['centerMode'] = false;
			}
			options['infinite'] = true; // must be infinite
			options['variableWidth'] = false; // must be false
			options['focusOnSelect'] = true;
			options['swipe'] = false; // ought to stay false

			var breakpoints = [3,6,8,10]; // xs,sm,md,lg

			options['slidesToScroll'] = 1;
		}

		// Gallery options for gallery with data-gallery-breakpoints
		if ($(this).attr('data-gallery-breakpoints')) {
			breakpoints = $(this).data('gallery-breakpoints');
			/*
			// If there are less than 10 items, adjust slidesToShow or it breaks
			var itemCount = $(this).children().length;
			for (var i=0; i<breakpoints.length; i++) {
				if (breakpoints[i] >= itemCount) {
					breakpoints[i] = itemCount;
				} else if (breakpoints[i] <= 0) {
					breakpoints[i] = 1;
				}
			}
			*/

			options['responsive'] = [
				{
					breakpoint: sm, // xs-sm
					settings: {
						slidesToShow: breakpoints[0],
						centerMode: true
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

		// Fudge the slick plugin to update the thumbs current slide, as the plugin itself is currently broken (known issue: https://github.com/kenwheeler/slick/issues/1563).
		if ($(this).hasClass('gallery--linked__main')) {
			$(this).on('beforeChange', function(e,slick,slide,nextSlide) {
				$('.gallery--linked__thumbs').find('.slick-slide').removeClass('slick-current').not('.slick-cloned').eq(nextSlide).addClass('slick-current');
			});
		}

		$(window).trigger('resize'); // to make sure heights are set properly
	});
}


/* Color the backgrounds for each gallery slide
 * to match the average colour of the image it contains.
 */
function colorGalleries() {
	if (typeof $.fn.averageColor === 'undefined') { console.log("Functions: average-color must be loaded!"); return; }
	$('.gallery .slick-slide').length &&
	$('.gallery .slick-slide').each(function() {
		// Delve into the slide, grabbing the first image it comes across
		if ($(this).find('img').length) {
			var image = $(this).find('img').first();
			image.averageColor({
				colorParent: true,
				fadeEdges: {
					enabled: true,
					edges: [
						'left',
						'right'
					]
				}
			});
		}
	});
}

/* Color the headers in listings to match
 * the average colour of its image.
 */
function colorListings() {
	if (typeof $.fn.averageColor === 'undefined') { console.log("Functions: average-color must be loaded!"); return; }
	$('.listing').length &&
	$('.listing').each(function() {
		// Delve into the slide, grabbing the first image it comes across
		var listing = $(this);
		if ($(this).find('.listing__image__inner').length) {
			var image = $(this).find('.listing__image__inner');

			if (image.css('background-image').length) {
				var average = image.averageColor();

				// Additional code to handle lighter average colours (r*g*b..)
				if (average.r + average.g + average.b > 600) {
					average.r = Math.floor(average.r/2);
					average.g = Math.floor(average.r/2);
					average.b = Math.floor(average.r/2);
					average.hex = rgbToHex(average);
				}

				listing.css('border-color', average.hex);
				if (listing.find('h1,h2').length) {
					listing.find('h1,h2').css('color', average.hex);
				}
			}
		}
		if (listing.find('h1,h2').length) { listing.find('h1,h2').show(); } // hidden by css
	});
}

/* When hovering over a listing image, for the fun of it,
 * style the image such that it appears to face the cursor.
 */
function hoverListings() {
	$('.listing__image__inner').length &&
	$('.listing__image').mousemove(function(e) {
		var offset = $(this).offset(),
			x = e.pageX - offset.left,
			y = e.pageY - offset.top,
			width = $(this).width();
			height = $(this).height();
			fractionX = x/width - 0.5, // -0.5 -> 0.5 ish
			fractionY = y/height - 0.5,
			scale = 30; // how rotated it can become
		if (fractionX<-0.5) fractionX = -0.5;
		if (fractionY<-0.5) fractionY = -0.5;
		// fraction values are roughly 0 when cursor is in center
		//console.log(fractionX +', '+ fractionY);

		var inner = $(this).find('.listing__image__inner');
		inner.removeClass('reset');

		applyTransform(inner,"rotateX("+-Math.floor(fractionY*scale)+"deg) rotateY("+Math.floor(fractionX*scale)+"deg)");

		inner.css("box-shadow", "inset "+fractionX*scale+"px "+fractionY*scale+"px 30px 1px rgba(255,255,255,0.5),
										 inset "+-fractionX*scale+"px "+-fractionY*scale+"px 30px 1px rgba(0,0,0,0.65)");
	})
	.mouseleave(function(e) {
		var inner = $(this).find('.listing__image__inner');
		inner.addClass('reset');
	});
}

/* Apply transform css property with all the vendor prefixes
 */
function applyTransform(element, transform) {
	//console.log(transform)
	element.css({
		'-webkit-transform': transform,
		'-moz-transform':    transform,
		'-ms-transform':     transform,
		'-o-transform':      transform,
		'transform':         transform
	});
}