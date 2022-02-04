$(document).ready(function() {
    $("p").on("click", function() {
        $(this).fadeOut(1000).fadeIn(1500, function() {
            alert("Párrafo oculto con click");
        });
    });

    $("#aparecer").on("click", function() {
        $("p").show(1000);
    });

    $("#desaparecer").on("click", function() {
        $("p").hide(1500);
    });
});