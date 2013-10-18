(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		this.css('color','red');
	   return this.parents('html').find('head').append("<data>hi</data>");
	       

	
	};

})(jQuery);
