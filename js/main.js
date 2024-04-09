$(document).ready(function(){
    $('.testimonial-slider-wrapper').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });


    $('.portfolio-slider-wrapper').slick({
        prevArrow : '.prev-btn',
        nextArrow : '.next-btn',
        slidesToShow : 4
    });


  });
  AOS.init();



//   Skill-Bar JS Code

let select1 = document.querySelector('.select-1');
let select2 = document.querySelector('.select-2');
let select3 = document.querySelector('.select-3');
let select4 = document.querySelector('.select-4');
let select5 = document.querySelector('.select-5');
let select6 = document.querySelector('.select-6');


window.addEventListener('scroll',() => {
    if(window.pageYOffset > 300){
        select1.classList.add ("skill-bar-1");
        select2.classList.add ("skill-bar-2");
        select3.classList.add ("skill-bar-3");
        select4.classList.add ("skill-bar-4");
        select5.classList.add ("skill-bar-5");
        select6.classList.add ("skill-bar-6");
    }
    else{
        select1.classList.remove ("skill-bar-1");
        select2.classList.remove ("skill-bar-2");
        select3.classList.remove ("skill-bar-3");
        select4.classList.remove ("skill-bar-4");
        select5.classList.remove ("skill-bar-5");
        select6.classList.remove ("skill-bar-6");
    }
})


// TO TOP BUTTON

let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
})
