// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvZ86Tn2h3YwIbSxc8tiUmdQlO8meYfE",
  authDomain: "agritech-42ab8.firebaseapp.com",
  projectId: "agritech-42ab8",
  storageBucket: "agritech-42ab8.appspot.com",
  messagingSenderId: "721957800898",
  appId: "1:721957800898:web:7fcf30362fe97c6d4f645b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Account created successfully! Redirecting to login page...");
        window.location.href = "login.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});
