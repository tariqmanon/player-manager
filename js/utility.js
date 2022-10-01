function insidePlayer(playerBtn, playerName) {
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerHTML = playerName;
    playerList.appendChild(li);
    const playerButton = document.getElementById(playerBtn);
    playerButton.setAttribute('disabled', '');
};

function mySelect(itemName, itemBtn) {
    const playerField = document.getElementById(itemName);
    const playerName = playerField.innerText;
    insidePlayer(itemBtn, playerName);
};