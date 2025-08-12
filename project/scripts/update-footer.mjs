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

export function handleContactForm() {
    const contactButton = document.getElementById('contactButton');
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');

    if (contactButton && modal && closeModal && contactForm) {
        contactButton.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const formData = { name, email, message, timestamp: new Date().toISOString() };
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            submissions.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

            const params = new URLSearchParams({
                name: encodeURIComponent(name),
                email: encodeURIComponent(email),
                message: encodeURIComponent(message),
                timestamp: encodeURIComponent(formData.timestamp)
            });

            window.location.href = `thank-you.html?${params.toString()}`;


            contactForm.reset();
            modal.style.display = 'none';
        });
    }
}
