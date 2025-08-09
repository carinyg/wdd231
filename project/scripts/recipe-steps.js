const file = 'data/recipe-steps.json';
const cards = document.querySelector('#recipe-steps');

async function getRecipeSteps() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.steps)
    displayRecipeSteps(data.steps);
}

const displayRecipeSteps = (steps) => {
    steps.forEach(step => {
        let card = document.createElement('section');
        let stepTitle = document.createElement('h2');
        let image = document.createElement('img');
        let process = document.createElement('p');

        stepTitle.textContent = step.title;
        image.setAttribute('src', step.image);
        image.setAttribute('alt', step.title);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '250');
        process.textContent = step.process;

        card.appendChild(stepTitle);
        card.appendChild(image);
        card.appendChild(process);
        cards.appendChild(card);
    });
}

getRecipeSteps();