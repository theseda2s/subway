const gnb = $('.gnb')
const gnbBg = $('.gnb-bg')
const dropdownContent = $('.dropdown-content')

dropdownContent.hide()
gnbBg.hide()

function slideDownContent() {
  dropdownContent.slideDown(350)
  gnbBg.slideDown(250)
}
gnb.mouseenter(slideDownContent)

function slideUpContent() {
  dropdownContent.slideUp(250)
  gnbBg.slideUp(350)
}
gnb.mouseleave(slideUpContent)
