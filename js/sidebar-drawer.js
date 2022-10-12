const drawerMenu = $('.drawer-menu')
const drawerMenuButton = $('button.drawer-menu-button')
const drawerMenuContent = $('.drawer-menu-content')

drawerMenuContent.hide()

function toggleDrawerMenu() {
  drawerMenu
    .not($(this).parent().toggleClass('is-active'))
    .removeClass('is-active')
  drawerMenuContent.not($(this).next(drawerMenuContent).slideToggle(250)).hide()
}
drawerMenuButton.click(toggleDrawerMenu)
