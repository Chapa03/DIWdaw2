$(document).ready(function(){
    $(".add").on("click", function() {
        $(".aficiones").append("<li>" + $("#nuevo").val() + "</li>");
        $("#nuevo").val("");
    });
});