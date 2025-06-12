
import { toggleMenu } from "./toggle-menu.mjs";
import { updateFooter } from "./update-footer.mjs";

document.querySelector('#menu').addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
});
