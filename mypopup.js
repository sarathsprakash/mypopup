(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		this.css('color','red');
	   return this.parents('body').siblings('head').append("<data>hi</data>");
	       

	
	};

})(jQuery);
