const jsConfetti = new JSConfetti()

// Blog data - **Ensure all your blog content is correctly placed within the 'content' property of each object.**
const blogs = [
  {
    id: 1, 
    title: "May 11, 2025 - Happy Mother's Day",
    topImage: "assets/mothersday.jpeg", // For the main card and recent blog
    image: "assets/mothersday.jpeg", // For the main image within the blog post
    url: "#mothersday",
    count: 0,
    description: "A heartfelt post celebrating Mother's Day, complete with a special cookie box!",
    content: `
      <p class="blogtext">
        May 11, 2025 -
        <br><br>
        After making a custom wedding cookie box for my dad's cousin, I’m eager to dive into making different kinds of cookie boxes. I love art, and it’s exciting to channel my creativity and artistic skills into new projects beyond painting. 
        <br><br>
        Mother’s Day was the perfect opportunity to craft another cookie box, and I was right—my grandma absolutely loved my cookies! I only wish I’d had time to make extras to share with my mom’s friends. Still, I managed to create a small pink cookie box for my school Baker’s Club teacher, Ms. Miller. She was thrilled and couldn’t stop raving about it!
        <br><br>
        <div class="bottomImageRow">
          <img class="blogpic" src="assets/mothersday1.jpeg" alt="Mother's Day Cookie Box 1">
          <img class="blogpic" src="assets/mothersday2.png" alt="Mother's Day Cookie Box 2">
        </div>
      </p>
    `
  },
  {
    id: 2,
    title: "October 19, 2024 - Sanrio Cookies & Jellycat Toast!",
    image: "assets/1sanriocookies.png",
    url: "#sanriocookies",
    count: 0,
    description: "A delightful surprise for mom's ladies night with custom baked goods.",
    content: `
      <p class="blogtext">
        October 19, 2024 -
        <br><br>
        Surprise for my mom’s ladies night with my baked goods!
        <br><br>
        I did not intend to bake today because I already planned my day out. When my mom told me that she’s having a ladies’ night tonight and that Anna would be there, I knew she would bring me back a gift. Anna just came back from her NY & London trip, and she was very nice to check out both FAO Toy Store New York and Selfridges London for us for Jellycat plush toys. Unfortunately, the Jellycat Amusables Birthday Cake was still out, but Anna got me the Amuseables Toast!
        <br><br>
        Yes, I wanted to bake for my mom’s friends! I baked my mom’s favorite Earl Grey pound cake, my signature coffee cookies, and Jellycat Toast shaped cookies especially for Anna! It was really hectic this morning because I had such limited time and then had to rush to school immediately. There’s a Homecoming Football Game, and I had to perform in the PEP Band. 
        <br><br>
        It’s a blessing that everything turned out smoothly, and my mom helped me package the goods and gave them to her girl friends :) Happy baking always!
      </p>
    `
  },
  {
    id: 3,
    title: "November 24th, 2025 - Almond Pudding",
    image: "assets/2almondpudding.png",
    url: "#almondpudding",
    count: 0,
    description: "A soothing and refreshing almond tofu pudding for Sunday Dinners For The Hungry.",
    content: `
      <p class="blogtext">
        November 24th, 2025 
        <br><br>
        Almond Tofu Pudding for Sunday Dinners For The Hungry!
        <br><br>
        Today I made an Asian almond pudding for the hungry. For the last Sunday of the month I made desserts that are soothing and refreshing. I placed a small fruit in the middle of the pudding. Almond tofu pudding is the perfect dessert after a warm comforting meal!
        <br><br>
        Using some boxed pudding, I used it and heated it up with water. Then, I placed it in the small molds and waited for them to cool and then placed it in the fridge. Finally, you can take them out of the containers and place them in a serving dish. I definitely recommend almond tofu pudding as a dessert after dinner!
      </p>
    `
  },
  {
    id: 4,
    title: "March 23, 2024 - Crispy Baked Apple Chips!",
    image: "assets/applecrisps.png",
    url: "#applechips",
    count: 0,
    description: "Turning a surplus of apples into a healthy and crispy snack.",
    content: `
      <div class="blogdiv">
        <img class="blogpic" src="assets/applecrisps.png" alt="Crispy Baked Apple Chips">
        <p class="blogtext">
          March 23, 2024
          <br><br>
          When you have two bags of apples at home, what will you do? My mom just got a bag of apples yesterday and my grandparents also brought us a bag of apples when they came to visit today. Why not use some apples to make something? And of course it’s one of my healthy snacks - Let’s make a healthy snack Crispy Baked Apple Chips! 
        </p>
      </div>
    `
  },
  {
    id: 5,
    title: "March 23, 2024 - Brookies for Sunday Dinners for the Hungry",
    image: "assets/brookies.jpg",
    url: "#brookies",
    count: 0,
    description: "Contributing signature coffee cookies to a meaningful community cause.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 6,
    title: "July 24, 2024 - Cooking Date: Chai Cookies & Spicy Vodka Cream Pasta",
    image: "assets/chaicookies.png",
    url: "#chaicookies",
    count: 0,
    description: "A fun cooking session with Ciana making Chai cookies and fresh pasta.",
    content: `
      <p class="blogtext">
        July 24, 2024
        <br><br>
        Ciana is a Chai tea lover. She’s the only high school student I know who loves Chai. Today, we had a wonderful “cooking date”. She came over with two boxes of different brands of Chai tea bags, and we finally decided to do something simple - Chai Cookies. But we did not only make Chai cookies, we made lunch together too. I guided her to make fresh pasta with spicy Vodka cream sauce. Yes, it’s my favorite pasta sauce! My mom is addicted to it too. I can simply label this pasta sauce as our house sauce. I always love to make fresh pasta if time allows! And yes, Ciana loved the spicy Vodka cream pasta! Yay! Today was the perfect day for a cooking date! 
      </p>
    `
  },
  {
    id: 7,
    title: "March 23, 2024 - Coffee Cake Cookies for the Community",
    image: "assets/coffeecakecookies.png",
    url: "#coffeecakecookies_mar23",
    count: 0,
    description: "Baking signature coffee cookies for Sunday Dinners for the Hungry.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 8,
    title: "March 24, 2024 - Coffee Cake Cookies for the Community",
    image: "assets/coffeecakecookies.png",
    url: "#coffeecakecookies_mar24",
    count: 0,
    description: "Another batch of signature coffee cookies for the community service.",
    content: `
      <p class="blogtext">
        March 24, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 9,
    title: "March 23, 2024 - Cookie Monster Meringues",
    image: "assets/cookiemonster.jpg",
    url: "#cookiemonster",
    count: 0,
    description: "Fun and delicious Cookie Monster themed meringues.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 10,
    title: "February 1st, 2025 - Lemon Cake",
    image: "assets/lemoncake.jpg",
    url: "#lemoncake",
    count: 0,
    description: "A bright and zesty lemon cake recipe.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 11,
    title: "April 20, 2024 - Mean Girls Cookies for the Musical",
    image: "assets/meangirls.png",
    url: "#meangirls",
    count: 0,
    description: "Pink-themed sugar cookies for the Mean Girls Opening Baked Sales.",
    content: `
      <p class="blogtext">
        April 20, 2024
        <br><br>
        Being part of the Baker’s Club, of course I need to support tonight Mean Girls Opening Baked Sales! I decided to bake sugar cookies with the pink icing themed after Mean Girls.I wish I could have had more time, as the royal icing decorating part was a bit time-consuming. Although the writing ended up turning out not so perfectly, but I at least managed to bring 30 eye-catching individual wrapped Mean Girls cookies to the Baked Sales. They definitely matched the pink theme. What a wonderful musical!! Go Sarah! Go Mean Girlscrew!
      </p>
    `
  },
  {
    id: 12,
    title: "April 7, 2024 - Everyone Loves My Meringue Cookies!",
    image: "assets/meringues.png",
    url: "#meringues",
    count: 0,
    description: "Light, airy, and everyone's favorite meringue cookies, often in pink and white.",
    content: `
      <p class="blogtext">
        April 7, 2024 
        <br><br>
        I received meringue cookie requests from time to time because my friends love them. And I truly enjoy making the cookies for them. Since I ran out of food coloring recently, red is the only food coloring I still have in my pantry. But it did not really matter, pink and white meringue cookies were still a perfect match! Meringues are easy to make but the whole process is very time consuming. You have to bake them for 2-3 hours in the lower deck of the oven and ensure you don’t take them out. They need to simply stay in the oven for another hour or even overnight. If you put the meringue cookies in the airtight container or even a Ziploc bag, they can be kept for at least a week.
      </p>
    `
  },
  {
    id: 13,
    title: "April 16, 2025 - Testing My New Toy & Making Meringues!",
    image: "assets/meringues2.jpg", 
    url: "#newtoy_meringues",
    count: 0,
    description: "Testing a new pink pasta machine and making fresh homemade pasta.",
    content: `
      <p class="blogtext">
        April 16, 2025 - Testing my new toy & making meringues!
        <br><br>
        I finally got to open one of my Christmas gifts from my mom—a pink pasta machine! I’ve always dreamed of owning one because homemade fresh pasta tastes so different, with every bite infused with love. We hesitated to buy the expensive KitchenAid pasta attachment since it’s only an occasional-use tool, but this machine is perfect. It’s heavy, surprisingly versatile, and can make different pasta sizes. It’s so easy to whip up fresh homemade pasta, especially paired with my signature spicy vodka cream sauce.
      </p>
    `
  },
  {
    id: 14,
    title: "March 23, 2024 - Mini Chocolate Bundt Cake for the Community",
    image: "assets/minibundtcake.jpg",
    url: "#minibundtcake",
    count: 0,
    description: "Contributing mini chocolate bundt cakes for Sunday Dinners for the Hungry.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 15,
    title: "March 23, 2024 - Mini Chocolate Chip Cupcakes",
    image: "assets/minichococupcakes.jpg",
    url: "#minichococupcakes",
    count: 0,
    description: "Baking mini chocolate chip cupcakes for a community event.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 16,
    title: "September 14, 2024 - It's Mooncake Festival!",
    image: "assets/mooncake.png",
    url: "#mooncake",
    count: 0,
    description: "Celebrating the Mid-Autumn Festival by making traditional and snow-skin mooncakes.",
    content: `
      <p class="blogtext">
        September 14, 2024
        <br><br>
        The Mid-Autumn Festival, also known as the Mooncake or Moon Festival. It’s always held on the 15th day of the 8th month of the Chinese lunar calendar, usually September or October on the Gregorian calendar. This year the day falls on a Tuesday, September 17. It is a day for family reunions eating mooncakes, and enjoying the full moon. Kids also love to play with lanterns too.
        <br><br>
        For mooncakes, there are traditional mooncakes and snow-skin mooncakes. The traditional mooncakes are made with lotus seed paste and salted egg yolks. The snow skin mooncakes are chewy mochi wrapped around with custard filling or other sweet fillings like custard, red bean paste, sesame paste, or even ice cream.  
        <br><br>
        I love making snow-skin mooncakes for my family and friends. This year I made matcha, chocolate, and vanilla custard filings. Just simply chill for a few hours before serving to the best taste :)
        <br><br>
      </p>
    `
  },
  {
    id: 17,
    title: "March 23, 2024 - Meringues, Meringues, and Meringues!",
    image: "assets/meringues3.jpg",
    url: "#meringues_march23", // Renamed for uniqueness
    count: 0,
    description: "Another batch of meringues for Sunday Dinners for the Hungry.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 18,
    title: "March 23, 2024 - The Wizard of Oz Cookies & Red Velvet Cheesecake Brownies",
    image: "assets/ozcookies.jpg",
    url: "#ozcookies",
    count: 0,
    description: "Magical Wizard of Oz cookies and delicious brownies for the community.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 19,
    title: "October 6, 2024 - Mini Red Velvet Cupcakes for the Community!",
    image: "assets/redvelvet.png",
    url: "#redvelvet",
    count: 0,
    description: "Volunteering and serving mini red velvet cupcakes to those in need.",
    content: `
      <p class="blogtext">
        October 6, 2024
        <br><br>
        It’s the 1st Sunday of October, and I baked mini red velvet cupcakes to donate to Saint Mary Magdalen Church’s Sunday Dinners for the Hungry in Berkeley. I also volunteered today, welcoming and serving the guests. It’s incredibly fulfilling to serve my own baked goods to the people in need. It’s truly rewarding when I see their smiles. I am glad I can be part of the mission to serve the community using my cooking skills. I look forward to the next Sunday dinners for the Hungry :)
      </p>
    `
  },
  {
    id: 20,
    title: "March 23, 2024 - Red Velvet Cheesecake Brownies",
    image: "assets/redvelvetbrownies.jpg",
    url: "#redvelvetbrownies",
    count: 0,
    description: "Delicious red velvet cheesecake brownies for a good cause.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 21,
    title: "March 23, 2024 - Fresh Vanilla Strawberry Cake",
    image: "assets/strawberrycake.jpg",
    url: "#strawberrycake",
    count: 0,
    description: "A delightful vanilla strawberry cake for the community.",
    content: `
      <p id="blogtext" class="blogtext">
        March 23, 2024
        <br><br>
        Thanks Ms Skinner for introducing Sunday Dinners for the Hungry to me. This parishioner-funded ministry occurs on the 1st and 4th Sunday of every month at Saint Mary Magdalen Church’s Parish Hall/Magdalen Hall. Donations of desserts are always welcomed to add a sweet touch after the meal. I made 2 big batches of my signature coffee cookies this morning and happily dropped them off around 1pm. It’s truly meaningful to contribute to such a meaningful cause.
      </p>
    `
  },
  {
    id: 22,
    title: "May 9, 2025 - Happy Teacher Appreciation Week!",
    image: "assets/appreciationweek.jpg",
    url: "#teachersappreciationweek",
    count: 0,
    description: "Personalized pencil cookies to show gratitude to teachers.",
    content: `
      <p class="blogtext">
        May 9, 2025 - Happy Teacher Appreciation Week!
        <br><br>
        Surprise for my mom’s ladies night with my baked goods!
        <br><br>
        To show my appreciation for my teachers, I decided to bake personalized pencil cookies with each teacher’s name on them. This project was so much fun! I found the pencil cookie idea online and couldn’t wait to try it. The teachers were thrilled when I handed them out—one even said her cookie would be featured in her Instagram post tonight! Two others mentioned they’d bring their cookies home to show their wives, which made me laugh.
        <br><br>
        A special thank you to my mom for helping me package each pencil cookie in a bag, making it so easy to hand them out to my teachers! Mom, you’re the best—I love you!
      </p>
    `
  },
  {
    id: 23,
    title: "October 19, 2024 - My First Wedding Cookie Box",
    image: "assets/weddingcookies.jpg",
    url: "#weddingcookiebox",
    count: 0,
    description: "Crafting a meaningful custom wedding cookie box for family.",
    content: `
      <p class="blogtext">
        October 19, 2024 -
        <br><br>
        My mom suggested I make a wedding cookie box for my dad’s cousin, who just got married, and I thought it was a brilliant and meaningful gift idea. I found tons of wedding cookie ideas online, but I didn’t have the right cookie cutters. Since it was a last-minute project and too late to order cutters from Amazon, I decided to craft my own laminated cookie cutters—and they worked perfectly! Decorating royal icing cookies is time-consuming, but I managed to create six beautiful wedding cookies, plus one with the bride and groom’s names personalized. Yay!
        <br><br>
        One wonderful thing about my mom is how thoughtful she is—she’s stocked up on all sorts of packaging boxes and supplies in different sizes. This made it so easy to put together the perfect wedding cookie box for my dad to take on his long flight to his cousin’s wedding.
      </p>
    `
  }
];
// Get DOM elements
const blogCardsContainer = document.getElementById("blogCardsContainer");
const recentBlogDisplay = document.getElementById("recentBlogDisplay");

// Modal elements
const blogModal = document.getElementById("blogModal");
const closeModalButton = blogModal.querySelector(".close-button");
const modalBlogContent = document.getElementById("modalBlogContent");
const prevBlogBtn = document.getElementById("prevBlogBtn");
const nextBlogBtn = document.getElementById("nextBlogBtn");

let currentBlogIndex = -1; // To keep track of the currently displayed blog in the modal

// Generate blog card HTML
function blogCard(blog) {
  return `
    <a href="#" class="blogcard-link" data-id="${blog.id}">
      <div class="blogcard">
        <div class='videos'>
          <img src='${blog.image}' alt='${blog.title}' class="blogimg">
          <div>
            <p class="recipesText">${blog.title}</p>
            <p class="recipeDescription">${blog.description}</p>
          </div>
        </div>
        <div>
          <button class="like-btn" data-id="${blog.id}">
            ❤️
          </button>
          <p class="like-count" data-id="${blog.id}">${blog.count}</p>
        </div>
      </div>
    </a>
  `;
}

// Display all blog cards
function displayBlogCards(blogsToDisplay = blogs) {
  blogCardsContainer.innerHTML = blogsToDisplay.map(blogCard).join("");
  // Ensure the main content is visible and modal is hidden
  blogCardsContainer.style.display = "grid"; 
  recentBlogDisplay.style.display = "flex"; 
  // No need to hide blogModal here, as it's controlled by `openBlogModal`
}

// Display the most recent blog in the designated section
function displayRecentBlog() {
    if (blogs.length > 0) {
        // Sort blogs by ID in descending order to get the truly most recent if IDs are sequential
        const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);
        const mostRecentBlog = sortedBlogs[0]; 
        recentBlogDisplay.innerHTML = `
            <a href="#" class="recentblog-link" data-id="${mostRecentBlog.id}">
                <img style="width: 40vh" src="${mostRecentBlog.topImage || mostRecentBlog.image}" alt="${mostRecentBlog.title}" />
            </a>
        `;
    } else {
        recentBlogDisplay.innerHTML = "<p>No recent blog posts to display.</p>";
    }
}

// Open and display blog content in the modal
function openBlogModal(blogId) {
  const blogIndex = blogs.findIndex(blog => blog.id === blogId);
  if (blogIndex === -1) return; // Blog not found

  currentBlogIndex = blogIndex;
  const blog = blogs[currentBlogIndex];

  const blogHtml = `
    <div class="blogdiv">
      <img class="blogpic" src="${blog.image}" alt="${blog.title}">
      ${blog.content}
    </div>
  `;
  modalBlogContent.innerHTML = blogHtml;

  // Update navigation button states
  prevBlogBtn.disabled = currentBlogIndex === 0;
  nextBlogBtn.disabled = currentBlogIndex === blogs.length - 1;

  blogModal.style.display = "block"; // Show the modal
  document.body.style.overflow = "hidden"; // Prevent scrolling on the background
  window.scrollTo(0, 0); // Scroll modal content to top
}

// Close the modal
function closeBlogModal() {
  blogModal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable background scrolling
}

// Navigate to previous blog
function showPreviousBlog() {
  if (currentBlogIndex > 0) {
    currentBlogIndex--;
    openBlogModal(blogs[currentBlogIndex].id);
  }
}

// Navigate to next blog
function showNextBlog() {
  if (currentBlogIndex < blogs.length - 1) {
    currentBlogIndex++;
    openBlogModal(blogs[currentBlogIndex].id);
  }
}


// Increment likes for a blog
function likePost(id) {
  const blog = blogs.find((item) => item.id === id);
  if (blog) {
    blog.count += 1;
    updateLikeCount(id, blog.count);
  }
}

// Update like count in the DOM
function updateLikeCount(id, count) {
  const likeCountElement = document.querySelector(
    `.like-count[data-id="${id}"]`
  );
  if (likeCountElement) {
    likeCountElement.textContent = count;
  }
}

// Filter blogs based on search query
function searchBlogs() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredBlogs = blogs.filter((item) =>
    item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
  );
  displayBlogCards(filteredBlogs);
}

// Event delegation for handling clicks
document.addEventListener("click", (e) => {
  // Handle like button clicks
  if (e.target.closest(".like-btn")) {
    jsConfetti.addConfetti({
      emojis: ['🌈', '🧋', '🍪', '🎂', '❤️', '🌸'],
    });
    e.preventDefault(); // Prevent default link behavior if inside an anchor
    const id = parseInt(e.target.closest(".like-btn").dataset.id, 10);
    likePost(id);
  }

  // Handle search button click
  if (e.target.matches("#blogSearchButton")) {
    searchBlogs();
  }

  // Handle clicking on a blog card to display the full post in modal
  if (e.target.closest(".blogcard-link")) {
    e.preventDefault(); // Prevent default navigation
    const blogLink = e.target.closest(".blogcard-link");
    const blogId = parseInt(blogLink.dataset.id, 10);
    openBlogModal(blogId);
  }

  // Handle clicking on the recent blog image to display in modal
  if (e.target.closest(".recentblog-link")) {
    e.preventDefault();
    const recentBlogLink = e.target.closest(".recentblog-link");
    const blogId = parseInt(recentBlogLink.dataset.id, 10);
    openBlogModal(blogId);
  }
});

// Event listeners for modal controls
closeModalButton.addEventListener("click", closeBlogModal);
prevBlogBtn.addEventListener("click", showPreviousBlog);
nextBlogBtn.addEventListener("click", showNextBlog);

// Close modal when clicking outside of modal content
window.addEventListener("click", (e) => {
  if (e.target === blogModal) {
    closeBlogModal();
  }
});

// Navbar auto-hide on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const navDiv = document.getElementById("navDiv");
  if (navDiv) {
    navDiv.style.top = prevScrollpos > currentScrollPos ? "0" : "-50px";
    prevScrollpos = currentScrollPos;
  }
};

// Initial display of blog cards and recent blog
displayBlogCards();
displayRecentBlog();
