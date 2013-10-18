(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		var styleElement = document.createElement("link");
                  styleElement.rel = "text/css";
                  styleElement.href= "http://";
	
              this.parents('html').find('head').append(styleElement);
	       this.css('color','red');

	
	};

})(jQuery);
