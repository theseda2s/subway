const gnb = document.querySelector('.gnb')
const dropdown = gnb.querySelectorAll('.dropdown')

function openDropdownContent() {
  this.classList.add('is-open')
}
gnb.addEventListener('mouseenter', openDropdownContent)

function closeDropdownContent() {
  this.classList.remove('is-open')
}
gnb.addEventListener('mouseleave', closeDropdownContent)
