let menu = document.getElementById("menu");
let navlist = document.getElementById("navlist");
let menuX = document.getElementById("menu-x");

menu.addEventListener("click", () => {
  navlist.classList.add("active");
});

menuX.addEventListener("click", () => {
  navlist.classList.remove("active");
});
