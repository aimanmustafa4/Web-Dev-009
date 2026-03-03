console.log("Functions Today");


// Function works as a packet jis me variable ko store or use kia jata he
// function store data in the form of Parameters and arguments
/**
 * function ki 2 types hoti hai
 * 1-simple function
 * 2- arrow function
 * 
 * 
 * function banany k 2 tareeky
 * 1 - to define it
 * 2- to call it
 */

// 1st
function salam(userName) {
    console.log("salam ", userName);
}
salam("Ali");


// 2nd
function access(userNam, userAge) {
    console.log(`hy my name is ${userNam} and my age is ${userAge}`);
}
access("Ahmar", 12)


// 3rd as function

function getTable(userNumber) {
    for (let index = 1; index <= 10; index++) {
        let product = userNumber * index;
        console.log(`${userNumber} X ${index} = ${product}`);
    }
}
getTable(9);