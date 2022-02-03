$(document).ready(function() {
    $(document).on({
        "click" : function(objeto_e) {
            $("#coordenadas").text(objeto_e.pageX + ", " + objeto_e.pageY);
        },
        "mousemove" : function(evento) {
            $(".posicion").text(evento.pageX + ", " + evento.pageY);
        }
    });
});