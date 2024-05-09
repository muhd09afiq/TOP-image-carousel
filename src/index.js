import "./css/reset.css";
import "./css/style.css";

import img1 from "./img/1.jpg";

const photo1 = new Image();
photo1.src = img1;

const frame = document.querySelector(".img-frame");

frame.appendChild(photo1);
