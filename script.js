$(function() {
    //NAVFIX
    var mynav = $(".mynav");
    var ofset = mynav.offset().top;
    //    alert(ofset);

    $(window).scroll(function() {
        var scrltop = $(window).scrollTop();

        if (scrltop <= 200) {
            mynav.removeClass("navfix");

        } else {
            mynav.addClass("navfix");
        }
    });
})