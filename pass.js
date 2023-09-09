function login() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    // Check if the username and password are correct.
    if (username === "admin" && password === "password") {
        return "Login successful.";
    } else {
        return "Login failed.";
    }
}

console.log(login());
