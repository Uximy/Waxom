$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        navText: ['<img src="images/arrow_left.png" id="leftlink" alt="arrow_left">','<img src="images/arrow_right.png" id="rightlink" alt="arrow_right">'],
        mouseDrag: true,
        autoplay: false,
        center: true,
        autoplaySpeed:1500,
        autoplayTimeout: 6500,
        autoWidth: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    })
});