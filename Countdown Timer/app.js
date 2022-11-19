const maximumMinutes = 10;
let time = maximumMinutes * 60;

const countdown = document.getElementById("countdown")

setInterval(startCountdown, 1000)

function startCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    countdown.innerHTML = `${minutes}: ${seconds}`
    time--;
}