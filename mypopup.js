(function($) {
$.fn.reversetext = function(){
return this.each(function(){
$(this).text( $(this).text().split('').reverse().join('') );
});
};
})(jQuery);
