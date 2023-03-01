document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeValue = getInputValueByID('input-income');
    const foodValue = getInputValueByID('input-food');
    const rentValue = getInputValueByID('input-rent');
    const clothesValue = getInputValueByID('input-clothes');

    if (isNaN(incomeValue) == true || isNaN(foodValue) == true || isNaN(rentValue) == true || isNaN(clothesValue) == true) {
        alert("Don't Enter Empty Field!");
        return;

    } else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        alert("Please Enter Positive Salary Amount!");
        return;
    }

    const totalExpensesAmount = foodValue + rentValue + clothesValue;
    const balanceAmount = incomeValue - totalExpensesAmount;

    if (totalExpensesAmount > incomeValue) {
        alert("cut your coat according to your cloth!");
        return;
    }

    setValueByID('text-total-expenses', totalExpensesAmount);
    setValueByID('text-balance', balanceAmount);
});


document.getElementById('btn-save').addEventListener('click', function () {
    const saveValue = getInputValueByID('input-save');
    const incomeValue = getInputValueByID('input-income');

    const balanceValue = getTextValueByID('text-balance');

    if (isNaN(saveValue) == true) {
        alert("Don't Enter Empty Field!");
        return;

    } else if (saveValue <= 0) {
        alert("Please Enter Positive Save Amount!");
        return;

    } else if (saveValue >= 100) {
        alert("It is not possible to save more than 100%");
        return;
    } else {
        const saveAmount = incomeValue * (saveValue / 100);
        const saveAmountFloor = parseFloat(saveAmount).toFixed(2);

        if (saveAmountFloor > balanceValue) {
            alert("You cannot save more than your balance.");
            return;
        }
        setValueByID('save-text', saveAmountFloor);
    }

    const saveText = getTextValueByID('save-text')
    const remainingAmount = balanceValue - saveText;
    setValueByID('remaining-text', remainingAmount);
})


document.getElementById('btn-reset').addEventListener('click', function () {
    setButtonResetInput('input-income');
    setButtonResetInput('input-food');
    setButtonResetInput('input-rent');
    setButtonResetInput('input-clothes');
    setButtonResetInput('input-save');

    setButtonResetText('text-total-expenses');
    setButtonResetText('text-balance');
    setButtonResetText('save-text');
    setButtonResetText('remaining-text');
})