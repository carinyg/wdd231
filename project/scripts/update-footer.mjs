export function updateFooter() {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    updateVisitCount();
}

function updateVisitCount() {
    const pageName = window.location.pathname.split('/').pop() || 'caringkitchen.html';
    let visits = parseInt(localStorage.getItem(`visits_${pageName}`) || '0');
    visits += 1;
    localStorage.setItem(`visits_${pageName}`, visits);
    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        visitCountElement.textContent = visits;
    }
}