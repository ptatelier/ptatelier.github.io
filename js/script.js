$(function () {
    /*====================================
    Show Menu Background
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.fixed-top').addClass('on');
        } else {
            $('.fixed-top').removeClass('on');
        }
    });
        
    $('body').scrollspy({ 
        target: '.fixed-top',
        offset: 80
    });
});