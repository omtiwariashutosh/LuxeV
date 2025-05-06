const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const nav = document.getElementById("fullscreenNav");

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});
