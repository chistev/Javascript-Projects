const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener("submit", (e)=>{
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push("Name is required")
    }

    if (password.value.length <= 7){
        messages.push("Password must be at least 8 characters long")
    }

    if (messages.length > 0){
        e.preventDefault()
        error.innerHTML = messages.join(',')
    }
    
})