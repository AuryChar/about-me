const am = document.querySelector('#am');
const others = document.querySelector('#others');
const pt = others.querySelector('#pt');
const en = others.querySelector('#en');
const sm = others.querySelector('#sm');
const back = others.querySelector('#back');
const principal2 = document.querySelector('.principal');
others.style.display = 'none'

am.addEventListener('click', () => {
    am.style.display = 'none'
    others.style.display = 'flex'
})

pt.addEventListener('click', () => {
    window.location.href = 'pt.html';
})
en.addEventListener('click', () => {
    window.location.href = 'en.html';
})
sm.addEventListener('click', () => {
    window.location.href = 'social.html';
})
back.addEventListener('click', () => {
    am.style.display = 'flex'
    others.style.display = 'none'
})



