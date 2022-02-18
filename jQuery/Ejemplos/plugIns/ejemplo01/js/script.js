$(document).ready(function() {
    $("p").each(function(n) {
        $("#numeroParrafos").append('<option value="' + n + '">Párrafo ' + (n + 1) + '</option>')
    })

    $("#colorearUno").on("click", function() {
        $("p").eq($("#numeroParrafos").val()).colorear($("#color").val());
    })
        
    $("#numerar").on("click", function() {
        $("p").numerar(7);
        $("h1").numerar(20);
    })

    $("#colorear").on("click", function() {
        $("p").colorear($("#color").val());
    })

    $("#contar").on("click", function() {
        //var parrafos = $("p").length;
        var parrafos = $("p").contar();
        alert("Número de párrafos: " + parrafos);
    })

    $("#whatColor").on("click", function() {
        $("p").each(function() {
            $(this).append("<br/>Color del párrafo: " + $(this).whatColor());
        })
    })
})