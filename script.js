
let container = document.querySelector('.container')
let text = document.querySelector('#text')

let totalTime = 7500
let breatheTime = (totalTime / 5) * 2
let holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = 'Hold!'

        setTimeout(() => {
            text.innerHTML = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)