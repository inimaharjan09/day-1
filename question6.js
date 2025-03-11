//Task 1: Destructuring an Object Inside an Array
//Objective: Understand how to destructure objects inside arrays.

//1. Given the following array of objects, destructure the `name` and `age` properties from the first object and print them:

const people = [
  { name: 'John', age: 28, city: 'New York' },
  { name: 'Jane', age: 32, city: 'Los Angeles' },
  { name: 'Tom', age: 25, city: 'Chicago' }
];
const[{ name, age}]=people;
console.log(name, age);

//Task 2: Destructuring with Default Values
//Objective: Learn how to assign default values during destructuring.

//1. Given the following array of objects, destructure the `name` and `age` properties from the second object. If `age` is missing, assign it a default value of 30.

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob' },
  { name: 'Charlie', age: 28 }
];
const [, { name: userName,
  age: userAge=30
}]= users;
console.log(userName, userAge);

//Task 3: Destructuring with Rest Operator
//Objective: Understand how to use the rest operator with destructuring.

//1. Given the following array of objects, destructure `name` and `age`, and collect the remaining properties into a variable called `otherDetails` for each object:
const employees = [
  { name: 'John', age: 30, department: 'Engineering', salary: 5000 },
  { name: 'Jane', age: 25, department: 'Marketing', salary: 4000 },
  { name: 'Tom', age: 35, department: 'Sales', salary: 5500 }
];
employees.forEach(({ name, age, ...otherDetails }) => {
  console.log(name, age, otherDetails);
});

//Task 4: Nested Destructuring
//Objective:** Learn how to destructure nested objects inside an array.

//1. Given the following array, destructure the `firstName` and `lastName` from the `name` object, and `age` from the object inside the array:
const students = [
  { name: { firstName: 'Alice', lastName: 'Johnson' }, info: { age: 21, grade: 'A' } },
  { name: { firstName: 'Bob', lastName: 'Smith' }, info: { age: 23, grade: 'B' } },
  { name: { firstName: 'Charlie', lastName: 'Brown' }, info: { age: 22, grade: 'A' } }
];
students.forEach(({ name: { firstName, lastName }, info: { age } }) => {
  console.log(firstName, lastName, age);
});

//Task 5: Swapping Elements Using Destructuring
//Objective: Use destructuring to swap values between two variables.

//1. Swap the `age` values of the first two objects in the following array using destructuring:
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
[people[0].age, people[1].age] = [people[1].age, people[0].age];
console.log(people);

//Task 6: Destructuring in Function Parameters
//Objective: Understand how to pass an array of objects to a function and destructure inside the function parameters.
//1. Write a function `getUserDetails` that takes an array of objects, destructures the `name` and `age` properties from each object, and logs them to the console.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const getUserDetails = (users) => {
  users.forEach(({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  });
};
getUserDetails(users);