const image = document.querySelector("img");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let numeroImage = 1;
arrowRight.addEventListener("click", () => {
  image.setAttribute(
    "src",
    `images/image-${numeroImage <= 5 ? numeroImage++ : (numeroImage = 1)}.jpg`
  );
});

arrowLeft.addEventListener("click", () => {
  image.setAttribute(
    "src",
    `images/image-${numeroImage > 1 ? --numeroImage : (numeroImage = 5)}.jpg`
  );
});
