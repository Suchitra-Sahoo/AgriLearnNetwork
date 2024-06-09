document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = loginForm.querySelector('input[type="text"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      console.log(password)
      console.log("Login Email:", email);
      console.log("Login Password:", password);
      if (email && password) { 
        window.location.href = 'index.html'; 
      } else {
        alert('Please enter valid credentials'); 
    }
      loginForm.reset();
    });
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = registerForm.querySelector('input[type="text"]').value;
      const password = registerForm.querySelector('input[type="password"]').value;
      console.log("Register Email:", email);
      console.log("Register Password:", password);
      registerForm.reset();
      // Switch back to login form after registration
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });
  
    const registerLink = document.querySelector(".register a");
    registerLink.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    const togglePasswordVisibility = (inputId, buttonId) => {
      const passwordInput = document.getElementById(inputId);
      const toggleButton = document.getElementById(buttonId);

      toggleButton.addEventListener('click', function() {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
      });
  };

  togglePasswordVisibility('login-password', 'toggle-login-password');
  togglePasswordVisibility('register-password', 'toggle-register-password');
});

  
  