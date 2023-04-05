const jokeEl =document.getElementById('joke')
const btn = document.getElementById('joke-btn')


btn.addEventListener("click",generateJoke)

generateJoke()

function generateJoke(){
    const config ={
        headers:{"Accept":'application/json'
    }
} 

    fetch('https://icanhazdadjoke.com',config)
    .then(res=>res.json())
    .then(data=>{
        jokeEl.innerHTML=data.joke
    })
  
}