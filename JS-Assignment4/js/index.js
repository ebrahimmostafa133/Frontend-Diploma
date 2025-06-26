const signinEmail = document.getElementById("signinEmail");
const signinPassword = document.getElementById("signinPassword");
const signinButton = document.getElementById("signinButton");
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupButton = document.getElementById("signupButton");
const logoutButton = document.getElementById("logoutButton");
const signInLink = document.getElementById("signInLink");
const signUpLink = document.getElementById("signUpLink");
const welcomeMessage = document.getElementById("welcomeMessage");

// Regex patterns
const userNameRegex = /^[a-zA-Z_]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Initialize users array from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// ======================
// Utility Functions
// ======================

function validateSignUpForm() {
    if (!userNameRegex.test(signupName.value)) {
        alert("Invalid username (3-20 letters/underscores only)");
        return false;
    }
    if (!emailRegex.test(signupEmail.value)) {
        alert("Invalid email format");
        return false;
    }
    if (!passwordRegex.test(signupPassword.value)) {
        alert("Password must be 6+ chars with letters and numbers");
        return false;
    }
    return true;
}

function redirectToWelcome() {
    const loggedInUser = getCurrentUser();
    if (loggedInUser && window.location.pathname.includes("welcome.html")) return;
    if (loggedInUser) window.location.href = "pages/welcome.html";
}

function redirectToLogin() {
    if (!getCurrentUser() && !window.location.pathname.includes("index.html")) {
        window.location.href = "../index.html";
    }
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

// ======================
// Event Listeners
// ======================

if (signinButton) {
    signinButton.addEventListener("click", function(e) {
        e.preventDefault();
        const user = users.find(u => 
            u.email === signinEmail.value && 
            u.password === signinPassword.value
        );

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "pages/welcome.html";
        } else {
            alert("Invalid email or password");
        }
    });
}

if (signupButton) {
    signupButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (!validateSignUpForm()) return;

        if (users.some(u => u.email === signupEmail.value)) {
            alert("User already exists");
            return;
        }

        users.push({
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = "../index.html";
    });
}

if (logoutButton) {
    logoutButton.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        window.location.href = "../index.html";
    });
}

if (signInLink) {
    signInLink.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "../index.html";
    });
}

if (signUpLink) {
    signUpLink.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "pages/signUp.html";
    });
}

// ======================
// Page Load Handlers
// ======================

// For index.html (login page)
if (window.location.pathname.includes("index.html") || 
    window.location.pathname === "/") {
    redirectToWelcome();
}

// For welcome.html
if (window.location.pathname.includes("welcome.html")) {
    redirectToLogin();
    const user = getCurrentUser();
    if (welcomeMessage && user) {
        welcomeMessage.textContent = `Welcome, ${user.name}!`;
    }
}