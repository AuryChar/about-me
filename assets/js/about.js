const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.cards');

function addBlur() {
    cardsContainer.classList.add('hovered');
}

function removeBlur() {
    cardsContainer.classList.remove('hovered');
}

cards.forEach(card => {
    card.addEventListener('mouseenter', addBlur);
    card.addEventListener('mouseleave', removeBlur);
});