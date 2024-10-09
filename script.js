// JavaScript to handle the carousel movement
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;
let index = 0;

// Event listener for the next button click
nextButton.addEventListener('click', () => {
    if (index < totalItems / 3 - 1) {
        index++;
    } else {
        index = 0;
    }
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
});

// Event listener for the previous button click
prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalItems / 3 - 1;
    }
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
});