// const greet = (a,b)=>{
//     return a+b;
// }
// const m = greet(99, 100);
// console.log(m);

// const age = 100;
// const some =()=>{
//     // const age=90;
//     console.log(age);

// }
// some();

//class
class User{

    //properties
    // personName='inima maharjan';
    // address='chamati';

    constructor(personName,age){
        this.personName=personName;
        this.age=age;
    }

    //methods
    reading(){
        console.log(`${this._personName} is reading a book`);
        }

    sleeping(){
        console.log(`${this._personName} is sleeping`);
     }
     get someName (){
        return 'hello world';
     }
}
const user1 = new User('sohan', 24);
// console.log(user1.personName);
// user1.reading();
console.log(user1._personName);
