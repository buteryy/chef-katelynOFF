document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner")
  const carouselItems = document.querySelectorAll(".carousel-item")
  const totalItems = carouselItems.length
  let index = 0 // carousel index

  document.querySelector('form').addEventListener('submit', function (e) {
    const form = e.target;
  
    setTimeout(() => {
      form.reset(); // Clear the form fields after submission.
    }, 100); // Delay to ensure submission completes before clearing.
  });

  // scrolling the page to the top after clicking on go back from formspree
  window.addEventListener('popstate', function () {
    window.scrollTo(0, 0); // Scroll to the top of the page when navigating back.
  });
  

  // Dynamically calculate the number of items visible at once
  const getVisibleItemsCount = () => {
    const itemWidth = carouselItems[0].offsetWidth
    const carouselWidth = carouselInner.offsetWidth
    return Math.floor(carouselWidth / itemWidth)
  }

  document.addEventListener("click", (e) => {
    // Event listener for the next button click
    if (e.target.matches(".next")) {
      const visibleItems = getVisibleItemsCount()
      if (index < totalItems - visibleItems) {
        index++
      } else {
        index = 0 // Reset to the beginning
      }
      carouselInner.style.transform = `translateX(-${
        (index * 100) / visibleItems
      }%)`
    }

    if (e.target.matches(".prev")) {
      const visibleItems = getVisibleItemsCount()
      if (index > 0) {
        index--
      } else {
        index = totalItems - visibleItems // Reset to the end
      }
      carouselInner.style.transform = `translateX(-${
        (index * 100) / visibleItems
      }%)`
    }
  })
})
