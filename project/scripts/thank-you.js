
const myInfo = new URLSearchParams(window.location.search);

function doubleDecode(str) {
    if (!str) return str;
    const step1 = str.replace(/%25/g, '%');
    return decodeURIComponent(step1);
}

const decodedName = doubleDecode(myInfo.get('name'));
const decodedEmail = doubleDecode(myInfo.get('email'));
const decodedMessage = doubleDecode(myInfo.get('message'));
const decodedTimestamp = doubleDecode(myInfo.get('timestamp'));

let formattedTimestamp = decodedTimestamp;
if (decodedTimestamp) {
    const date = new Date(decodedTimestamp);
    formattedTimestamp = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

document.querySelector('#submission-details').innerHTML = `
<p>On ${formattedTimestamp}, you sent:</p>
<br>
<p>"${decodedMessage}"</p>
<br>
<p><strong>Your name:</strong> ${decodedName}</p>
<p><strong>Your email:</strong> ${decodedEmail}</p>`;
