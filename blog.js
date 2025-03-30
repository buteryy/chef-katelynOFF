const jsConfetti = new JSConfetti()

// Recipe data
const recipes = [
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
