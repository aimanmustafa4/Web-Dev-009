console.log(window);
console.log(document);

// old ways 
let firstHeading = document.getElementsByClassName("heading");
firstHeading[0].innerHTML = "Web-Dev-089"; 
console.log(firstHeading);


let para = document.getElementById("para");
para.innerHTML = "nskdjnfwsdbfsndkvjfndsifuhrejnfk sdfkrergrebrg erl g";
console.log(para);

// NEW WAYS

let buttonPrime = document.querySelector(".btn1");
buttonPrime.innerHTML = "Add Here"
console.log(buttonPrime);

let buttonSecond = document.querySelectorAll("#btn2");
buttonSecond[0].innerHTML = "Review";
console.log(buttonSecond);