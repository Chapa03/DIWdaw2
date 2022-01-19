$(document).ready(function(){
    //Metodo text() como getter
    $primerParrafo = $("p:first");
    textoPrimerParrafo = $primerParrafo.text();
    console.log(textoPrimerParrafo);

    //metodo text() como setter
    $("p:first").text("Nuevo contenido del primer párrafo con .text() como setter.");

    //metodo css() como obtenedor
    //en este caso, se queda con el tamaño del primer párrafo
    console.log("Tamaño de fuente de los párrafos: " + $("p").css("font-size"));

    //metodo css() como estblecedor
    $("p:last").css("fontSize", "20px");
    $("p:eq(1)").css({
        "font-size": "32px",
        "text-shadow": "0px 0px 8px aquamarine"
    });
    $("p:first").css("fontSize", "-=2px");

    $("div").height("300px");
    //ejemplo de encadenamiento
    $("div").width("550px").css("background-color", "mintcream").css("color", "darkcyan");
})