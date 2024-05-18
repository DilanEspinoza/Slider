function slider() {
  let numberImage = 1;

  let image = document.querySelector("img");
  image.setAttribute("src", `images/image-${numberImage}.jpg`);

  let $arrowLeft = document.getElementById("arrow-left");
  let $arrowRight = document.getElementById("arrow-right");

  $arrowLeft.style.display = "none";

  $arrowRight.addEventListener("click", () => {
    ++numberImage;
    image.setAttribute("src", `images/image-${numberImage}.jpg`);
    $arrowLeft.style.display = "block";
    if (numberImage === 5) {
      $arrowRight.style.display = "none";
    }
  });

  $arrowLeft.addEventListener("click", () => {
    --numberImage;
    image.setAttribute("src", `images/image-${numberImage}.jpg`);
    $arrowRight.style.display = "block";
    if (numberImage === 1) {
      $arrowLeft.style.display = "none";
    }
  });
}

slider();
