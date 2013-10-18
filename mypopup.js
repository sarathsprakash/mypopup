(function($) {
	$.fn.mypopup = function() { 
		this.each(function()
		{
		var t=$(this);
		t.text('hi');
		
		});
		return this;
		};
})(jQuery);
