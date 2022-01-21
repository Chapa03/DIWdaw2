$(document).ready(function(){
    //Seleccionar todos los elementos div que poseen la clase “module”
    $("div.module").css("backgroundColor", "khaki");

    //Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    $("ul#myList li:eq(2)").css("text-shadow", "0px 0px 7px aquamarine");
    $("ul#myList li").eq(2).css("text-shadow", "0px 0px 7px red");
    $("ul#myList li").eq(2).css("text-shadow", "0px 0px 7px red");
});