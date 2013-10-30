(function($) {

	
	$.fn.mypopup = function() {
		var styleElement = document.createElement("link");
                 styleElement.rel = "stylesheet";
                 styleElement.href="https://rawgithub.com/sarathsprakash/mypopup/master/ui.css";
                 styleElement.type="text/css";
		this.each(function()
		{
			var $t= $(this);
			$t.addClass('uiselect');
			
			
			
		});
	   return this.parents('body').siblings('head').append(styleElement),
	  this.append("<input type='text'/>");
	       

	
	};
 
})(jQuery);
