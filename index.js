const menuIcon = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".mobile")

menuIcon.addEventListener('click', ()=>{
navbar.classList.toggle('change')
})