(function ($) {
    $( window ).resize(function() {
        var tallestHeight = 0;
        $(".highlight-summary").each( function( index, element ){
            if($(this).height() >= tallestHeight){
                tallestHeight = $(this).height();
                console.log(tallestHeight);
            }
        });
        $(".highlight-summary").css("height",tallestHeight+40 + "px");
    });
    $( document ).ready(function() {
        $(".menu-financial-services > div.we-mega-menu-submenu").css("margin-left","-300px");
        $(".menu-workplace > div.we-mega-menu-submenu").css("margin-left","-300px");
    });
    
}(jQuery));
