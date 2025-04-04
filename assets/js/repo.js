const desableRepo = document.querySelectorAll('#desable');
const master = document.querySelector('.master');

desableRepo.forEach(element => {
    element.addEventListener('click', function() {
        const spanCreate = document.createElement('span');
        const separateDiv = document.createElement('div');
        const buttonCreate = document.createElement('i');
        buttonCreate.className = 'bx bx-x-circle';
        spanCreate.textContent = 'An error has occurred';
        separateDiv.appendChild(buttonCreate);
        spanCreate.appendChild(separateDiv);
        master.appendChild(spanCreate);

        spanCreate.style.display = 'flex';
        spanCreate.style.justifyContent = 'space-between';
        buttonCreate.addEventListener('mouseenter', function() {
            buttonCreate.style.color = 'red';
            buttonCreate.style.cursor = 'pointer';
        });
        buttonCreate.addEventListener('mouseleave', function() {
            buttonCreate.style.color = '';
        });
        buttonCreate.addEventListener('click', function() {
            spanCreate.remove();
        });
        setTimeout(() => { spanCreate.remove(); }, 2400);
    });
});

const repoContainer = document.querySelector('.repo-container');
const repos = document.querySelectorAll('.repo');

repos.forEach(repo => {
    repo.addEventListener('mouseenter', () => {
        repoContainer.classList.add('blur-active');
        repo.classList.add('repo-hover');
    });

    repo.addEventListener('mouseleave', () => {
        repoContainer.classList.remove('blur-active');
        repo.classList.remove('repo-hover');
    });
});