//Raw Data:
const students = [
  { id: 1, name: 'Ram', gender: 'male', grade: 9 },
  { id: 2, name: 'Shyam', gender: 'male', grade: 10 },
  { id: 3, name: 'Sita', gender: 'female', grade: 11 },
  { id: 4, name: 'Rita', gender: 'female', grade: 12 },
  { id: 5, name: 'Hari', gender: 'male', grade: 8 },
  { id: 6, name: 'Gita', gender: 'female', grade: 7 },
];
//1. **Find Top Grader**  
//- Identify the student with the highest grade. 
const findTopGrader = (students) => students.reduce((top, student) => (student.grade > top.grade ? student : top));
console.log(findTopGrader(students));

//2. **Group Students by Gender**  
//   - Convert the array into an object grouping students by gender.
const groupByGender = (students) => students.reduce((group, student) => {
   group[student.gender] = group[student.gender] || [];
   group[student.gender].push(student);
   return group;
 }, {});
 console.log(groupByGender(students)); 
 
//3. **Calculate Average Grade**  
  // - Compute the average grade of all students.  
  const calculateAverageGrade = (students) => students.reduce((sum, student) => sum + student.grade, 0) / students.length;
  console.log(calculateAverageGrade(students));

//  4. **Add a New Student**  
  // - Write a function to add a new student to the array.
  const addStudent = (students, newStudent) => [...students, newStudent];
  console.log(addStudent(students, { id: 7, name: 'Krishna', gender: 'male', grade: 10 }));
  
//5. **Remove a Student by ID**  
  // - Implement a function that removes a student based on their `id`. 
  const removeStudentById = (students, id) => students.filter(student => student.id !== id);
  console.log(removeStudentById(students, 3));

//6. **Update Student's Grade by Name**  
  // - Update the grade of a student when given their name.
  const updateGradeByName = (students, name, newGrade) => students.map(student => 
   student.name === name ? { ...student, grade: newGrade } : student
 );
 console.log(updateGradeByName(students, 'Ram', 11));
 
//7. **Check if All Students Passed**  
  // - Assume a passing grade is `10` or higher, return `true` if all students passed.
  const allStudentsPassed = (students) => students.every(student => student.grade >= 10);
  console.log(allStudentsPassed(students));

//8. **Find Students in a Specific Grade**  
  // - Return all students who belong to a given grade.
  const findStudentsByGrade = (students, grade) => students.filter(student => student.grade === grade);
  console.log(findStudentsByGrade(students, 10)); // S

//9. **Sort Students by Name Alphabetically**  
// - Sort the array in ascending order based on students’ names.  
  const sortStudentsByName = (students) => [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortStudentsByName(students));

//10. **Convert Array to Object (ID as Key)**  
//- Transform the array into an object where the `id` is the key.  
const convertArrayToObject = (students) => students.reduce((obj, student) => {
   obj[student.id] = student;
      return obj;
    }, {});
    console.log(convertArrayToObject(students));