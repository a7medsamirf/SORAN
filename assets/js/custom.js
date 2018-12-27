/*global $ , alert, console*/

$(document).ready(function () {
    $('body').bootstrapMaterialDesign();
});

//Check the scroll position
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        event.preventDefault();
        $(".scrollToTop").css({
            'transform': 'translate(0px, 0px)'
        });
    } else {
        $(".scrollToTop").css({
            'transform': 'translate(80px, 0px)'
        });
    }
});

// Start niceScroll
$(document).ready(function () {
    $("html").niceScroll({
        scrollspeed: "100",
        cursorcolor: "#FF65C2",
        cursorborder: "3px solid #FF65C2",
        cursorborderradius: 0,
        sensitiverail: false,
    });
});

// start WOW 
$(document).ready(function () {
    new WOW().init();
});

// start loading 
$(window).on("load", function () {

    "use strict";

    // Loading Elements

    $(".sk-folding-cube").fadeOut(1000, function () {

        // Show The Scroll

        $("body").css("overflow", "hidden");

        $(this).parent().slideUp(1000, function () {

            $(this).remove();
        });
    });
});
