/*
 * Let's throw a little bit of silliness into the mix, that is to say, annoying spinning cursors.
 *
 *	Copyright (c) 2015 Michael Cook
 *	Released under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

var cursorTimeout, cursorStates, cursorStatesIndex;
(function($) {

	$.fn.silliness = function() {
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
		$(this).hover(function() {
			var that = $(this);
			cursorTimeout = setInterval(function() {
				// All sillinesses are linked together, but that's okay
				that.css('cursor', cursorStates[cursorStatesIndex]);
				//console.log(cursorStates[cursorStatesIndex]);
				cursorStatesIndex++;
				if (cursorStatesIndex >= cursorStates.length) cursorStatesIndex = 0;
			}, 60);
		}, function() {
			$(this).css('cursor', 'auto');
			clearInterval(cursorTimeout);
		});

		return;
	}

})(jQuery);
