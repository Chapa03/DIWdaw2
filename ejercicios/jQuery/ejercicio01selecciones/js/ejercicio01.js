$(document).ready(function(){
//1. Seleccionar todos los elementos div que poseen la clase “module”
    $("div.module").css("backgroundColor", "LightSeaGreen");

//2. Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    //equal(2) selecciona por el índice
    $("ul#myList li:eq(2)").css("text-shadow", "0px 0px 7px aquamarine");
    $("ul#myList li").eq(2).css("text-shadow", "0px 0px 7px red");

    //elegimos el primer elemento y avanzamos con .next() por los índices
    $("ul#myList li:first").next().next().css("text-shadow", "0px 0px 7px mediumspringgreen");

    //nos quedamos con los elementos pares y escogemos el 2 elemento
    $("ul#myList li:even:eq(1)").css("text-shadow", "0px 0px 7px teal");

//3. Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    $("label[for=q]").css("background-color", "aquamarine");

//4. Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    console.log("Elementos ocultos con selector hidden: " + ($("*:hidden").length));
    
//5. Averiguar cuantas imágenes en la página poseen el atributo alt.
    console.log("Imágenes con el atributo alt:" + $("img").attr("alt", "view.html").length);
    console.log("Imagenes con alt: "+$('img[alt]').length);

//6. Seleccionar todas las filas impares del cuerpo de la tabla.
    $("table tr:odd").css("color", "LightSeaGreen").css("text-shadow", "0px 0px 4px orange");
});