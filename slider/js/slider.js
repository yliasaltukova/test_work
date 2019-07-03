$(document).ready(function(){

    $('.slider').slick({
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right'),
        responsive:[
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

});