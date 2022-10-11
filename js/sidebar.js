const openMenuButton = document.querySelector('.util-left .menu-button')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const closeButton = sidebar.querySelector('.close-button')

function openSidebar() {
  sidebar.classList.add('is-active')
  overlay.classList.add('is-active')
}
openMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}
closeButton.addEventListener('click', closeSidebar)
