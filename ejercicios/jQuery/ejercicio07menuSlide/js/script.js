$(document).ready(function() {
    
    $("div.menu").on("mouseenter", function() {
        $("div.elemento").toggleClass("remove")
        .slideDown(600)
    })
    
    $("div.menu").on("mouseleave", function() {
        $("div.elemento").toggleClass("remove")
        .slideUp(600)
    })
    
})