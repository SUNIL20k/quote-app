function quotes(){
    let randomquote=document.getElementById("randomquote")
    let mainAuthor=document.getElementById("author")
    let Author1=document.getElementById("author-1")
    let Author2=document.getElementById("author-2")
    let Author3=document.getElementById("author-3")

    
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
          return response.json();
  }).then(function(data) {
    let random=Math.floor(Math.random()*16)  
    randomquote.innerHTML=data[random].text
    mainAuthor.innerHTML=data[random].author
    
      Author1.innerHTML=data[random+1].author
      Author1.addEventListener("click",function(){
        randomquote.innerHTML=data[random+1].text
        mainAuthor.innerHTML=data[random+1].author
      })
      Author2.innerHTML=data[random+2].author
      Author2.addEventListener("click",function(){
        randomquote.innerHTML=data[random+2].text
        mainAuthor.innerHTML=data[random+2].author
      })
      Author3.innerHTML=data[random+3].author
      Author3.addEventListener("click",function(){
        randomquote.innerHTML=data[random+3].text
        mainAuthor.innerHTML=data[random+3].author
      })
  });
}
