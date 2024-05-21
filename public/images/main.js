const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-box1");

function toggleNavbar() {
  menu.classList.toggle("ham-box1");
}

hamburger.addEventListener("click", toggleNavbar);
