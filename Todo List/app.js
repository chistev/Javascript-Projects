const form = document.getElementById('form')
const input = document.getElementById('input')
const tasks = document.getElementById('tasks')

form.addEventListener('submit', (e)=>{
    e.preventDefault() //this stops it from refreshing the page.

    const task = input.value

    if (!task){
        alert("input a task")
        return
    }

    const task_element = document.createElement("div")
    task_element.classList.add("task")

    const task_contact_element = document.createElement("div")
    task_contact_element.classList.add("content")
    task_contact_element.innerHTML = task

    task_element.appendChild(task_contact_element)

    tasks.appendChild(task_element)
    
})