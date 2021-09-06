const PromptSync = require('prompt-sync')();
const accountData = require ('./account')
const prompt = require('prompt-sync')();
// const prompt = ps();


function getBalance(){
    console.log(accountData.balance);
    console.log(runAtm());
}

function withdraw(){
    var accountWith = parseInt(prompt('Amount to withdraw?'));
    console.log(accountWith);
    var newBal = accountData.balance = accountData.balance - accountWith;
    console.log(newBal);
    console.log(runAtm()); 

}
function deposit(){
    var accountDepo = parseInt(prompt('Amount to deposit?'));
    console.log(accountDepo) 
    var newDepoBal = accountData.balance = accountData.balance + accountDepo;
    console.log(newDepoBal);
    console.log(runAtm());
}
function validatePin(){
    const pin = (1234)
    accountPin = prompt('Enter the 4 digit pin for this account');
    if (`${accountPin}` == pin){  
    return runAtm();
    } 
    else{
        console.log("Please try again")
    }

}

function runAtm(){
    console.log('Welcome to yougotnomoneyATM\nPlease make a selection:\n1. Get Account Balance.\n2. Withdraw from Account\n3. Deposit to Account\n4. End Transaction')
    let atmMenu = prompt();
    switch (atmMenu){
        case '1':
            getBalance();
            break;
        case '2':
            withdraw();
            break;
        case '3':
            deposit();
            break;
        case '4':
            console.log('Your transaction has been terminated.') 
            break;
        default:
            console.log('Entry isnt an option.\nPlease make another selection.')
    }
}



module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
module.exports.runAtm = runAtm;




