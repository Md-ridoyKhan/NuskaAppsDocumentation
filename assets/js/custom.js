const header = document.querySelector(".header");
const navToggle = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");
navToggle.onclick = ()=>{
    nav.classList.toggle("active");
}
window.onscroll = ()=>{
    this.scrollY > 20 ?
    header.classList.add("active"):
    header.classList.remove("active");
    this.scrollY > 20 ?
    nav.classList.add("actives"):
    nav.classList.remove("actives");
}


