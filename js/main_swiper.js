const swiper = new Swiper(".main_banner", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
