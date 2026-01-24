import Swiper from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination } from 'swiper/modules';

if (window.screen.width < 768) {
  new Swiper('.slide-brands', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    width: 240,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: '.swiper__pagination-brands',
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.slide-technics', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    width: 240,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: '.swiper__pagination-technics',
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.slide-repairs', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    width: 260,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: '.swiper__pagination-repairs',
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
}
