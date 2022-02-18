$(document).ready(function() {
    
    $("div.menu").on("mouseenter", function() {
        if ($(this).queue().length <= 2) {
            console.log("Cola de efectos: " + $(this).queue().length);
            $("div.elemento").toggleClass("remove")
                            .slideDown(600);
        }
    })
    
    $("div.menu").on("mouseleave", function() {
        if ($(this).queue().length <= 2) {
            console.log("Cola de efectos: " + $(this).queue().length);
            $("div.elemento").toggleClass("remove")
                            .slideUp(600);
        }
    })
    
})