$(document).ready(function(){
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

  // Menu Button

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible')
  })

  // Modal

  var modalButton = $("[data-toggle=modal]");
  modalButton.on('click', openModal);
  var closeModalButton = $(".modal__close");
  closeModalButton.on('click', closeModal);

  function openModal () {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal (event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  $(document).on('keydown', function(event) {
          if (event.key == "Escape") {
            closeModal(event);
          }
      });

// Маска для телефонов
$('.phone').mask('+7(000)-000-00-00', {placeholder: "+7(___)-___-__-__"});

// Валидация форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required:"Please specify your name",
        minlength: "Name must have at least 2 letters"
      },
      phone: {
        required: "We need your phone to contact you"
      },
      mail: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      email: {
        required: "We need your email address to send you newsletters",
        email: "Your email address must be in the format of name@domain.com"
      },
  },

  });
  })

// AOS

AOS.init({
  disable: "mobile",
});

});