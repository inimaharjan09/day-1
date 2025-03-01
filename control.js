//if-else statement
let age1=18;
if (age >= 18) { 
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//multipe complarison
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//custom named condition
let age = 25;
let category;

if (age < 18) {
    category = "jun-tic"; // Junior Ticket
} else if (age >= 18 && age <= 40) {
    category = "reg-tic"; // Regular Ticket
} else {
    category = "sen-tic"; // Senior Ticket
}

console.log("Category:", category);
