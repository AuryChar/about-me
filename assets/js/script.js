const am = document.querySelector('#am');
const others = document.querySelector('#others');
const back = others.querySelector('#back');
others.style.display = 'none'

am.addEventListener('click', () => {
    am.style.display = 'none';
    others.style.display = 'flex';
})

back.addEventListener('click', () => {
    am.style.display = 'flex'
    others.style.display = 'none'
})



