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
    const input = parseFloat(inputField.value);
    inputField.value = '';
    return input;
}

//adding event handler to the deoposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDeposit = getInput('deposit-input');

})

//adding event handler to withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = getInput('withdraw-input');
})