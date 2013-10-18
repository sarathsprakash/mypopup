(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		var styleElement = document.createElement("link");
                 styleElement.rel = "stylesheet";
                 styleElement.href="https://rawgithub.com/sarathsprakash/mypopup/master/ui.css";
                 styleElement.type="text/css";
		this.each(function()
		{
			var $t= $(this);
			$t.addClass('uitext');
			$t.append("<input type='text'/>");
		});
	   return this.parents('body').siblings('head').append(styleElement),
	  this;
	       

	
	};

})(jQuery);
