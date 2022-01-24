$(document).ready(function(){
//Seleccionar todos los elementos div que poseen la clase “module”
    $("div.module").css("backgroundColor", "LightSeaGreen");

//Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    //equal(2) selecciona por el índice
    $("ul#myList li:eq(2)").css("text-shadow", "0px 0px 7px aquamarine");
    $("ul#myList li").eq(2).css("text-shadow", "0px 0px 7px red");

    //elegimos el primer elemento y avanzamos con .next() por los índices
    $("ul#myList li:first").next().next().css("text-shadow", "0px 0px 7px mediumspringgreen");

    //nos quedamos con los elementos pares y escogemos el 2 elemento
    $("ul#myList li:even:eq(1)").css("text-shadow", "0px 0px 7px teal");

//Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    $("label[for=q]").css("background-color", "aquamarine");

//Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    console.log("Elementos ocultos en la página: " + $("*").not("visible").length);
    
//Averiguar cuantas imágenes en la página poseen el atributo alt.
    console.log("Imágenes con el atributo alt:" + $("img").attr("alt", "view.html").length);

});