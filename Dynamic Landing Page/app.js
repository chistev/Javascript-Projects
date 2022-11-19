const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus")

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds()

//set AM or PM
const amPm = hour >= 12 ? "PM" : "AM"

// 12hr Format

hour = hour % 12 || 12;

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`

setTimeout(showTime, 1000)

}

// Adding zero

function addZero(n){
    return (parseInt(n, 10) < 10 ? "0" : "") + n
}

// set background and greeting

function setGreetingTheme() {
    let today = new Date(),
    hour = today.getHours()

    if(hour < 12){
        document.body.style.backgroundImage = "url('images/morning.jpg')"
        greeting.textContent = "Good Morning,"
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('images/afternoon.jpg')"
        greeting.textContent = "Good Afternoon,"
    }
    else{
        document.body.style.backgroundImage = "url('images/evening.jpg')"
        greeting.textContent = "Good Evening,"
    }
}

function getName(){
    if(localStorage.getItem("name") === null){
        name.textContent = "{Enter Name}"
    }
    else{
        name.textContent = localStorage.getItem("name")
    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem("name", e.target.innerText) 
            name.blur()
        }
    }
    else{
        localStorage.setItem("name", e.target.innerText)
    }
}

function getFocus(){
    if(localStorage.getItem("focus") === null){
        focus.textContent = "{Enter Plan}"
    }
    else{
        focus.textContent = localStorage.getItem("focus")
    }
}

function setFocus(e){
    if(e.type==="keypress"){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem("focus", e.target.innerText) 
            focus.blur()
        }
    }
    else{
        localStorage.setItem("focus", e.target.innerText)
    }
}


name.addEventListener("keypress", setName)
name.addEventListener("blur", setName) //when you click anywhere else on the screen
focus.addEventListener("keypress", setFocus)
focus.addEventListener("blur", setFocus)

showTime()
setGreetingTheme()
getName()
getFocus()