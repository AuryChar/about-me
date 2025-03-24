const principal = document.querySelector('.principal');
setTimeout(() => {
    principal.classList.add('apears');
}, 500);

const backBtn = document.querySelector('#back-page');

backBtn.addEventListener('click', () => {
    window.history.back();
});