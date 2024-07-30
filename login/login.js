const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const passwordInput = document.getElementById("signup-password");
const confirmPasswordInput = document.getElementById("signup-confirm-password");
const passwordMatchError = document.getElementById(
  "signup-password-match-error"
);
const signUpBtn = document.getElementById("signup-button");

const forgotPasswordLink = document.getElementById("forgot-password-link");
const forgotPasswordForm = document.getElementById("forgot-password-form");
const signInForm = document.getElementById("signin-form");
const signUpForm = document.getElementById("signup-form");
const backToLoginLink = document.getElementById("back-to-login-page");

const togglePasswordVisibility = (inputId, buttonId) => {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  toggleButton.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.innerHTML =
      type === "password"
        ? '<i class="fas fa-eye"></i>'
        : '<i class="fas fa-eye-slash"></i>';
  });
};

togglePasswordVisibility("signup-password", "toggle-signup-password");
togglePasswordVisibility(
  "signup-confirm-password",
  "toggle-signup-confirm-password"
);
togglePasswordVisibility("signin-password", "toggle-signin-password");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  forgotPasswordForm.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  forgotPasswordForm.style.display = "none";
});

function validatePasswords() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordMatchError.style.display = "block";
    signUpBtn.disabled = true;
  } else {
    passwordMatchError.style.display = "none";
    signUpBtn.disabled = false;
  }
}

function showSuccessBanner(bannerId, message) {
  const banner = document.getElementById(bannerId);
  const bannerText = banner.querySelector("p");
  bannerText.textContent = message;
  banner.style.display = "block";
  setTimeout(() => {
    banner.style.display = "none";
  }, 3000);
}

// Handle sign-up form submission
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccessBanner("signup-success-banner", "Signed up successfully");
});

// Handle sign-in form submission
document.getElementById("signin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccessBanner("signin-success-banner", "Signed in successfully");
});

forgotPasswordLink.addEventListener("click", () => {
  forgotPasswordForm.style.display = "block";
  signInForm.style.display = "none";
});

backToLoginLink.addEventListener("click", () => {
  forgotPasswordForm.style.display = "none";
  signInForm.style.display = "block";
});
