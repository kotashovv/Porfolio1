$(document).ready(function(){
    $('.slider').slick({
        dots: true
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