function favoriteColor() {
    let favoriteColor = prompt("What is your favorite color?");

    // Check if the favorite color is red.
    if (favoriteColor === "red") {
        return "Red is a beautiful color.";
    } else {
        return "I like your choice of color.";
    }
}

console.log(favoriteColor());
