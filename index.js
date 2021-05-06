const hamberEl = document.querySelector(".menu-btn");
const navEl = document.querySelector(".nav");
const arrowEl = document.querySelectorAll(".arrow-up");
const navLinkEl = document.querySelectorAll(".nav__link");
const navInnerLinkEl = document.querySelectorAll(".nav__inner__list");
let menuOpen = false;
hamberEl.addEventListener("click", () => {
  if(!menuOpen){
    hamberEl.classList.add("open");
    menuOpen = true;
    navEl.classList.add("display-block");
  }else{
    hamberEl.classList.remove("open");
    menuOpen = false;
    navEl.classList.remove("display-block");
  }
})

for( let i = 0; i < navLinkEl.length; i++){
  navLinkEl[i].addEventListener("click", () => {
    navLinkEl[i].classList.toggle("opactiy");
    arrowEl[i].classList.toggle("rotate");
    navInnerLinkEl[i].classList.toggle("display-block");
  })
}