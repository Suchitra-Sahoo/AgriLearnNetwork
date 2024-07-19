const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const togglePasswordVisibility = (inputId, buttonId) => {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  toggleButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
  });
};

togglePasswordVisibility('signup-password', 'toggle-signup-password');
togglePasswordVisibility('signup-confirm-password', 'toggle-signup-confirm-password');
togglePasswordVisibility('signin-password', 'toggle-signin-password');

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function showSuccessBanner(message) {
  const banner = document.getElementById('success-banner');
  const bannerText = document.getElementById('banner-text');
  bannerText.textContent = message;
  banner.style.display = 'block';
  setTimeout(() => {
    banner.style.display = 'none';
  }, 3000);
}
document.querySelector('.sign-up form').addEventListener('submit', (e) => {
  e.preventDefault();
  showSuccessBanner('Signed up successfully');
});
// Handle sign-in form submission
document.querySelector('.sign-in form').addEventListener('submit', (e) => {
  e.preventDefault();
  showSuccessBanner('Signed in successfully');
});

// Handle sign-up form submission

