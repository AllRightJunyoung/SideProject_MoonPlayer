import { Pagination } from 'swiper';
import { SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const SWIPER_SETTING: SwiperProps = {
  modules: [Pagination],
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  slidesPerView: 5,
  slidesPerGroup: 5,
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
  },
};
