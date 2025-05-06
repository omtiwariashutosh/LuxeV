const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const fullscreenNav = document.getElementById("fullscreenNav");

openMenu.addEventListener("click", () => {
  fullscreenNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  fullscreenNav.classList.remove("active");
});
// ****************************
const navLinks = document.querySelectorAll(".nav-links a");
const imageBg = document.querySelector(".nav-image-bg");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    imageBg.style.transform = "scale(1.1)";
  });

  link.addEventListener("mouseleave", () => {
    imageBg.style.transform = "scale(1)";
  });
});
