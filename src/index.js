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
  if (img == imgArray[0]) {
    photo.classList.add("first-img");
  }
});

const rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", function () {
  const imgGallery = document.querySelectorAll("img");
  imgGallery.forEach((img) => {
    if (img.classList.contains("visible") == true) {
      img.classList.remove("visible");
      img.classList.add("hidden");
      img.classList.add("previous");
    }
  });
  if (document.querySelector(".previous") != null) {
    if (document.querySelector(".previous").nextSibling != null) {
      const nextImg = document.querySelector(".previous").nextSibling;
      nextImg.classList.add("visible");
      nextImg.classList.remove("hidden");
      nextImg.classList.add("previous");
      document.querySelector(".previous").classList.remove("previous");
    } else {
      document.querySelector(".previous").classList.remove("previous");
      const firstImg = document.querySelector(".first-img");
      firstImg.classList.add("visible");
      firstImg.classList.remove("hidden");
      firstImg.classList.add("previous");
    }
  }
});
