'use strict'

$(document).ready(function () {
  tab()
})

function tab() {
  // 탭메뉴 클릭할 때 실행
  $('.tab-menu a').on('click', function (e) {
    e.preventDefault()

    // 초기화
    $('.tab-menu').removeClass('active')
    $('.tab-wrapper .tab-list').hide()

    // 실행
    $(this).parent().addClass('active')
    var activeTab = $(this).attr('href')
    $(activeTab).show()
  })

  // 초기 탭 설정
  var activeChk = 0
  $('.tab-menu').each(function () {
    if ($(this).hasClass('active')) {
      $(this).addClass('active')
      $(this).find('a').trigger('click')
      activeChk++
    }
  })

  // active 지정 안했을 시 첫 탭메뉴 선택
  if (activeChk == 0) {
    $('.tab-menu:first-child a').trigger('click')
  }
  slider() // 슬라이드 실행
}

function slider() {
  var swiperArr = [] // swiper 슬라이드 변수
  var slideInx = [] // 현재 슬라이드 index
  var slideNum = [] // 슬라이드 개수
  var viewNum = '' // 슬라이드 개수 (옵션)
  var winWChk = '' // 디바이스 체크

  $('.slider').each(function (index) {
    var $this = $(this)
    // 슬라이드 인덱스 클래스 추가
    $this.addClass('slider-' + index)
    // 슬라이드, 옵션 배열 추가
    swiperArr.push(undefined)
    slideInx.push(0)
    slideNum.push($this.find('.swiper-slide').length)

    $(window).on('load resize', function () {
      var winW = window.innerWidth
      if (winWChk != 'pc' && winW > 1200) {
        // PC 버전으로 전환할 때
        winWChk = 'pc'
        sliderAct()
      } else if (winWChk != 'ta' && 1201 > winW && winW > 767) {
        // 태블릿 버전으로 전환할 때
        winWChk = 'ta'
        sliderAct()
      } else if (winWChk != 'mo' && winW < 768) {
        // 모바일 버전으로 전환할 때
        winWChk = 'mo'
        sliderAct()
      }
    })
  })

  function sliderAct() {
    $('.slider').each(function (index) {
      // 슬라이드 초기화
      if (swiperArr[index] != undefined) {
        swiperArr[index].destroy()
        swiperArr[index] = undefined
      }

      // slidesPerView 옵션 설정
      if (winWChk == 'pc') {
        viewNum = 3
      } else if (winWChk == 'ta') {
        viewNum = 2
      } else {
        viewNum = 1
      }

      swiperArr[index] = new Swiper('.slider-' + index + ' .inner', {
        slidesPerView: viewNum,
        initialSlide: slideInx[index],
        observer: true,
        observeParents: true,
        simulateTouch: true,
        loop: false,
        parallax: true,
        navigation: {
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        },
        on: {
          activeIndexChange: function () {
            if (
              $('.slider-' + index)
                .parent('.tab-list')
                .css('display') != 'none'
            ) {
              slideInx[index] = this.realIndex // 현재 슬라이드 index 갱신
            }
          },
        },
      })

      // 슬라이드 배열 값 추가
      if (swiperArr[index] == undefined) {
        swiperArr[index] = swiper
      }
    })
  }
}
