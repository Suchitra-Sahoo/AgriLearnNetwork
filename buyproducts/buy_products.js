const notify = document.querySelector(".notify");
function show() {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Item added to cart';
  notify.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 2000);
}

//cart toggle button
const cartToggle = document.querySelector(".cart");
const minicart = document.querySelector(".mini-cart");
const savedTheme = localStorage.getItem("cart");
const checkout = document.getElementById("checkout");
if (savedTheme && savedTheme === "see") {
  minicart.classList.add("cart-see");
}
cartToggle.addEventListener("click", function () {
  minicart.classList.toggle("cart-see");

  // Save the current theme in local storage
  if (minicart.classList.contains("cart-see")) {
    localStorage.setItem("cart", "see");
  } else {
    localStorage.setItem("cart", "not");
  }
});
checkout.addEventListener("click", () => {
  minicart.classList.remove("cart-see");
});

// mode toggle function
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // Load the saved theme from local storage and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    // Save the current theme in local storage
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

//adding to cart
document.addEventListener("DOMContentLoaded", () => {
  let cartItems = JSON.parse(localStorage.getItem("CARTS")) || [];
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.getElementById("cart-items");
  const checkoutButton = document.getElementById("checkout");
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const dyna = document.getElementById("dyna");

  addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const product = button.getAttribute("data-product");
          const image = button.getAttribute("data-image");
          const price = button.getAttribute("data-price");
          addItemToCart(product, image, price);
          updateCart();
          updatePrice();
          localStorage.setItem("CARTS", JSON.stringify(cartItems));
      });
  });

  function addItemToCart(product, image, price) {
      const existingItem = cartItems.find((item) => item.product === product);
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cartItems.push({ product, image, price, quantity: 1 });
          dyna.innerHTML = Number(dyna.innerHTML) + Number(price);
      }
      updateCart();
  }

  function updatePrice() {
      let totalPrice = 0;
      cartItems.forEach((item) => {
          totalPrice += item.price * item.quantity;
      });
      dyna.innerHTML = totalPrice;
  }

  function updateCart() {
      cartItemsList.innerHTML = "";
      if (cartItems.length === 0) {
          emptyCartMessage.style.display = "block";
          checkoutButton.disabled = true;
      } else {
          emptyCartMessage.style.display = "none";
          checkoutButton.disabled = false;
      }

      cartItems.forEach((item) => {
          const li = document.createElement("li");
          li.innerHTML = `
              <div style="display:flex; justify-content: space-between; gap: 110px">
                  <div class="item-info" style="display:flex">
                      <img src="${item.image}" alt="${item.product}">
                      <p>${item.product}</p>
                  </div>
                  <div class="quantity-controls">
                      <button class="minus">-</button>
                      <span>${item.quantity}</span>
                      <button class="plus">+</button>
                  </div>
              </div>`;
          cartItemsList.appendChild(li);

          const minusButton = li.querySelector(".minus");
          const plusButton = li.querySelector(".plus");
          minusButton.addEventListener("click", () => {
              if (item.quantity > 1) {
                  item.quantity -= 1;
              } else {
                  cartItems.splice(cartItems.indexOf(item), 1);
              }
              dyna.innerHTML = Number(dyna.innerHTML) - Number(item.price);
              updateCart();
              updatePrice();
              localStorage.setItem("CARTS", JSON.stringify(cartItems));
          });
          plusButton.addEventListener("click", () => {
              item.quantity += 1;
              dyna.innerHTML = Number(dyna.innerHTML) + Number(item.price);
              updateCart();
              updatePrice();
              localStorage.setItem("CARTS", JSON.stringify(cartItems));
          });
      });
  }

  updateCart();
});


//navbar for small screen
let menuIcon = document.querySelectorAll("#menu-icon");
let navbar = document.querySelectorAll(".navbar");
let Contact = document.querySelectorAll("#contact");
let navContact = document.querySelectorAll("#nav--contact");

const password = document.getElementById("password");

menuIcon.forEach((icon) => {
  icon.onclick = () => {
    icon.classList.toggle("bx-x");
    navbar.forEach((nav) => nav.classList.toggle("active"));
  };
});

// Add an event listener to navbar links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    // Remove 'active' class from navbar
    document.querySelectorAll(".navbar").forEach((nav) => {
      nav.classList.remove("active");
    });
    // Toggle the menu icon
    document.querySelectorAll("#menu-icon").forEach((icon) => {
      icon.classList.remove("bx-x"); // Remove the 'bx-x' class to close the hamburger menu
    });
  });
});

// Add an "active" class to the clicked link
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // Remove any existing "active" class from links
    $("a").removeClass("active");

    // Add "active" class to clicked link
    $(this).addClass("active");

    // Smooth scroll to target as before
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          900,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });

// When scroll on any section that section's corresponding hyperlink will be active and
// the previous activated hyperlink will be deactivated
$("section[id]").mouseover(function () {
  var sectionId = $(this).attr("id");
  var correspondingLink = $('a[href="#' + sectionId + '"]');
  // Remove active class from all links
  $("a").removeClass("active");
  // Add active class to the corresponding link
  correspondingLink.addClass("active");
});

// Set initial active link based on URL hash
$(document).ready(function () {
  var hash = window.location.hash;
  if (hash) {
    $('a[href="' + hash + '"]').addClass("active");
  }
  // Change this line from selecting all headers to selecting one header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

const typed = new Typed(".multiple-text", {
  strings: ["Sow", "Learn", "Grow"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// SCRIPT FOR THE SEARCH BAR BUTTON

const searchinput = document.getAnimations("searchbar");
searchinput.addEventListener("input", searchProducts);
function searchProducts() {
  // Select all elements with the class 'fcard' and convert the NodeList to an array
  let box = [...document.querySelectorAll(".product")];

  // Get the input element by its ID 'input'
  let val = document.getElementById("searchbar");

  // Retrieve the value from the input, convert it to uppercase, and trim any extra whitespace
  let filter = val.value.toUpperCase().trim();

  // Log the filtered search value for debugging purposes
  console.log(filter);

  // Log the array of elements with class 'fcard' for debugging purposes
  console.log(box);
  // Initialize a flag to check if any results were found
  let resultsFound = false;

  // Loop through each element in the 'box' array
  for (let i = 0; i < box.length; i++) {
    // Get the current element in the loop
    let component = box[i];

    // Select the <h2> element within the current component
    let h3 = component.querySelector("h3");

    // Get the text content of the <h2> element
    let componentName = h3.textContent || h3.innerText;

    // Log the component name for debugging purposes
    console.log(componentName);

    // Check if the component name contains the filter value
    console.log(componentName.toUpperCase().indexOf(filter));

    // If the component name contains the filter value, show the component
    if (componentName.toUpperCase().indexOf(filter) > -1) {
      console.log(`Showing card ${i}: ${componentName}`);
      component.style.display = "inline";
      resultsFound = true;
    }
    // If the component name does not contain the filter value, hide the component
    else {
      console.log(`Hiding card ${i}: ${componentName}`);
      component.style.display = "none";
    }
  }

  // Select the 'no-results-message' element
  let noResultsMessage = document.getElementById("no-results-message");

  // If no results were found, display a message
  if (!resultsFound) {
    noResultsMessage.style.display = "block";
  }
  // If results were found, hide the message
  else {
    noResultsMessage.style.display = "none";
  }
}
