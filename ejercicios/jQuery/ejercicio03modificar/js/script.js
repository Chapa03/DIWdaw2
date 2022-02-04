$(document).ready(function() {
//1. Añadir 5 nuevos ítems al final de la lista desordenada #myList. Ayuda: for (var i = 0; i<5; i++) { ... }
    for (var i = 1; i <= 5; i++) {
        $("ul#myList").append("<li>Elemento " + i + "</li>");
    }

//2. Quitar los ítems impares de la lista.
    $("ul#myList").children().even().each(function() {
        $(this).remove();
    });

    //$("ul#myList li:even").remove();

//3. Añadir otro elemento h2 y otro párrafo al último div.module.
    $("div.module:last").append(`
            <h2>Hola bb</h2>
            <p>Otro páaaaaaarrafoooooo!!!!</p>
            `);
    
//4. Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
    $selectDay = $("select[name=day]");
    $selectDay.append("<option></option>");
    $selectDay.children().last().val("Wednesday").text("Wednesday");

//5. Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
    
    $nuevoDiv = $(`<div class="module">
                    <p>Nuevo div con clase module.</p>
                </div>`);
    $nuevoDiv.append($("img:first").clone()).insertAfter("div.module:last");
    
});