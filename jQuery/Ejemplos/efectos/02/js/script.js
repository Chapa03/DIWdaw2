$(document).ready(function() {

    $("#fadeIn").on("click", function() {
        $("p").fadeIn(1000, function() {
            actualiza();
        });
        actualiza();
    })

    $("#fadeOut").on("click", function() {
        $("p").fadeOut(1000, function() {
            actualiza();
        });
        actualiza();
    })

    $("#slideUp").on("click", function() {
        $("p").slideUp(1000, function() {
            actualiza();
        });
        actualiza();
    })

    $("#slideDown ").on("click", function() {
        $("p").slideDown(1000, function() {
            actualiza();
        });
        actualiza();
    })

    function actualiza() {
        $("#contador").text("FX tiene " + $("p").queue().length + " efectos en cola.");
    }
});