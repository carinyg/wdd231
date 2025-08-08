export function greeting() {
    const greetingElement = document.querySelector('.greeting p span');
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingText;

        if (currentHour < 12) {
            greetingText = 'morning';
        } else if (currentHour < 18) {
            greetingText = 'afternoon';
        } else {
            greetingText = 'evening';
        }

        greetingElement.textContent = greetingText;
    }
}