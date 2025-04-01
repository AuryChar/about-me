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

function getLanguage() {
    const language = navigator.userLanguage;

    if (language.startsWith("pt")){
        window.location.href = "pt.html";
    } else if (language.startsWith("es")){
        window.location.href = "es.html";
    } else {
        window.location.href = "en.html";
    }
}
