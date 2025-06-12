export function toggleMenu() {
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    const isExpanded = hambutton.classList.contains('show');
    hambutton.setAttribute('aria-expanded', isExpanded);
};