$(document).ready(function(){
    //devueve el texto de los párrafos
    //alert($("p").text());

    //recorrer los li del ul
    $("ul li").each(function(i, obj){
        //mostrará el texto del elemento que esté recorriendo (this)
        alert("El texto del li es: " + $(this).text());
        $(this).addClass("seleccionado");
    });

    //podemos pasar índice y objeto como parametros de la función anónima
    $("ul li").each(function(i, obj){
        //mostrará el texto del elemento que esté recorriendo (this)
        alert("El texto del li número " + (i + 1) + " es: " + $(obj).text());
        $(this).addClass("seleccionado");
    });
})