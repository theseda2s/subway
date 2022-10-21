$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.top-button').fadeIn()
  } else {
    $('.top-button').fadeOut()
  }
})

$('.top-button').click(function () {
  $('html, body').animate({ scrollTop: 0 }, '300')
})
