// Aplica o tema salvo do localStorage no site
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.documentElement.classList.add("light-theme");
    }
}

// Retorna a primeira função quando o site for carregado
document.addEventListener("DOMContentLoaded", applySavedTheme);


const button = document.getElementById("toggle-theme");

// Switcher do botão
if (button) {
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-theme");

        const isLight = document.documentElement.classList.contains("light-theme");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

// Efeito
button.addEventListener('click', function () {
    if(button.classList.contains('rotate')) {
        button.classList.remove('rotate');
        void this.offsetWidth
        button.classList.add('rotate');
    } else {
        button.classList.add('rotate');
    }
})
