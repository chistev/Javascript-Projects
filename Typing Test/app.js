const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random"
const quoteDisplay = document.getElementById("quote-display")
const quoteInput = document.getElementById("quote-input")
const timer = document.getElementById("timer")
let correct = true


function getRandomQuote(){
   return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    quoteDisplay.innerHTML = ""
    quote.split("").forEach(character =>{
        const characterSpan = document.createElement("span")
        characterSpan.innerHTML = character
        quoteDisplay.appendChild(characterSpan)
    })
    quoteInput.value = null
    startTimer()
}

renderNewQuote()

quoteInput.addEventListener("input", ()=>{
    const arrayQuote = quoteDisplay.querySelectorAll("span")
    const arrayValue = quoteInput.value.split("")
    arrayQuote.forEach((characterSpan, index)=>{
        const character = arrayValue[index]

        if (character == null){
            characterSpan.classList.remove("correct")
            characterSpan.classList.remove("incorrect")
            correct = false
        }
        else if(character === characterSpan.innerHTML){
            characterSpan.classList.add("correct")
            characterSpan.classList.remove("incorrect")
            correct = true
        }
        else{
            characterSpan.classList.add("incorrect")
            characterSpan.classList.remove("correct")
            correct = false
        }
    })

    if(correct){
        renderNewQuote()
    }
})


let startTime
function startTimer(){
    timer.innerHTML = 0
    startTime = new Date()
    setInterval(()=>{
       timer.innerHTML = getTimerTime()
    }, 1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}