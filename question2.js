//Raw Data:
const userData = [
  { id: 1, name: 'ram', gender: 'male', grade: 9, class: 'A', joinDate: '12-12-2020' },
  { id: 2, name: 'shyam', gender: 'male', grade: 10, class: 'B', joinDate: '12-12-2019' },
  { id: 3, name: 'sita', gender: 'female', grade: 11, class: 'C', joinDate: '12-12-2005' },
  { id: 4, name: 'rita', gender: 'female', grade: 12, class: 'D', joinDate: '12-12-2010' },
];
//1. **Find Students Who Joined After a Specific Date**  
//   - Write a function that returns all students who joined after `12-12-2010`.  
const findStudentsAfterDate = (students, date) => {
   const targetDate = new Date(date);
   return students.filter(student => new Date(student.joinDate) > targetDate);
 };
 console.log(findStudentsAfterDate(userData, '12-12-2010'));

//2. **Group Students by Class**  
//   - Create a function that groups students based on their class. The output should be an object with the class as the key.  
const groupByClass = (students) => students.reduce((acc, student) => {
   acc[student.class] = acc[student.class] || [];
   acc[student.class].push(student);
   return acc;
 }, {});
 console.log(groupByClass(userData));

//3. **Get Average Grade**  
//   - Calculate the average grade of all students.  
const getAverageGrade = (students) => students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log(getAverageGrade(userData));

//4. **Find Oldest Student**  
//   - Write a function that finds the student who has been in the school the longest based on the `joinDate`.  
const findOldestStudent = (students) => students.reduce((oldest, student) => 
   new Date(student.joinDate) < new Date(oldest.joinDate) ? student : oldest
 );
 console.log(findOldestStudent(userData));

//5. **Update Student Class**  
//   - Implement a function that updates the class of a student based on their `id`.  
const updateStudentClass = (students, id, newClass) => students.map(student => 
   student.id === id ? { ...student, class: newClass } : student
 );
 console.log(updateStudentClass(userData, 2, 'X'));
 
//6. **List Students by Gender**  
//   - Create a function that returns a list of students based on gender (`male` or `female`).  
const listStudentsByGender = (students, gender) => students.filter(student => student.gender === gender);
console.log(listStudentsByGender(userData, 'female'));

//7. **Sort Students by Join Date**  
//   - Sort the students in ascending order by their `joinDate`.  
const sortByJoinDate = (students) => [...students].sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));
console.log(sortByJoinDate(userData));

//8. **Find Student by Name**  
//   - Write a function that returns the student object given their name.  
const findStudentByName = (students, name) => students.find(student => student.name.toLowerCase() === name.toLowerCase());
console.log(findStudentByName(userData, 'sita'));

//9. **Add a New Student**  
//   - Create a function that adds a new student object to the `userData` array.  
const addNewStudent = (students, newStudent) => [...students, newStudent];
console.log(addNewStudent(userData, { id: 5, name: 'gopal', gender: 'male', grade: 8, class: 'E', joinDate: '12-12-2023' }));

//10. **Delete Student by ID**  
//   - Write a function that removes a student from the array using their `id`.  
const deleteStudentById = (students, id) => students.filter(student => student.id !== id);
console.log(deleteStudentById(userData, 3));