console.log("Loops lecture");

// Loop is a block of code that repeats until unless the condition is met...
// loop is of 4 TYPES
/*1- for loop
2- while loop 
3- do-while loop 
4- foreach loop
 */

// 1- for loop 
// in loop 3 things are described: variable, condition, upgrade

// for(let i=10; i>=0; i--){
//     console.log(i);   
// }





// 2- while loop 
// let m = 0;
// while(m<=5){
//     console.log(m);
//     m++;
// }



// 3- do-while loop
// let n = 0;
// do{
//  console.log(n);
//     n++;
// }while(n<=5);


// Table Generator
let userNumber = prompt("Enter the number to generate table:");

for(let index=1 ; index<=10 ; index++){
    let product = userNumber*index;
    // console.log(product);         (answers only)
    // console.log(userNumber,"X",index ,"=",product);
    console.log(`${userNumber} X ${index} = ${product}`); 
}