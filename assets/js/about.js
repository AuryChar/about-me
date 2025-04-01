const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cardContainer.classList.add('blur-active');
        card.classList.add('card-hover');
    });

    card.addEventListener('mouseleave', () => {
        cardContainer.classList.remove('blur-active');
        card.classList.remove('card-hover');
    });
});