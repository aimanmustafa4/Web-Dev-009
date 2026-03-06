let number = -25;
//  number = Math.ceil(number);
// number = Math.floor(number);
// number = Math.round(number);
// number = Math.sqrt(number);
// number = Math.cbrt(number);
// number = Math.pow(number,3 );
number = Math.abs(number);
 console.log(number);


//  arrow function

function sum(a ,b ){
    console.log(a+b);  
}
sum(3,4);



const add = (a , b)=>(a+b);
console.log(add(4,5));

const square = x => x*x;
console.log(square(6));

const greet = (name)=>console.log('Hello' , name);
greet('Ali');