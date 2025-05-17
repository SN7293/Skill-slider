// scripts/app.js

// Redirect if user is not authenticated
window.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('userToken');
  if (!token && window.location.pathname.includes('dashboard')) {
    window.location.href = 'auth.html';
  }
});

// Firebase SDK imports (via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config from Firebase Console (use your own credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCpCzJxBXZgWehFyhvOjub_qz1CgeQdiY8",
    authDomain: "skillswaphub-c4cd4.firebaseapp.com",
    projectId: "skillswaphub-c4cd4",
    storageBucket: "skillswaphub-c4cd4.firebasestorage.app",
    messagingSenderId: "830118393305",
    appId: "1:830118393305:web:9bc586b218bcd0c39f55c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get the signup and login forms
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

// Handle Sign Up
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully! Welcome!");
        localStorage.setItem('userToken', userCredential.user.accessToken);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        const signupMessage = document.getElementById("signup-message");
        signupMessage.textContent = errorMessage;
      });
  });
}

// Handle Login
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Welcome back!");
        localStorage.setItem('userToken', userCredential.user.accessToken);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        const loginMessage = document.getElementById("login-message");
        loginMessage.textContent = errorMessage;
      });
  });
}

// ===== Chat System =====
if (document.querySelector('.chat-section')) {
  // Keep chat-related JS code
}
