let add = document.getElementById('increment')
let decrease = document.getElementById('decrement')
let int = document.getElementById('number')
let integer = 0

add.addEventListener('click', function () {
    integer++
    int.innerHTML = integer
})

decrease.addEventListener('click', function () {
    integer -=1
    int.innerHTML = integer
})