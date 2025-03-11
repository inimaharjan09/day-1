// arithmetic operator
let a = 10, b = 3;
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1 (Modulus - Remainder)

//assigment operator
let x=5;
x-=3;
console.log(x);

//comparsion operator
let num1 = 10, num2 = 20;
console.log(num1 > num2);  // false
console.log(num1 < num2);  // true
console.log(num1 >= 10);   // true
console.log(num1 == "10"); // true (compares only value)
console.log(num1 === "10");

//logical operator
let age = 25;
console.log(age > 18 && age < 30); // true (AND operator)
console.log(age > 18 || age > 40); // true (OR operator)
console.log(!(age > 18)); // false (NOT operator)

//ternary operator
let canDrive = age == 18 ? "Yes" : "No";
console.log(canDrive); // "Yes"
