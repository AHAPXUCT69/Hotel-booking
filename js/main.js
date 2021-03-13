// Hotel Slider
const hotelSLider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

// Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// ----------------------------------------------------------------------------------

// Reviews Slider
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

// Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Parallax
$('.newsletter').parallax({
  imageSrc: 'img/newsletter-bg.jpg',
  naturalWidth: 2880,
  naturalHeight: 1913,
  speed: 0.4,
});