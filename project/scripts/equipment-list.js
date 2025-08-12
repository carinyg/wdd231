const file = 'data/equipment.json';
const cards = document.querySelector('#equipment-list');

async function getEquipmentList() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.equipment);
    displayEquipmentList(data.equipment);
}

const displayEquipmentList = (equipment) => {
    equipment.forEach(tool => {
        let card = document.createElement('section');
        let toolTitle = document.createElement('h3');
        let image = document.createElement('img');
        let seller = document.createElement('p');
        let preference = document.createElement('p');

        toolTitle.textContent = tool.name;
        image.setAttribute('src', tool.image);
        image.setAttribute('alt', tool.imageAlt);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '250');
        seller.classList.add('seller');
        seller.innerHTML = `Sold by <strong>${tool.seller}</strong> at <a href="${tool.companyURL}">Amazon.com</a>.`;
        preference.classList.add('preference');
        preference.textContent = `I use this product because ${tool.why}`;

        card.appendChild(toolTitle);
        card.appendChild(image);
        card.appendChild(seller);
        card.appendChild(preference);
        cards.appendChild(card);
    });
}

getEquipmentList();