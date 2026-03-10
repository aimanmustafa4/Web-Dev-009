console.log("API NEWS");


let button = document.querySelector("#mainButton");

button.addEventListener("click" , () => {

    let xhr = new XMLHttpRequest();
    const method = "GET";
    const apiKey = "write ur own api key";
    const apiEndpoint = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

    // const apiPoint = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b365a2f8a0834f58b8baaef613f541e1';

    xhr.open(method, apiPoint);
    xhr.onprogress = () => {
        console.log("data is in progress");
        
    };

    xhr.onload = () => {
        // console.log("data is loading");
        let data = xhr.responseText; 
        console.log(data);
               
    };


    xhr.send();

})