import "./css/reset.css";
import "./css/style.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const frame = document.querySelector(".img-frame");

const imgArray = [img1, img2, img3, img4, img5];

imgArray.forEach((img, index) => {
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
});

const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

function handleCarouselClick(direction) {
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
}

rightBtn.addEventListener("click", () => handleCarouselClick("right"));
leftBtn.addEventListener("click", () => handleCarouselClick("left"));
