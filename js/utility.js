function insidePlayer(playerBtn, playerName) {
    const listItem = document.getElementById('player-list').getElementsByTagName('li');
    const listCount = listItem.length;
    console.log(listCount)
    if (listCount < 5) {
        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');
        li.innerHTML = playerName;
        playerList.appendChild(li);
        const playerButton = document.getElementById(playerBtn);
        playerButton.setAttribute('disabled', '');
    } else {
        alert('You already added maximum player')
    }

};

function mySelect(itemName, itemBtn) {
    const playerField = document.getElementById(itemName);
    const playerName = playerField.innerText;
    insidePlayer(itemBtn, playerName);
};