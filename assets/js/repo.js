const desableRepo = document.querySelectorAll('#desable');
const master = document.querySelector('.master');

desableRepo.forEach(element => {
    element.addEventListener('click', function() {
        const spanCreate = document.createElement('span');
        spanCreate.textContent = 'An error has occurred'
        master.appendChild(spanCreate);
        setTimeout(() => { spanCreate.remove(); }, 2400);
    });
});

