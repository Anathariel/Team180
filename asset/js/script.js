document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger-menu");
  var navMenu = document.querySelector(".nav-menu");

  burger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
});

//Infinite Carousel
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1; // Set based on the number of slides
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == slides.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = slides.length - 1; // Set based on the number of slides
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}
