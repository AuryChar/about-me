function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("light-theme");
    }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);

const button = document.getElementById("toggle-theme");

if (button) {
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-theme");

        const isDark = document.documentElement.classList.contains("light-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
