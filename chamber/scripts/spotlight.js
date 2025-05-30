const file = 'data/members.json';
const cards = document.querySelector("#spotlight-cards");

async function getSpotlightData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.members);
    const selectedMembers = selectRandomMembers(data);
    console.log(selectedMembers);
    
}

function selectRandomMembers(memberList) {
    const goldMembers = memberList.filter(member => member.level === "gold");
    const silverMembers = memberList.filter(member => member.level === "silver");

    const selectedGold = [];
    const goldCopy = [...goldMembers];

    const randomGold1 = Math.floor(Math.random() * goldCopy.length);
    selectedGold.push(goldCopy[randomGold1]);
    goldCopy.splice(randomGold1, 1);

    const randomGold2 = Math.floor(Math.random() * goldCopy.length);
    selectedGold.push(goldCopy[randomGold2]);

    const randomSilver = Math.floor(Math.random() * silverMembers.length);
    const selectedSilver = silverMembers[randomSilver];

    return [...selectedGold, selectedSilver];
}




getSpotlightData();