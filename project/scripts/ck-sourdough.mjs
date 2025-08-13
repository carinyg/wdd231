import { toggleMenu } from "./toggle-menu.mjs";
import { updateFooter } from "./update-footer.mjs";
import { handleContactForm } from "./update-footer.mjs";
import { greeting } from "./greeting.mjs";
import { toggleDarkMode } from "./toggle-mode.mjs";

document.querySelector('#menu').addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    handleContactForm();
    greeting();
    toggleDarkMode();
});