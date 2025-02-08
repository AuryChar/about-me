const am = document.querySelector('#am');
const others = document.querySelector('#others');
const buttons = {
    pt: 'pt.html',
    en: 'en.html',
    sm: 'social.html',
};

others.hidden = true;

am.addEventListener('click', () => {
    am.hidden = true;
    others.hidden = false;
});

others.addEventListener('click', (event) => {
    const id = event.target.id;
    if (buttons[id]) {
        window.location.href = buttons[id];
    } else if (id === 'back') {
        am.hidden = false;
        others.hidden = true;
    }
});
