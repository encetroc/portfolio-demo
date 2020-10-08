let bg = document.getElementById('bg')
let moon = document.getElementById('moon')
let mountain = document.getElementById('mountain')
let road = document.getElementById('road')
let text = document.getElementById('text')

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    console.log(scrollY)

    if (scrollY < 475) {
        bg.style.top = scrollY*0.5 + 'px'
        moon.style.left = scrollY*0.5 + 'px'
        mountain.style.top = -scrollY*0.05 + 'px'
        road.style.top = scrollY*0.5 + 'px'
        text.style.top = scrollY*1 + 'px'
    }
})