$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
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