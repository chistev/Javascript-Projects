let button = document.getElementById('btn')
let output = document.getElementById("output")
let quotes = [
    `"When you die, you're gonna regret the things you dont do" - Ricky. `,
    `"You either die a hero or live long enough to see yourself become a villain" - Harvey Dent.`,
    `"The world needs bad men. We keep the other bad men at the door." - Rust Cohle`,
    `"Repetition is the mother of all skill" - Anonymous`,
    `"Albert Einstein was not a walking quote machine." - Albert Einstein`,
]

button.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote
})