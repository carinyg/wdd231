const file = 'data/destinations.json';
const cards = document.querySelector('#destination-cards');

async function getDestinationData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.destinations);
    displayDestinations(data.destinations);
}

const displayDestinations = (destinations) => {
    destinations.forEach(destination => {
        let card = document.createElement('section');
        let oathgateName = document.createElement('h2');
        let location = document.createElement('p');
        let image = document.createElement('img');
        let infoButton = document.createElement('button');

        oathgateName.textContent = destination.title;
        location.innerHTML = `<strong>Location:</strong> ${destination.location}`;
        image.setAttribute('src', destination.photo_url);
        image.setAttribute('alt', `Image of ${destination.title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        infoButton.textContent = "More Info";
        infoButton.setAttribute('id', `info-${destination.title.replace(/\s+/g, '-').toLowerCase()}`);
        infoButton.addEventListener('click', () => {
            const dialog = displayDestinationDescription(destination);
            document.body.appendChild(dialog);
            dialog.showModal();
            dialog.querySelector('#closeModal').addEventListener('click', () => {
                dialog.close();
                dialog.remove();
            });
        });

        card.appendChild(oathgateName);
        card.appendChild(location);
        card.appendChild(image);
        card.appendChild(infoButton);
        cards.appendChild(card);
    })
}

function displayDestinationDescription(destination) {
    let cardDialog = document.createElement("dialog");
    let dialogTitle = document.createElement("h2");
    let closeButton = document.createElement("button");
    let dialogLocation = document.createElement("h3");
    let dialogDescription = document.createElement("p");

    cardDialog.setAttribute("class", "destination-dialog");
    dialogTitle.textContent = destination.title;
    closeButton.setAttribute("id", "closeModal");
    closeButton.textContent = "✖";
    dialogLocation.innerHTML = `<strong>Location:</strong> ${destination.location}`;
    dialogDescription.innerHTML = `${destination.description}`;

    cardDialog.appendChild(dialogTitle);
    cardDialog.appendChild(closeButton);
    cardDialog.appendChild(dialogLocation);
    cardDialog.appendChild(dialogDescription);
    return cardDialog;
}

getDestinationData();