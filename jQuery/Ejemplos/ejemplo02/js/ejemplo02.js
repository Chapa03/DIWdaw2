$(document).ready(function(){
    console.log("Número de párrafos: " + $("p").length);
    console.log("Número de elementos de la lista: " + $("ul li").length);
    $("ul li:even").css("color", "aquamarine");

    //Para saber si la web contiene algún objeto, tendremos que recurrir a length
    if ($("p").length > 0) {
        console.log("En el documento hay párrafos");
    } else {
        console.log("En el documento no hay párrafos");
    }
    //Podemos guardar un objeto o colección de objetos en una variable
    //por convención, llamamos a estas colecciones con $ delante
    var $parrafos = $("p");

})