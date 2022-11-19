const text = [`China's leader Xi Jinping has moved into a historic third term in power, as he revealed a new leadership team stacked with loyalists.`,
    `On Sunday the Chinese Communist Party (CCP) unveiled its Politburo Standing Committee, with Mr Xi re-elected as general secretary.`,
    `Observers say the line-up, handpicked by Mr Xi, shows he prizes loyalty over expertise and experience.`,
    `The unveiling came after a week-long party congress in the capital.`,
    `More than 2,300 delegates elected various leadership groups and gave Mr Xi a new mandate over the party, in a break from decades-long tradition.`,
    `No other party leader besides CCP founder Mao Zedong has ever served a third term.`,
    `Leaders of China's allies - Russia's Vladimir Putin and North Korea's Kim Jong-un - were among the first to send their congratulations.`,
    `On Sunday, a day after the congress closed, Mr Xi strode onto a stage in Beijing's Great Hall of the People trailed by the six other men of the Politburo Standing Committee.`,
    `The group sits at the very top of the CCP and is the Chinese equivalent of the presidential cabinet.`,
    `After introducing the team, he gave a short speech thanking the party for their trust in them, vowing to achieve the "great rejuvenation of the Chinese nation on all fronts".,`
]

const loremform = document.querySelector(".lorem-form")
const numberOfParagraphs = document.getElementById("numberOfParagraphs")
const rangeOfParagraphs = document.getElementById("rangeOfParagraphs")
const result = document.querySelector(".lorem-text")

numberOfParagraphs.addEventListener('input', syncParagraphSelectors)
rangeOfParagraphs.addEventListener('input', syncParagraphSelectors)

function syncParagraphSelectors(e) {
    const value = e.target.value
    console.log(value)
    numberOfParagraphs.value = value
    rangeOfParagraphs.value = value
}

loremform.addEventListener('submit', e => {
    e.preventDefault()
    const value = parseInt(numberOfParagraphs.value)
    let generatedText = text.slice(0, value)
    generatedText = generatedText.map(item => `<p class="result">${item}</p>`).join("") /*this refers to the .result in the css stylessheet. it is different from the result that links to .lorem-text here*/
    result.innerHTML = generatedText
})


