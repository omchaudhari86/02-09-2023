function getGrade() {
    let grade = prompt("What is your grade in school?");
    grade = parseInt(grade);

    // Check if the grade is valid.
    if (grade < 1 || grade > 12) {
        return "Invalid grade.";
    } else {
        return "Your grade is " + grade;
    }
}

console.log(getGrade());
