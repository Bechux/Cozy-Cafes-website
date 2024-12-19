// JavaScript for Image Carousel
const images = ["/images/image carousel/GLAD/1.jpg", "/images/image carousel/GLAD/2.jpg", "/images/image carousel/GLAD/3.jpg", "/images/image carousel/GLAD/4.jpg"];
let currentIndex = 0;

// Elements
const centerImage = document.getElementById("center-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Event Listeners
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    centerImage.src = images[currentIndex];
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    centerImage.src = images[currentIndex];
});