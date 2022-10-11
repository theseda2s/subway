$(document).ready(function () {
  $('.drawer-menu-content').hide()

  function toggleDrawerMenu() {
    $('.drawer-menu')
      .not($(this).parent().toggleClass('is-active'))
      .removeClass('is-active')
    $('.drawer-menu-content')
      .not($(this).next('.drawer-menu-content').slideToggle(250))
      .hide()
  }
  $('button.drawer-menu-button').click(toggleDrawerMenu)
})
