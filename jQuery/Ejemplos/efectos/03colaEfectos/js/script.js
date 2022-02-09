$(document).ready(function() {
    $("p:first").hide(200).delay(1000).show(300)
        .queue(function() {
            $(this).css("color", "Lime");
            $(this).dequeue();
        })
        .slideUp(500).slideDown(750);
    $("p:last").animate({
        "opacity" : "0.2",
        "color" : "blue",
        "background" : "yellow"
    }, 2500);
});