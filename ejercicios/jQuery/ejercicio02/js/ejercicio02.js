$(document).ready(function(){
//1. Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    $("img").each(function(index){
        var $img = $(this);
        console.log("Atributo alt de la imagen nº " + index + ": " + $img.attr("alt"));
    });

//2. Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    $("input[name=q]").closest("form").addClass("fuXD");

//3. Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y quitar dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
    $("#myList .current").removeClass("current").next().addClass("current");

//4. Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    $("#specials select").parent().next().find('input.input_submit');

//5. Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
    $("ul#slideshow li:first").addClass("current").siblings().addClass("disabled");
});
