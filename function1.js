function User(name, age){
    this.name='inima';
    this.age=24;
    this.greet=()=>{
        console.log('hello code');
    }
}
const user1= new User('canon', 30);
const user2= new User('sony', 30);
user1.greet();
user2.greet();
console.log(user1,user2);

function Car(brand, color){
    this.brand='hp';
    this.color='silver';
}
const Car1=new Car('sony','red');
const Car2=new Car('tp','white');
console.log(Car1,Car2);

function Bank(company,location){

}

const greet=()=>{
    console.log('hello coding');
}
greet();

const addSum=()=> 9+9;
const add=()=>{
    const s=900;
    return 9*8;
};
const v=addSum();
console.log(v);



const addTwoNumber =(a,b)=>{
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    else{
        return 'please provide valid Number';
    }
};
const some=addTwoNumber(10000, 1900);
console.log(some);
// console.log(typeof 90 === 'number');

const sumArray=(num)=>{
    return num.reduce((sum, num)=>
    sum+ num);
}
console.log(sumArray([1,2,3,4,5,6,7]));