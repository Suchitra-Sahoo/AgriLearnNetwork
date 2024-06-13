const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const passwordInput = document.getElementById('signup-password');
const confirmPasswordInput = document.getElementById('signup-confirm-password');
const passwordMatchError = document.getElementById('signup-password-match-error');
const signUpBtn = document.getElementById('signup-button');

function validatePasswords() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordMatchError.style.display = 'block';
    signUpBtn.disabled = true;
  } else {
    passwordMatchError.style.display = 'none';
    signUpBtn.disabled = false;
  }
}

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);

