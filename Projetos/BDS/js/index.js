/*CARROSEL PRINCIPAL*/
const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let counter = 0;

carousel.addEventListener("click", (event) => {
  if (event.target === carousel) return;
  if (event.target === carousel.querySelector(".prev")) {
    if (counter > 0) {
      counter--;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    }
  } else if (event.target === carousel.querySelector(".next")) {
    if (counter < slideCount - 1) {
      counter++;
      slides.style.transform = `translateX(${-counter * 100}%)`;
    }
  }
});

/********************/
let startX;
let isDragging = false;

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.pageX - carousel.offsetLeft;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  const endX = event.pageX - carousel.offsetLeft;
  const deltaX = endX - startX;

  if (deltaX > 50 && counter > 0) {
    counter--;
  } else if (deltaX < -50 && counter < slideCount - 1) {
    counter++;
  }

  slides.style.transform = `translateX(${-counter * 100}%)`;
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});

carousel.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  const x = event.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Adjust sensitivity here
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});

carousel.addEventListener("touchstart", (event) => {
  isDragging = true;
  startX = event.touches[0].pageX - carousel.offsetLeft;
});

carousel.addEventListener("touchend", () => {
  isDragging = false;
  const endX = event.changedTouches[0].pageX - carousel.offsetLeft;
  const deltaX = endX - startX;

  if (deltaX > 50 && counter > 0) {
    counter--;
  } else if (deltaX < -50 && counter < slideCount - 1) {
    counter++;
  }

  slides.style.transform = `translateX(${-counter * 100}%)`;
});

carousel.addEventListener("touchcancel", () => {
  isDragging = false;
});

carousel.addEventListener("touchmove", (event) => {
  if (!isDragging) return;
  const x = event.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Adjust sensitivity here
  slides.style.transform = `translateX(${-counter * 100 + walk}px)`;
});
