(function($) {

	// jQuery plugin definition
	$.fn.mypopup = function() {
		var styleElement = document.createElement("style");
                  styleElement.type = "text/css";
                  styleElement.src= "http://"
	
              this.parents('html').find('head').appendChild(styleElement);
	       this.css('color','red');

	
	};

})(jQuery);
