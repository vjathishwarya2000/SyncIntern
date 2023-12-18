// change navbar background color
let nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 0);
});

// show faq paragraph
let faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className == "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show/ hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenu.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  menuBtn.style.display = "inline-block";
});
