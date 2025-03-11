Here are a few tasks related to object array destructuring that you can assign to your students:

### Task 1: Destructuring an Object Inside an Array
**Objective:** Understand how to destructure objects inside arrays.

**Instructions:**
1. Given the following array of objects, destructure the `name` and `age` properties from the first object and print them:
```javascript
const people = [
  { name: 'John', age: 28, city: 'New York' },
  { name: 'Jane', age: 32, city: 'Los Angeles' },
  { name: 'Tom', age: 25, city: 'Chicago' }
];
```

### Task 2: Destructuring with Default Values
**Objective:** Learn how to assign default values during destructuring.

**Instructions:**
1. Given the following array of objects, destructure the `name` and `age` properties from the second object. If `age` is missing, assign it a default value of 30.
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob' },
  { name: 'Charlie', age: 28 }
];
```

### Task 3: Destructuring with Rest Operator
**Objective:** Understand how to use the rest operator with destructuring.

**Instructions:**
1. Given the following array of objects, destructure `name` and `age`, and collect the remaining properties into a variable called `otherDetails` for each object:
```javascript
const employees = [
  { name: 'John', age: 30, department: 'Engineering', salary: 5000 },
  { name: 'Jane', age: 25, department: 'Marketing', salary: 4000 },
  { name: 'Tom', age: 35, department: 'Sales', salary: 5500 }
];
```

### Task 4: Nested Destructuring
**Objective:** Learn how to destructure nested objects inside an array.

**Instructions:**
1. Given the following array, destructure the `firstName` and `lastName` from the `name` object, and `age` from the object inside the array:
```javascript
const students = [
  { name: { firstName: 'Alice', lastName: 'Johnson' }, info: { age: 21, grade: 'A' } },
  { name: { firstName: 'Bob', lastName: 'Smith' }, info: { age: 23, grade: 'B' } },
  { name: { firstName: 'Charlie', lastName: 'Brown' }, info: { age: 22, grade: 'A' } }
];
```

### Task 5: Swapping Elements Using Destructuring
**Objective:** Use destructuring to swap values between two variables.

**Instructions:**
1. Swap the `age` values of the first two objects in the following array using destructuring:
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
```

### Task 6: Destructuring in Function Parameters
**Objective:** Understand how to pass an array of objects to a function and destructure inside the function parameters.

**Instructions:**
1. Write a function `getUserDetails` that takes an array of objects, destructures the `name` and `age` properties from each object, and logs them to the console.
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
```

---

These tasks will give your students hands-on practice with object array destructuring in various contexts and scenarios.