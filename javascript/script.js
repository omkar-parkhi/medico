$(document).ready(function(){

    $('#docs').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:true,
        autoplay:true,
        navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    AOS.init();
});