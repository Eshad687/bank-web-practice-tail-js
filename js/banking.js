/* 

/////////////////////////////DEPOSIT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//adding event handler to the deoposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    //Deposit part

    //getting input field
    const depositInputField = document.getElementById('deposit-input');
    //making its value a number
    const newDeposit = parseFloat(depositInputField.value);

    //getting the deposit amount
    const currentDepositAmountText = document.getElementById('deposit-amnt');
    //converting it to number
    const currentdepositAmountNumber = parseFloat(currentDepositAmountText.innerText);

    //adding  new deposit and current deposit
    const totalDeposit = newDeposit + currentdepositAmountNumber;

    //change the deposit amount
    currentDepositAmountText.innerText = totalDeposit;


    //Balance part

    //getting the balance
    const currentTotalBalanceText = document.getElementById('bank-balance');
    //converting it to number
    const currentTotalBalanceNumber = parseFloat(currentTotalBalanceText.innerText);

    //adding the new deposit value with current balance
    const newTotalBalance = newDeposit + currentTotalBalanceNumber;

    //change the current balance
    currentTotalBalanceText.innerText = newTotalBalance;



    //making the input field emty again
    depositInputField.value = '';

});

//////////////////////////WITHDRAW\\\\\\\\\\\\\\\\\\\\\\\\\

//adding event handler to the deoposit button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //Withdraw part

    //getting input field
    const withdrawInputField = document.getElementById('withdraw-input');
    //making its value a number
    const newWithdraw = parseFloat(withdrawInputField.value);

    //getting the withdraw amount
    const currentWithdrawAmountText = document.getElementById('withdraw-amnt');
    //making it a number
    const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmountText.innerText);

    //adding  new withdraw and current withdraw
    const totalWithdraw = newWithdraw + currentWithdrawAmountNumber;

    //change the withdraw amount
    currentWithdrawAmountText.innerText = totalWithdraw;



    //Balance part

    //getting the balance
    const currentTotalBalanceText = document.getElementById('bank-balance');
    //converting it to number
    const currentTotalBalanceNumber = parseFloat(currentTotalBalanceText.innerText);

    //reduce the current balance as per withdrawl
    const newTotalBalance = currentTotalBalanceNumber - newWithdraw;

    //change the current balance
    currentTotalBalanceText.innerText = newTotalBalance;


    //making the input field empty again
    withdrawInputField.value = '';

}); 

*/



//the above part works
//Here is a better approach of the previous code
//Taking all the common parts which is used multiple times and making differnt functions
//and call them wherever required
//also add some error handling


//function for getting the input
function getInput(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
}

//function for  adding the new amount and updating the amount
function updateAmount(amountId, newAmount) {
    const currentAmountText = document.getElementById(amountId);
    const currentAmountNumber = parseFloat(currentAmountText.innerText);

    const totalAmount = currentAmountNumber + newAmount;
    currentAmountText.innerText = totalAmount;

}
//function for getting the current balance
function currentBalance() {
    const currentTotalBalanceText = document.getElementById('bank-balance');

    const currentTotalBalanceNumber = parseFloat(currentTotalBalanceText.innerText);
    return currentTotalBalanceNumber;
}
//function for updating the balance
function updateBalance(newAmount, addBalance) {

    const currentTotalBalanceText = document.getElementById('bank-balance');

    const currentTotalBalanceNumber = currentBalance();//practising nested function
    if (addBalance == true) {
        //adding the new amount with current balance and change the current balance
        currentTotalBalanceText.innerText = newAmount + currentTotalBalanceNumber;
    } else {
        //reduce the current balance as per withdrawl and change the current balance
        currentTotalBalanceText.innerText = currentTotalBalanceNumber - newAmount;
    }




}


//adding event handler to the deoposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDeposit = getInput('deposit-input');
    //adding some error handlers,it has to be a positive number
    if (newDeposit > 0) {
        updateAmount('deposit-amnt', newDeposit);//updates deposit field
        updateBalance(newDeposit, true);//updates balance field
    }
    else {
        alert('Please enter valid number');
    }


});

//adding event handler to withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdraw = getInput('withdraw-input');
    //adding some error handlers. it has to be a positive number and withdrwal can not exceed current balance
    const balance = currentBalance();//getting the current balance

    if (newWithdraw > 0 && balance >= newWithdraw) {
        updateAmount('withdraw-amnt', newWithdraw);//updates withdraw field
        updateBalance(newWithdraw, false);//updates balance field
    }
    else if (balance < newWithdraw) {
        alert('Your balance exceeded. You do not have enough money')
    }
    else {
        alert('Please enter valid number')
    }
});