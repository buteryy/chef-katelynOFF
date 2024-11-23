document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.querySelector(".backdrop")
  const modal = document.querySelector(".modal")
  const modalHeading = document.querySelector(".modal h1")
  const modalImg = document.querySelector(".modal-img")
  const imgContainer = document.getElementById("recipecontainer")

  const recipes = [
    {
      id: 1,
      title: "Jellycat Cake | Simple 4' inch Vanilla Cake",
      image: "assets/jellycatCakeYT.jpg",
      url: "./recipes/jellycatCake.html",
    },
    {
      id: 2,
      title: "Checkerboard Cookies",
      image: "assets/checkerboardCookiesYT.png",
      url: "./recipes/checkerboardCookies.html",
    },
    {
      id: 3,
      title: "Buttery Soft Coffee Cake",
      image: "assets/coffeeCake.jpg",
      url: "./recipes/coffeeCake.html",
    },
    {
      id: 4,
      title: "Fluffy Coffee Buns",
      image: "assets/fluffyCoffeeBuns.jpg",
      url: "./recipes/coffeeBuns.html",
    },
    {
      id: 5,
      title: "Cinnamon Cruffins",
      image: "assets/cinnamonCruffins.jpg",
      url: "./recipes/cinnamonCruffins.html",
    },
    {
      id: 6,
      title: "Petit French Rolls | Beginner Friendly",
      image: "assets/peititFrenchRolls.jpg",
      url: "./recipes/frenchRolls.html",
    },
  ]

  function getImages(recipes) {
    return recipes
      .map(
        (recipe) =>
          `
            <div>
             <img class="gallery-img" src=${recipe.image} data-id=${recipe.id} alt=${recipe.title} />
             <p class="recipesText"> <a class="reciepe-link" href=${recipe.url}>${recipe.title}</a></p>  
            </div>
          `
      )
      .join("")
  }

  imgContainer.innerHTML = getImages(recipes)

  document.addEventListener("click", (e) => {
    if (e.target.matches(".gallery-img")) {
      backdrop.style.display = "block"
      modal.style.display = "block"

      // find the title of the modal
      const modalTitle = recipes.find(
        (recipe) => recipe.id == e.target.dataset.id
      ).title
      modalHeading.textContent = modalTitle
      modalImg.src = e.target.src
    }

    if (e.target.matches(".modal-close-btn, .backdrop")) {
      backdrop.style.display = "none"
      modal.style.display = "none"
    }

    if (e.target.matches("#searchbutton")) {
      // filter the recipes
      const query = document.getElementById("search").value.toLowerCase()
      const container = document.getElementById("recipecontainer")
      const filteredRecipes = recipes.filter((item) =>
        item.title.toLowerCase().includes(query)
      )
      container.innerHTML = getImages(filteredRecipes)
    }
  })
})
