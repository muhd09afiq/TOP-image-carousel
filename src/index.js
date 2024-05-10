import "./css/reset.css";
import "./css/style.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const frame = document.querySelector(".img-frame");

const imgArray = [img1, img2, img3, img4, img5];

//create img and circle
imgArray.forEach((img, index) => {
  //create img
  const photo = new Image();
  photo.src = img;
  frame.appendChild(photo);
  photo.classList.add("hidden");
  photo.alt = `Photo ${index + 1}`;
  //show the first image on load
  if (index === 0) {
    photo.classList.add("first-img");
    photo.classList.remove("hidden");
    photo.classList.add("visible");
  }
  if (index === imgArray.length - 1) photo.classList.add("last-img");

  //create circle
  const circle = document.createElement("div");
  circle.classList.add("navigation-dot");
  const container = document.querySelector(".circle-container");
  container.appendChild(circle);
  if (index === 0) {
    circle.classList.add("active");
    circle.classList.add("first-circle");
  }
  if (index === imgArray.length - 1) circle.classList.add("last-circle");
});

const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

function handleCarouselClick(direction) {
  //change active image
  const currentImg = document.querySelector(".visible");
  const firstImg = document.querySelector(".first-img");
  const lastImg = document.querySelector(".last-img");

  if (currentImg) {
    currentImg.classList.toggle("visible");
    currentImg.classList.toggle("hidden");

    const nextImg =
      direction === "right"
        ? currentImg.nextElementSibling || firstImg
        : currentImg.previousElementSibling || lastImg;

    nextImg.classList.toggle("visible");
    nextImg.classList.toggle("hidden");
  }
  //change active circle
  const currentCircle = document.querySelector(".active");
  const firstCircle = document.querySelector(".first-circle");
  const lastCircle = document.querySelector(".last-circle");

  if (currentCircle) {
    currentCircle.classList.toggle("active");

    const nextCircle =
      direction === "right"
        ? currentCircle.nextElementSibling || firstCircle
        : currentCircle.previousElementSibling || lastCircle;

    nextCircle.classList.toggle("active");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  rightBtn.addEventListener("click", () => handleCarouselClick("right"));
  leftBtn.addEventListener("click", () => handleCarouselClick("left"));
});
