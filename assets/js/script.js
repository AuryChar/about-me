let am = document.querySelector('#am');
let pt = document.querySelector('#pt');
let en = document.querySelector('#en');
pt.style.display = 'none';
en.style.display = 'none';

am.addEventListener('click', () => {
    am.style.display = 'none';
    en.style.display = 'block';
    pt.style.display = 'block';
})

pt.addEventListener('click', () => {
    window.location.href = 'pt.html';
}) 
en.addEventListener('click', () => {
    window.location.href = 'en.html';
})    