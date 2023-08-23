document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger-menu");
  var navMenu = document.querySelector(".nav-menu");

  burger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
});