(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {

	      	

			// find text
			var origText = this.text(), newText = '';

			// text length within defined limits?
			if (origText.length >= params.minlength &&  origText.length <= params.maxlength) {

				// reverse text
				for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);
				this.text(newText);

			}

		return this;
	};

})(jQuery);
