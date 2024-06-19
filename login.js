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
togglePasswordVisibility('signin-confirm-password', 'toggle-signin-confirm-password');

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

