const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")
const carouselInner = document.querySelector(".carousel-inner")
const carouselItems = document.querySelectorAll(".carousel-item")
const totalItems = carouselItems.length

let index = 0

// Dynamically calculate the number of items visible at once
const getVisibleItemsCount = () => {
  const itemWidth = carouselItems[0].offsetWidth
  const carouselWidth = carouselInner.offsetWidth
  return Math.floor(carouselWidth / itemWidth)
}

// Event listener for the next button click
nextButton.addEventListener("click", () => {
  const visibleItems = getVisibleItemsCount()
  if (index < totalItems - visibleItems) {
    index++
  } else {
    index = 0 // Reset to the beginning
  }
  carouselInner.style.transform = `translateX(-${
    (index * 100) / visibleItems
  }%)`
})

// Event listener for the previous button click
prevButton.addEventListener("click", () => {
  const visibleItems = getVisibleItemsCount()
  if (index > 0) {
    index--
  } else {
    index = totalItems - visibleItems // Reset to the end
  }
  carouselInner.style.transform = `translateX(-${
    (index * 100) / visibleItems
  }%)`
})
