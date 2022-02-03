$(document).ready(function() {
    $("p").on({
        "click" : function() {
            console.log($(this).text());
        },
        "mouseenter" : function() {
            $(this).addClass("destacado");
        },
        "mouseleave" : function() {
            $(this).removeClass("destacado");
        }
    })
});