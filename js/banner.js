'use strict'

const mobileSwiper = new Swiper('.main-banner.desktop-hidden .swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
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
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.main-banner.desktop-only .swiper-pagination',
    clickable: true,
  },
  on: {
    init: function () {
      const autoPlayBtn = document.querySelector(
        '.main-banner.desktop-only .swiper-autoplay-control > button'
      )
      autoPlayBtn.addEventListener('click', (e) => {
        let autoPlayState = autoPlayBtn.getAttribute('aria-pressed')
        if (autoPlayState === 'false') {
          autoPlayBtn.setAttribute('aria-pressed', 'true')
          this.autoplay.stop()
        } else if (autoPlayState === 'true') {
          autoPlayBtn.setAttribute('aria-pressed', 'false')
          this.autoplay.start()
        }
      })
    },
  },
})
