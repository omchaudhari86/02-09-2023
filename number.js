function isEven() {
    // Generate a random number between 1 and 100.
    let number = Math.floor(Math.random() * 100) + 1;

    // Check if the number is even.
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}

console.log(isEven());
