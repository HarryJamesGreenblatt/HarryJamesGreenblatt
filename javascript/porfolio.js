$(document).ready(function () {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    });


    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // toggle menue/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })

    // owl carousel script
    $('.owl-carousel').owlCarousel({
        margin: 40,
        loop: true,
        autoPlayTimeout: 2000,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            }
        }
    });
});



// typing animation
var typed = new Typed(".typed",{
    strings: ["Engineer", "Administrator","Developer","Designer",""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})