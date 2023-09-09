function isAdult() {
    let age = prompt("What is your age?");
    age = parseInt(age);

    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are a minor.";
    }
}

console.log(isAdult());
