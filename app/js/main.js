$(function() {

    $('.header__btn').on('click', function() {
        $('.rightside__menu').removeClass('rightside__menu--close');
    });

    $('.rightside__menu-close').on('click', function() {
        $('.rightside__menu').addClass('rightside__menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });


})