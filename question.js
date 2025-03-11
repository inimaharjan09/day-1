// Exercise 1: Using `Math.random()`
// Generate a random number between 0 (inclusive) and 1 (exclusive) and log it to the console.
// const randomNumber = Math.random();
console.log("randomNumber:",Math.random());


// Exercise 2: Using `Math.floor()`
// Given a number, use `Math.floor()` to round it down to the nearest integer.
// For example, round `12.7` down to `12`.
console.log("math floor:", Math.floor(12.7)); 


// Exercise 3: Using `Math.ceil()`
// Given a number, use `Math.ceil()` to round it up to the nearest integer.
// For example, round `4.1` up to `5`.
console.log("math ceil:", Math.ceil(4.1));


// Exercise 4: Using `Math.max()` and `Math.min()`
// Create two variables and assign them random numbers between 1 and 10. Use `Math.max()` to find the larger number and `Math.min()` to find the smaller number.
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const maxNumber = Math.max(num1, num2);
const minNumber = Math.min(num1, num2);
console.log("random no:", num1, num2);
console.log("larger no(Math.max):", maxNumber);
console.log("smaller no(Math.min):", minNumber);


// Exercise 5: Using `Math.pow()`
// Raise `2` to the power of `3` using `Math.pow()`. Log the result to the console.
console.log("power:", Math.pow(2,3));


// Exercise 6: Using `Math.sqrt()`
// Find the square root of `49` using `Math.sqrt()` and log it to the console.
console.log("square root:", Math.sqrt(29));


// Exercise 7: Using `Math.abs()`
// Find the absolute value of `-15` using `Math.abs()` and log the result.
console.log("absolute value:", Math.abs(-15));


// Exercise 8: Using `Math.round()`
// Given a decimal number like `6.4`, use `Math.round()` to round it to the nearest integer.
// Test with different numbers like `3.6` and `8.2`.
console.log("math round(6.4):", Math.round(6.4));
console.log("math round(3.6):", Math.round(3.6));
console.log("math round(8.2):", Math.round(8.2));


// Exercise 9: Using `Math.sin()` and `Math.cos()`
// Pick an angle in radians (e.g., `Math.PI / 4` for 45 degrees) and calculate both the sine and cosine of that angle using `Math.sin()` and `Math.cos()`.
// Log both results.
// Exercise 9: Using Math.sin() and Math.cos()
const angle = Math.PI / 4;
const sineValue = Math.sin(angle);
const cosineValue = Math.cos(angle);
console.log("sin:", sineValue);
console.log("cos:", cosineValue);


// Exercise 10: Using `Math.PI`
// Use `Math.PI` to calculate the circumference of a circle with a radius of 7.
const r = 7;
const circumference = 2 * Math.PI * r;
console.log("circle:", circumference);



// 1. Check if a number is even or odd.
// Write a program that checks if a given number is even or odd and prints `"Even"` or `"Odd"`.
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Check if a number is positive, negative, or zero.
// Given a number, print `"Positive"`, `"Negative"`, or `"Zero"`.  
let number = -7; // You can change this value
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 3. Check if a person is eligible to vote  
// If the person’s age is **18 or older**, print `"Eligible to vote"`, otherwise print `"Not eligible to vote"`. 
let age = 20; // You can change this value
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
} 


// 4. Find the greatest of two numbers  
// Given two numbers, print the greater one. If they are equal, print `"Both are equal"`.  
let h = 25;
let i = 30;
if (h > i) {
    console.log(h);
} else if (i > h) {
    console.log(i);
} else {
    console.log("Both are equal");
}


// 5. Find the greatest of three numbers  
// Given three numbers, determine the greatest and print it.  
let a= 25;
let b = 40;
let c = 20;
if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}


// 6. Check if a character is a vowel or consonant  
// Given a single character (a, e, i, o, u), print `"Vowel"`, otherwise print `"Consonant"`.  
let char = 'E'; // You can change this value
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


// 7. Check if a number is a multiple of 5  
// If a given number is divisible by 5, print `"Multiple of 5"`, otherwise print `"Not a multiple of 5"`. 
let x = 25;
if (x % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a multiple of 5");
} 


// 8. Determine the grade based on marks.  
// Given a student’s marks:  
// - `90+` → `"A"`  
// - `80-89` → `"B"`  
// - `70-79` → `"C"`  
// - `60-69` → `"D"`  
// - `<60` → `"Fail"`  
let marks = 82;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else if (marks >= 60) {
    console.log("D");
} else {
    console.log("Fail");
}


// 9. Check if a year is a leap year  
// A year is a leap year if:  
// - It is divisible by **4** and not by **100**, or  
// - It is divisible by **400**.  
// Print `"Leap Year"` or `"Not a Leap Year"`.  
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 10. Check if a person is an adult, teenager, or child  
// - Age **≥ 18** → `"Adult"`  
// - Age **13-17** → `"Teenager"`  
// - Age **<13** → `"Child"`  
let y = 16;
if (y >= 18) {
    console.log("Adult");
} else if (y >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}