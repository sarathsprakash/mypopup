(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		var styleElement = document.createElement("link");
                 styleElement.rel = "stylesheet";
                 styleElement.href="";
                 styleElement.type="text/css";
		this.each(function()
		{
		this.addClass('uitext');
		});
	   return this.parents('body').siblings('head').append("<data>hi</data>");
	       

	
	};

})(jQuery);
