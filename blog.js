const jsConfetti = new JSConfetti()

// Recipe data
const recipes = [
  {
    id: 9,
    title: "May 11th, 2025  - Happy Mother's Day",
    topImage: "assets/mothersday.jpeg",
    image: "assets/mothersday.jpeg",
    url: "./blogs/mothersday.html",
    bottomImage: "assets/mothersday1.jpeg",
    bottomImage2: "assets/mothersday2.png", // new image next to it
    count: 0,
    description: "",
  },
  {
    id: 9,
    title: "May 9th, 2025  - Happy Teacher's Appreciation Week",
    image: "assets/appreciationweek.jpg",
    url: "./blogs/teachersappreciationweek.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "April 27th, 2025  - My First Wedding Cookie Box",
    image: "assets/weddingcookies.jpg",
    url: "./blogs/weddingcookiebox.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "April 16th. 2025  - Testing my new toy & Making Meringues!",
    image: "assets/meringues3.jpg",
    url: "./blogs/newtoy.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "April 12th. 2025  - The Wizard of Oz Cookies & Red Velvet Cheesecake Brownies",
    image: "assets/ozcookies.jpg",
    url: "./blogs/ozcookies.html",
    count: 0,
    description: "",
  },{
    id: 10,
    title: "April 6th. 2025  - Meringues, Meringues, and Meringues!",
    image: "assets/meringues2.jpg",
    url: "./blogs/meringues2.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "April 3rd. 2025  - Brookies",
    image: "assets/brookies.jpg",
    url: "./blogs/brookies.html",
    count: 0,
    description: "",
  },{
    id: 10,
    title: "March 2nd. 2025  - Mini Chocolate Chip Cupcakes",
    image: "assets/minichococupcakes.jpg",
    url: "./blogs/minichococupcakes.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "February 23rd. 2025  - Red Velvet Cheesecake Brownies",
    image: "assets/redvelvetbrownies.jpg",
    url: "./blogs/redvelvetbrownies.html",
    count: 0,
    description: "",
  },
  {
    id: 10,
    title: "February 8th. 2025  - Cookie Monster Meringues",
    image: "assets/cookiemonster.jpg",
    url: "./blogs/cookiemonster.html",
    count: 0,
    description: "",
  },{
    id: 10,
    title: "February 1st. 2025  - Lemon Cake",
    image: "assets/lemoncake.jpg",
    url: "./blogs/lemoncake.html",
    count: 0,
    description: "",
  },{
    id: 10,
    title: "January 25th. 2025  - Fresh Vanilla Strawberry Cake",
    image: "assets/strawberrycake.jpg",
    url: "./blogs/strawberrycake.html",
    count: 0,
    description: "",
  },{
    id: 10,
    title: "January 4th. 2025  - Mini Chocolate Bundt Cake for the Community",
    image: "assets/minibundtcake.jpg",
    url: "./blogs/minibundtcake.html",
    count: 0,
    description: "",
  },
  {
    id: 9,
    title: "November 24th, 2025  - Almond Pudding",
    image: "assets/2almondpudding.png",
    url: "./blogs/2almondpudding.html",
    count: 0,
    description: "",
  },
  {
    id: 8,
    title: "October 19, 2024 - Sanrio Cookies",
    image: "assets/1sanriocookies.png",
    url: "./blogs/1sanriocookies.html",
    count: 0,
    description: "",
  },
  {
    id: 1,
    title: "October 6, 2024 - Mini Red Velvet Cupcakes for the community!",
    image: "assets/redvelvet.png",
    url: "./blogs/redvelvet.html",
    count: 0,
    description: "",
  },
  {
    id: 2,
    title: "September 14, 2024 - It's Mooncake Festival!",
    image: "assets/mooncake.png",
    url: "./blogs/mooncake.html",
    count: 0,
    description: "",
  },
  {
    id: 4,
    title: "July 12, 2024 - Cooking Date!",
    image: "assets/chaicookies.png",
    url: "./blogs/chaicookies.html",
    count: 0,
    description: "",
  },
  {
    id: 5,
    title: "April 20, 2024 - Mean Girls Cookies for the Musical tonight",
    image: "assets/meangirls.png",
    url: "./blogs/meangirls.html",
    count: 0,
    description: "",
  },
  {
    id: 7,
    title: "April 7, 2024 - Everyone Loves my Meringue Cookies!",
    image: "assets/meringues.png",
    url: "./blogs/meringues.html",
    count: 0,
    description: "",
  },
  {
    id: 3,
    title: "March 24, 2024 - Coffee Cake Cookies for the community!",
    image: "assets/coffeecakecookies.png",
    url: "./blogs/coffeecakecookies.html",
    count: 0,
    description: "",
  },
  
  
  {
    id: 6,
    title: "March 23, 2024 - Bake together for some Family Fun",
    image: "assets/cinnamonapple.png",
    url: "./blogs/applecrisps.html",
    count: 0,
    description: "",
  },
  
  
  
  
]

// Generate recipe card HTML
function recipeCard(recipe) {
  return `
    <a href="${recipe.url}" class="blogcard-link">
      <div class="blogcard">
        <div class='videos'>
          <img src='${recipe.image}' alt='${recipe.title}' class="blogimg">
          <div>
            <p class="recipesText">${recipe.title}</p>
            <p class="recipeDescription">${recipe.description}</p>
          </div>
        </div>
        <div>
          <button class="like-btn" data-id="${recipe.id}">
            ❤️
          </button>
          <p class="like-count" data-id="${recipe.id}">${recipe.count}</p>
        </div>
      </div>
    </a>
  `
}

// Display all recipes
function displayRecipes(recipesToDisplay = recipes) {
  const container = document.getElementById("recipecontainer")
  container.innerHTML = recipesToDisplay.map(recipeCard).join("")
}

// Increment likes for a recipe
function likePost(id) {
  const recipe = recipes.find((item) => item.id === id)
  if (recipe) {
    recipe.count += 1
    updateLikeCount(id, recipe.count)
  }
}

// Update like count in the DOM
function updateLikeCount(id, count) {
  const likeCountElement = document.querySelector(
    `.like-count[data-id="${id}"]`
  )
  if (likeCountElement) {
    likeCountElement.textContent = count
  }
}

// Filter recipes based on search query
function searchRecipes() {
  const query = document.getElementById("search").value.toLowerCase()
  const filteredRecipes = recipes.filter((item) =>
    item.title.toLowerCase().includes(query)
  )
  displayRecipes(filteredRecipes)
}

// Event delegation for handling likes and other interactions
document.addEventListener("click", (e) => {
  if (e.target.closest(".like-btn")) {
    jsConfetti.addConfetti({
      emojis: ['🌈', '🧋', '🍪', '🎂', '❤️', '🌸'],
    })
    e.preventDefault()
    const id = parseInt(e.target.closest(".like-btn").dataset.id, 10)
    likePost(id)
  }

  if (e.target.matches("#recipeSearchButton")) {
    searchRecipes()
  }
})

// Navbar auto-hide on scroll
let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset
  const navDiv = document.getElementById("navDiv")
  if (navDiv) {
    navDiv.style.top = prevScrollpos > currentScrollPos ? "0" : "-50px"
    prevScrollpos = currentScrollPos
  }
}

// Initial recipe display
displayRecipes()
