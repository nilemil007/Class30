// Default
var swiper = new Swiper(".defaultSwiper",{
  loop: true,
  autoplay:{
    delay: 4000
  },
});

// Navigation
var swiper = new Swiper(".navigationSwiper",{
  loop: true,
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  pagination: {
          clickable: true,
          el: ".swiper-pagination",
          dynamicBullets: true,
          type: "progressbar"
        },
  autoplay:{
    delay: 3000
  },
});

// Slides per view
var swiper = new Swiper(".slidesPerView", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000
  },
});

// Effect fade
var swiper = new Swiper(".effectFade", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Effect cube
var swiper = new Swiper(".effectCube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000
  },
});

// Effect coverflow
var swiper = new Swiper(".effectCoverflow", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000
  }
});

jQuery(document).ready(function(){
  var gallery = new SimpleLightbox('.gallery a',{
    sourceAttr:'href',
  });

});
