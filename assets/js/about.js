const loadingBars = document.querySelectorAll('.loading-bar');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const php = document.querySelector('#php');

const htmlPer = 100;
const cssPer = 69;
const jsPer = 20;
const phpPer = 14;

html.firstChild.textContent = `HTML: ${htmlPer}%`;
css.firstChild.textContent = `CSS: ${cssPer}%`;
js.firstChild.textContent = `JS: ${jsPer}%`;
php.firstChild.textContent = `PHP: ${phpPer}%`;

html.style = `width: ${htmlPer}%`
css.style = `width: ${cssPer}%`
js.style = `width: ${jsPer}%`
php.style = `width: ${phpPer}%`