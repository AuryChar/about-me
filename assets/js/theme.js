function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.documentElement.classList.add("light-theme");
    }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);

const button = document.getElementById("toggle-theme");

if (button) {
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-theme");

        const isLight = document.documentElement.classList.contains("light-theme");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

button.addEventListener('click', function () {
    if(button.classList.contains('rotate')) {
        button.classList.remove('rotate');
        void this.offsetWidth
        button.classList.add('rotate');
    } else {
        button.classList.add('rotate');
    }
})
