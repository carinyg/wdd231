const file = 'data/destinations.json';
const cards = document.querySelector('#destination-cards');

async function getDestinationData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.destinations);
}

getDestinationData();