const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-items')
    const navLinks = document.querySelectorAll('.nav-items li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }

            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s` /*0.5s is the amount of time the animation would last. division by 7 + 2 is the 
         * inital delay, it can be set to anything.*/
            }

        })

        burger.classList.toggle('toggle')
    })
}

navSlide()