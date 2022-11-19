const arrows = document.querySelectorAll(".fa-circle-arrow-right")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
    const numberOfItems = movieLists[i].querySelectorAll("img").length
    let clickCounter = 0
    arrow.addEventListener("click", ()=>{
        const ratio = Math.floor(window.innerWidth/270) //270 is the width of image used in our css
        clickCounter++
        if(numberOfItems - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`
        }
        else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0
        }
        
    })


});

const toggleBall = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container, .movie-list-item, .navbar-container, .sidebar, .sidebar i, .toggle")

toggleBall.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })

    toggleBall.classList.toggle("active")
})




