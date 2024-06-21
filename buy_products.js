
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
  document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const miniCart = document.getElementById('mini-cart');
    const goToTopButton = document.getElementById('go-to-top');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const image = button.getAttribute('data-image');
            addItemToCart(product, image);
            updateCart();
        });
    });

    function addItemToCart(product, image) {
        const existingItem = cartItems.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ product, image, quantity: 1 });
        }
    }

    function updateCart() {
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.product}">
                <span>${item.product}</span>
                <div class="quantity-controls">
                    <button class="minus">-</button>
                    <span>${item.quantity}</span>
                    <button class="plus">+</button>
                </div>
            `;
            cartItemsList.appendChild(li);

            const minusButton = li.querySelector('.minus');
            const plusButton = li.querySelector('.plus');
            minusButton.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cartItems.splice(cartItems.indexOf(item), 1);
                }
                updateCart();
            });
            plusButton.addEventListener('click', () => {
                item.quantity += 1;
                updateCart();
            });
        });

        // Dynamically adjust cart height
        const itemHeight = 60;
        const initialHeight = 100;
        const cartHeight = Math.min(cartItems.length * itemHeight + initialHeight, window.innerHeight * 0.7);
        miniCart.style.height = `${cartHeight}px`;
    }

    // Drag and Drop functionality for mini cart
    let isDragging = false;
    let offsetX, offsetY;

    miniCart.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - miniCart.offsetLeft;
        offsetY = e.clientY - miniCart.offsetTop;
        miniCart.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            miniCart.style.left = (e.clientX - offsetX) + 'px';
            miniCart.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        miniCart.style.cursor = 'move';
    });

    // Go to Top Button functionality
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    });

    goToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
