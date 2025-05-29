const file = 'data/members.json';
const cards = document.querySelector("#spotlight-cards");

async function getSpotlightData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.members);
    // displayRandomGold(data.members);
    // displayRandomSilver(data.members);
}

getSpotlightData();

function displayRandomGold() {
    
}

function displayRandomSilver() {

}