export function toggleDarkMode() {

    const themeToggle = document.querySelector('#themeToggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        toggleIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    } else {
        body.className = 'light';
        toggleIcon.className = 'fas fa-moon';
    }

    themeToggle.addEventListener('click', () => {
        if (body.className === 'light' || body.className === '') {
            body.className = 'dark';
            localStorage.setItem('theme', 'dark');
            toggleIcon.className = 'fas fa-sun';
        } else {
            body.className = 'light';
            localStorage.setItem('theme', 'light');
            toggleIcon.className = 'fas fa-moon';
        }
    });
}