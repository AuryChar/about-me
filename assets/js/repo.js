const desable = document.querySelector('#desable');
const errSpan = document.querySelector('span');

desable.addEventListener('click', () => {
    errSpan.style.display = 'block';
    setInterval(() => {
        errSpan.style.display = 'none';
    }, 3000);
});
