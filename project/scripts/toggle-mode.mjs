export function toggleDarkMode() {

    const themeToggle = document.querySelector('#themeToggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        toggleIcon.textContent = savedTheme === 'dark' ? '☼' : '☾';
    } else {
        body.className = 'light';
        toggleIcon.textContent = '☾';
    }

    themeToggle.addEventListener('click', () => {
        if (body.className === 'light' || body.className === '') {
            body.className = 'dark';
            localStorage.setItem('theme', 'dark');
            toggleIcon.textContent = '☼';
        } else {
            body.className = 'light';
            localStorage.setItem('theme', 'light');
            toggleIcon.textContent = '☾';
        }
    });
}