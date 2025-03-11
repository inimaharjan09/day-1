// const personName='inima';
// const age = 25;
// const address='new road';
// const isMarried = false;

// const wholeSentence =   `${personalName} ${age} ${address} ${isMarried} hello`;
// const wholeSentence=`${personName.toUppercase()} ${age} ${address.toUpperCase()} ${isMarried} hello CANON`;
// console.log(wholeSentence);

// const num ='100';
// const m='9.5';
// console.log(Number(m) +100);
// console.log(Number(num) + 100);
// console.log(Number.parseInt(num));

// const person ={
//     name:'inima',
//     age:'24'
// }
// const car={
//     brand: 'hp',
//     price: '10k'
// }
// const pc={
//     brand:'dell',
//     price:'10k'
// }
// const mobile = {
//     brand: 'iphone',
//     price:'90k'
// }
// const product ={
//     name: 'abc',
//     price: '20k'
// }

//primitive types string number boolean undefined null
// const rating= 7.555;
// console.log(Math.PI);
// console.log(Math.cbrt(27));
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,4));
// console.log(Math.max(22, 44, 55, 99, 66));
// console.log(Math.min(22, 44, 55, 11, 99, 66));

// const random = Math.random() * 9 +1;
// console.log(Math.floor(random));

// const isLogin=true;
// const some=false;
// console.log(isLogin);

// let a=100;
// let b=90;
// const c=a++; //a=a+1
// b--;
// console.log(c);
// console.log(b);
// console.log(a+b/90);

// const value=a>b ? 'helllo':'hey';
// console.log(value);

// const age=90;
// const ageValue = age < 20 ? 'junior' : age > 50 ? 'senior': 'regular';
// console.log(ageValue);

// if(a < b){
//     console.log('hello');
// }else if(a>b){
//     console.log('hey');
// }
// else{
//     console.log('sello');
// }

const salary=250000;
const expenses=145000;
if(salary>expenses){
    console.log(`you hav send ${salary-expenses} this month`);
} else if(expenses<salary){
    console.log(`you have lost ${expenses-salary} this month`);
}
else{
    console.log(`your balance havent change`);
}

const medal = 5;
switch(medal){
    case 1:
        console.log('you got gold medal');
        break;
    case 2:
        conaole.log('u got silver medal');
        break;
    case 3:
        console.log('u got bronze medal');
        break;
    default:
        console.log('please try again');
}