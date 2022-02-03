$(document).ready(function(){
//1. Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    $("img").each(function(idx) {
        console.log("IMG " + (idx + 1) + " -> alt = " + $(this).attr("alt"));

        /**
         *  $('img').each(function(i) {
         *      var $img = $(this);
         *      console.log($img.attr('alt'));
         *  });
         */

//2. Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
        $("input[name=q]").parent().addClass("nuevaClase");

        /**
         *  busca el elemento form más cercano
         *  $('input[name="q"]').closest('form').addClass('foo');
         */

//3. Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y quitar dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
        $(".current").removeClass("current")
                    .next().addClass("current");

//4. Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
        $("#specials select").addClass("seleccionado")
                    .parent().next().children().addClass("elegido");
        /**
         *  Busca dentro, sin entrar a los children
         *  $('#specials select').parent().next().find('input.input_submit');
         */

//5. Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
        $("#slideshow li:first").addClass("current").siblings().addClass("disabled");

        /**
         * Igual que la solución, pero añade la clase current a todos los siblings, no sólo al primer li
         */


    })
});