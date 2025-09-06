// auth-protect.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Your Firebase config (keep same for all pages)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Init Firebase once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * Common protectContent function
 * - Adds blur to #protected-content when user not logged in
 * - Shows #login-message when user not logged in
 */
export function protectContent() {
  onAuthStateChanged(auth, (user) => {
    const content = document.getElementById("protected-content");
    const message = document.getElementById("login-message");

    if (!content || !message) return; // page doesn’t use protection

    if (user) {
      content.classList.remove("locked");
      message.style.display = "none";
    } else {
      content.classList.add("locked");
      message.style.display = "block";
    }
  });
}
