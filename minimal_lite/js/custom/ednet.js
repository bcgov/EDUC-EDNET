(function ($) {
    $('.search-link a').click(function(event){
        event.preventDefault();
        $('.search-block-form').slideToggle();
    });
}(jQuery));