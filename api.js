console.log("API NEWS");


let button = document.querySelector("#mainButton");

button.addEventListener("click" , () => {

    let xhr = new XMLHttpRequest();
    const method = "GET";
    const apiKey = "b365a2f8a0834f58b8baaef613f541e1";
    const apiEndpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

    xhr.open(method, apiEndpoint);
    xhr.onprogress = () => {
        console.log("data is in progress");
        
    };
    xhr.onload = () => {
        // console.log("data is loading");
        let data = xhr.responseText; 
        data = JSON.parse(data);
        let articles = data.articles;
        // console.log(articles); 
        let newsHolder = document.querySelector(".newsHolder");
        articles.forEach((element) => {
            let newsBox =
         `<div class="news-card">
            <div class="news-card-image">
                <img src="${element.urlToImage}" alt="News">
            </div>
            <div class="news-card-content">
                <h2>${element.title}</h2>
                <p class="news-card-source">${element.source}</p>
                <p class="news-card-source">${element.author}</p>
                <p class="news-card-description">${element.description}</p>
                <a href="${element.url}" class="news-card-link">Read more →</a>
            </div>
        </div>`

        newsHolder.innerHTML += newsBox
        });
 
        
               
    };


    xhr.send();

})