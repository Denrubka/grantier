const mainSlider = new Swiper('.main-slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const benefitsSlider = new Swiper('.benefits__slider', {
  loop: true,
  enabled: false,
  init: false,
});

const stepsSlider = new Swiper('.steps__slider', {
  loop: true,
  enabled: false,
  init: false,
});

var swiper = new Swiper(".works__thumbs", {
  spaceBetween: 9,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".works__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});