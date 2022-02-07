$(document).ready(function(){
    $("div").on({
        "mouseenter" : function(evento) {
            $("body").css({
                "background-color" : $(this).data("titulo"),
                "transition-duration": "0.6s"
            });
            $(this).addClass("selected");
            $(".oculto")
                .text($(this).data("titulo"))
                .css({
                    "display" : "block",
                    "top" : evento.pageY + 25,
                    "left" : evento.pageX + 15,
                    "visibility" : "visible"
                })
        },
        "mouseout" : function() {
            $("body").css({
                "background-color" : "white",
                "transition-duration" : "0.6s"
            });
            $(this).removeClass("selected");
            $(".oculto").css("visibility", "hidden");
        }
    })
})