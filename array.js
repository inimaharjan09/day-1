// const persons = ['inima', 'sohan', 'asmita', 'sita'];
// persons.forEach((a) => {
//     console.log(a.toUpperCase()); 
// });

// persons.map((a)=>{ });

// persons.find((a)=>{ });

// persons.filter((a)=>{ });

// persons.reduce(()=>{});

// const noReturn =() =>{
//     console.log('hello');
// }
// const greet = () => {
//     return 'hello how r u?';
// }
// const m = greet;


// const numbers = [11, 22, 33, 44, 55, 66];
// let sum = 0;
// numbers.forEach((num) => {
//     sum += num;
// });
// console.log(sum);

// const persons = ['inima', 'sohan', 'asmita', 'sita'];
// const some= persons.map((a)=> {
//     return a;
// });
// console.log(some);

// const numbers = [11, 22, 33, 44, 55, 66];
// const greaterThan40 = numbers.find((a)=> {
//     return a>60;
// });
// console.log(greaterThan40);

// const numbers=[11,22,33,99,100,44];
// const red=numbers.reduce((a, b)=> {
//     // console.log(`hello: ${a} hello: ${b}`);
//     // return 6;
//     // return a + b;
//     return b<a ? b:a;
// });
// console.log(red);


const person={
    name: 'inima',
    age:26,
    address: 'chamati',
    hobby:['photography', 'coding', 'reading'] 
};
//new key value add
person.job= 'developer';

//update
person.age=24;

//delete
delete person.hobby;

console.log({...person, some: 'things'});


const colors=['red','blue'];
const newColors=['green','black','brown', ...colors];
console.log(newColors);

const userData=[
    {id:1, name:'inima', gender:'female', age:24},
    {id:2, name:'sohan', gender:'male', age:24},
    {id:3, name:'rebika', gender:'female', age:26},
    {id:4, name:'gyan', gender:'male', age:28}
];
const findData =userData.find((user)=>{
    return user.id === 2;
});
console.log(findData);