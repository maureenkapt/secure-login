// Register new user
document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let newUsername = document.getElementById("newUsername").value;
            let newPassword = document.getElementById("newPassword").value;

            // Get existing users or create an empty array
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if username already exists
            if (users.some(user => user.username === newUsername)) {
                document.getElementById("registerMessage").innerText = "Username already taken!";
                document.getElementById("registerMessage").style.color = "red";
                return;
            }

            // Save new user
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));

            document.getElementById("registerMessage").innerText = "Registration successful! You can now login.";
            document.getElementById("registerMessage").style.color = "green";

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
    }

    //Handle login
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("message").innerText = "Invalid username or password!";
                document.getElementById("message").style.color = "red";
            }
        });
    }
});


