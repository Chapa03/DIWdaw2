$(document).ready(function(){
    $("div").on({
        "mouseenter" : function() {
            $("body").css({
                "background-color" : $(this).data("titulo"),
                "transition-duration": "0.6s"
            });
            $(this).addClass("selected");
        },
        "mouseout" : function() {
            $("body").css({
                "background-color" : "white",
                "transition-duration" : "0.6s"
            });
            $(this).removeClass("selected");
        }
    })
})