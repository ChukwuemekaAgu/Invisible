function signUp(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    if (localStorage.getItem(username) || localStorage.getItem(email)) {
        displayMessage("Username or email already exists. Please choose another.");
        return;
    }

    const userData = { username, email, password };
    localStorage.setItem(username, JSON.stringify(userData));
    localStorage.setItem(email, username); 

    displayMessage("Sign-up successful! Redirecting to login...");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

function displayMessage(message) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = message;
    setTimeout(() => {
        messageBox.textContent = "";
    }, 3000);
}
