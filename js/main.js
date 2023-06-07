//Menu
const menu = document.querySelector(".navbar_links");
const menuButton = document.querySelector(".navbar_icons");

menuButton.addEventListener("click", ()=> {
    menu.classList.toggle("navbar_open"); // toggle: chuyển đổi narbar_open qua navbar_links thì qua css .navbar_links.navbar_open
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});


//overlay

const overlay = document.querySelector("#overlay");
overlay.addEventListener("click", ()=>{
    menu.classList.toggle("navbar_open"); // toggle: chuyển đổi narbar_open qua navbar_links thì qua css .navbar_links.navbar_open
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})