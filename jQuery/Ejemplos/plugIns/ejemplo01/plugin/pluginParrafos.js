(function($) {
    //Método que enumera los párrafos del documento
    $.fn.numerar = function(i) {
        //This hace referencia a la selección $("p")
        this.each(function() {
            //this hace referencia a cada uno de los párrafos por los que está iterando
            $(this).prepend(i++ + ".- ")
        })
    }

    //Método que cambia el color de fuente de los párrafos
    $.fn.colorear = function(color) {
        this.css("color", color);
    }

    //Método para contar elementos. Es un método obtenedor
    $.fn.contar = function() {
        return this.length;
    }

    //Metodo para saber el color de un elemento
    $.fn.whatColor = function() {
        return this.css("color");
    }

})(jQuery)