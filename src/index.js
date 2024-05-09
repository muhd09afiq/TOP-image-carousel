import "./css/reset.css";
import "./css/style.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const frame = document.querySelector(".img-frame");

const imgArray = [img1, img2, img3, img4, img5];

imgArray.forEach((img) => {
  const photo = new Image();
  photo.src = img;
  frame.appendChild(photo);
  photo.classList.add("hidden");
  if (img == imgArray[2]) {
    photo.classList.remove("hidden");
    photo.classList.add("visible");
  }
});

const rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", () => {
  const imgGallery = document.querySelectorAll("img");
  imgGallery.forEach((img) => {
    if (img.classList.contains("visible") == true) {
      img.classList.remove("visible");
      img.classList.add("hidden");

      //show next img
      const nextImg = imgGallery[img];
      console.log(typeof nextImg);
      console.log(nextImg);
      //   nextImg.classList.add("visible");
      //   nextImg.classList.remove("hidden");
    }
  });
});
