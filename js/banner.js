'use strict'

const mobileSwiper = new Swiper('.main-banner.desktop-hidden .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.main-banner.desktop-hidden .swiper-pagination',
    clickable: true,
  },
})

const desktopSwiper = new Swiper('.main-banner.desktop-only .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.main-banner.desktop-only .swiper-pagination',
    clickable: true,
  },
})
