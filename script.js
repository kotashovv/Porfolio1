$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.burger').click(function(event){
        $('.burger, .modal, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('scroll');
    }
    else {
        $('.header').removeClass('scroll')
    }
});
