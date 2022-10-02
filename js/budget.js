document.getElementById('player-budget').addEventListener('click', function () {
    const listItem = document.getElementById('player-list').getElementsByTagName('li');
    const listCount = listItem.length;
    console.log(listCount)
    const playerField = document.getElementById('player-field');
    const playerFieldStr = playerField.value;
    const perPlayerBudget = parseInt(playerFieldStr);



    if (listCount <= 0) {
        alert("please select a player");
    } else if (playerFieldStr.length == '') {
        alert("please Provide player Expense Fee");
    } else if (perPlayerBudget < 0 && typeof perPlayerBudget !== 'number') {
        alert("please Provide valid Expense Fee");
    }
    else {
        const getPlayerBudget = perPlayerBudget * listCount;
        const playerExpense = document.getElementById('player-expense');
        playerExpense.innerText = getPlayerBudget;
    };


});

document.getElementById('total-expense').addEventListener('click', function () {
    const managerField = document.getElementById('manager-exp');
    const managerExp = parseInt(managerField.value);
    const coachField = document.getElementById('coach-exp');
    const coachExp = parseInt(coachField.value);
    const playerField = document.getElementById('player-expense');
    const playerExp = parseInt(playerField.innerText);

    if (managerExp, coachExp, playerExp != '' && managerExp, coachExp, playerExp > 0) {
        const totalField = document.getElementById('total-field');
        const totalExp = managerExp + coachExp + playerExp;
        totalField.innerText = totalExp;
    } else {
        alert('please fill up the field')
    }


})