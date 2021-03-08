const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

// Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
