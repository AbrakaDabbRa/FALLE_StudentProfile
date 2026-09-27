// ============================================================
// Login page logic
// ============================================================

// If someone is ALREADY logged in and lands on this page anyway
// (e.g. they typed the URL directly), just send them straight to
// the profile instead of making them log in again.
auth.onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = "index.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let errorBox = document.getElementById("loginError");

    errorBox.classList.add("hidden");

    // Basic validation before even asking Firebase
    if (email === "" || password === "") {
        errorBox.textContent = "Please enter both your email and password.";
        errorBox.classList.remove("hidden");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Successful login — go to the protected profile page
            window.location.href = "index.html";
        })
        .catch(function (error) {
            // Don't show Firebase's raw technical error text —
            // show a simple message instead, matching the rubric's example.
            errorBox.textContent = "Invalid student ID or password.";
            errorBox.classList.remove("hidden");
        });
});
