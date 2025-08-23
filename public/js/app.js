let mainCatalogSwiper = new Swiper(".main-catalog__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 44,
    },
    640: {
      slidesPerView: 1.8,
      spaceBetween: 44,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 44,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 44,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 44,
    }
  },
});
