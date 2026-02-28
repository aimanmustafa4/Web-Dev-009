console.log("Operators AND Conditional statements");
// Assignment operators;
// += , -= , *= , /= , %=


// 1-    +=
let a = 10;
console.log(a);

a += 5;    //increment/deposit. (+=)
console.log(a);

// 2- -=
let b = 25;
console.log(b);

b -= 10;   //decrement/ withdrawal (-=)
console.log("the value of b after operator is :" ,b);


a *= 10;
console.log(a);


b /= 3;
console.log(b);


let c = 8;
c %= 2;
console.log(c);

// comparison/relational (< , > , <= , >= , == , === , !=)

let x = 15;
let y = 29;
console.log(x < y);
console.log(x > y);
console.log(x <= 15);
console.log(y >= 30);
console.log(x == "15");  //== only focus on values
console.log(x === "15");  // === focus on both i.e values and datatypes
console.log(y != x);
console.log(y != 29);

// Logical operators
//  &&(AND OPERATORS) , ||(OR OPERATORS)  , !(NOT OPERATOR)
console.log("Logical operators");

let m = 34;
let n = 90;
console.log( m>n && m==34);
console.log( m>n || m==34);
console.log(!(m==n));

let isLogin = true;
console.log(!(isLogin));

// conditional statements

// if(----condition---){
// console.log()
// }else{
 // console.log()
// }


// simple conditional statements
let age = 10;
if(age >= 18){
    console.log("you are eligible for test");
    
}else{
    console.log("u are not eligible");
    
}

// elseif conditional statements

let percentage = 94;
if(percentage >= 90){
    console.log("u 1st"); 
}else if(percentage >= 80){
    console.log("u 2nd");
}else if(percentage>=70){
    console.log("u 3rd"); 
}else{
    console.log("u fail");
}