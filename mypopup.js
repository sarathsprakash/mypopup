(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		var a=this.text();

	      this.text('hello'+a);

		return this;
	};

})(jQuery);
