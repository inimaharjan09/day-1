// Here are a few JavaScript tasks based on the given userData array:
// Task 1: Filter Male Students
// Write a function that filters out all male students from the array.
// Task 2: Find Student by Name
// Create a function that takes a name as input and returns the corresponding student object if found.
// Task 3: Count Gender
// Write a function that counts the number of male and female students separately and returns an object like:
const userData = [
    { id: 1, name: 'ram', gender: 'male', grade: 9 },
    { id: 2, name: 'shyam', gender: 'male', grade: 10 },
    { id: 3, name: 'sita', gender: 'female', grade: 11 },
    { id: 4, name: 'rita', gender: 'female', grade: 12 },
];
const filterMaleStudents= userData.filter((data)=>{
    return data.gender === 'male';
});
console.log(filterMaleStudents); 
