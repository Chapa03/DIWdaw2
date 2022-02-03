$(document).ready(function() {
    $("body").on("keypress", function(e) {
        console.log(String.fromCharCode(e.which));
    });
});