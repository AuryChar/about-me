const am = document.querySelector('#am');
const others = document.querySelector('#others');
const pt = others.querySelector('#pt');
const en = others.querySelector('#en');
const sm = others.querySelector('#sm');
const back = others.querySelector('#back');
others.classList.add('desapear');

am.addEventListener('click', () => {
    am.classList.add('desapear');
    others.classList.remove('desapear');
    others.classList.add('apears')
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
    am.classList.remove('desapear')
    am.classList.add('apears');
    others.classList.remove('apears');
    others.classList.add('desapear')
})



