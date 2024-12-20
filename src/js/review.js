import Swiper from 'swiper';
import 'swiper/css';

const mySwiper = document.querySelector('.review-swiper');

const swiper = new Swiper(mySwiper, {
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
});
