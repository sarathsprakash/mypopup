(function($) {
	$.fn.mypopup = function() { 
		
	this.each(function() {
		var t = $(this);
		t.text("hello");
	}
	return this;
	}
})(jQuery);
