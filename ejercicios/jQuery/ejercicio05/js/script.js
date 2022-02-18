$(document).ready(function() {
    $("#id").on("keyup", function() {
        $("textarea#vocales").text(
            $("#info").val()
        );
    })
    
});