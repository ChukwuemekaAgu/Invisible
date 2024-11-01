function login(event) {
    event.preventDefault();
    const identifier = document.getElementById("usernameOrEmail").value;
    const password = document.getElementById("password").value;

    const username = localStorage.getItem(identifier) || identifier;
    const userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        displayMessage("Login successful! Redirecting to dashboard...");
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        displayMessage("Invalid username/email or password.");
    }
}

function displayMessage(message) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = message;
    setTimeout(() => {
        messageBox.textContent = "";
    }, 3000);
}
