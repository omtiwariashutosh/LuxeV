const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const fullscreenNav = document.getElementById("fullscreenNav");

openMenu.addEventListener("click", () => {
  fullscreenNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  fullscreenNav.classList.remove("active");
});
