import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.review-swiper', {
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 4,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-prev-reviews',
  },
});
