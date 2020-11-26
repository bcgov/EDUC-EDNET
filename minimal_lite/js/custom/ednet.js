(function ($) {
    var tallestHeight = "0"
    $(".highlight-summary").each( function( index, element ){
        if($(this).height() >= tallestHeight){
            tallestHeight = $(this).height();
        }
    });
    $(".highlight-summary").css("height",tallestHeight);
}(jQuery));
