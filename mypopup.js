(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function(params) {

		// merge default and user parameters
		params = $.extend( {minlength: 0, maxlength: 99999}, params);

		// traverse all nodes
		this.each(function() {

			// express a single node as a jQuery object
			var $t = $(this);

			// find text
			var origText = $t.text(), newText = 'hi';

		
			$t.css('color','red');

		

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);
