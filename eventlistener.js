console.log("Event Listener");
 let para = document.querySelector("#para");

// node.event = () =>{
//      }

para.onclick = () => {
    console.log('paragraph is written');
    let a =776;
    a++;
    console.log(a);
    
}


let head = document.querySelector(".heading");

head.onmouseover = () => {
    console.log("heading check");
    
}


let btn = document.querySelector("#btn1");
btn.onclick = () =>{
    console.log("clicked");
    
}


// alert("check ur gmail security");
// confirm("u really want to check the website");




let age = prompt("What is ur age");

if(age < 18){
    alert("Warning :u are teenage");
}else if (age = 18){
    confirm("u are 18 years old");
    
}else if(age > 36){
    confirm(" this is for 18 year old student. u really want to join it?")
}else{
    console.log("nothing");
    
}