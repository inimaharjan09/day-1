// JavaScript methods 
// `filter()`, `find()`, `map()`, and `forEach()`:

// 1.`filter()` Task:
// Given an array of numbers, filter out all the numbers that are greater than 10.
let numbers = [2, 12, 5, 18, 7, 20, 1];
let filterNumber = numbers.filter((numbers) => {
    return numbers <= 10;
});
console.log(filterNumber);


// 2.`find()` Task:
// Given an array of objects representing students, find the student whose age is 18.
let students = [
    { name: 'John', age: 17 },
    { name: 'Alice', age: 18 },
    { name: 'Bob', age: 16 }
];
let student = students.find((student) => {
    return student.age === 18;
});
console.log(student);


// 3.`map()` Task:
// Given an array of numbers, create a new array where each number is doubled.
let numbers = [1, 2, 3, 4, 5];
let number = numbers.map((number) => {
    return number * 2;
});
console.log(number);


// 4. `forEach()` Task:
// Given an array of strings, log each string in uppercase to the console.
let words = ['apple', 'banana', 'cherry'];
words.forEach((a) => {
    console.log(a.toUpperCase());
});


// 5. Combination Task (using `filter()`, `map()`, `forEach()`):
// Given an array of numbers, filter out the numbers greater than 5, double them, and log each result using `forEach()`.
let numbers = [1, 3, 7, 9, 5, 2];
let filterNumber = numbers.filter((num) => {
    return num <= 5;
});
console.log(filterNumber);

let doubleNumbers = filterNumber.map((num) => {
    return num * 2;
});
console.log(doubleNumbers);

doubleNumbers.forEach(num => {
    console.log(num);
});


// 6. Combination Task (using `find()` and `map()`):
// Given an array of objects, find the first object where the `age` is greater than 21, and then create a new array containing the names of all the students from the found object onward.
let students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 25 }
];
let student = students.find((student) => {
    return student.age > 21;
});
console.log(student);

let newArray = students.map((student) => student.name);
console.log(newArray);