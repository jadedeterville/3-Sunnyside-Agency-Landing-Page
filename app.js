const  hamburgerEl = document.getElementsByClassName("hamburger")[0];

const  navListEl = document.getElementsByClassName("nav-list")[0];

hamburgerEl.addEventListener("click", () =>{
  navListEl.classList.toggle("active")
})