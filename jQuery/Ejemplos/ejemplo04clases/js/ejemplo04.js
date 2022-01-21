$(document).ready(function(){
    //añadir clase a un elemento
    //$("p:first").addClass("destacado");

    //funcion anonima para el evento click de los párrafos
    $("p").on("click", function(){
        //this es el objeto que dispara el evento
        //$(this).addClass("destacado");

        $(this).toggleClass("destacado resaltado");
    });

    $("ul li").on("click", function(){
        $(this).toggleClass("destacado");
    });

    $("a").on("click", function(){
        //removeClass sin parámetros quita todas las clases
        $("*").removeClass();
    });
})