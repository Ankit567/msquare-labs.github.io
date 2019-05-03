$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".top-header").addClass("darkHeader");
    } else {
        $(".top-headertop-header").removeClass("darkHeader");
    }
});