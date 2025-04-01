function changeImage(imageSrc) {
  const mainImage = document.getElementById("main-image");

  // Fade out
  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = imageSrc;
    mainImage.style.opacity = "1"; // Fade in after changing src
  }, 300);
}

document.addEventListener(
  "wheel",
  (event) => {
    if (event.deltaY !== 0) {
      const container = document.querySelector(".projects-container");
      container.scrollLeft += event.deltaY * 2; // Scroll right when scrolling down
      event.preventDefault();
    }
  },
  { passive: false }
);
