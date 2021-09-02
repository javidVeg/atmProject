const account = require ('./account')


function getBalance(){
    return accountData.balance;
}

function withdraw(balance, withdraw){
    accountWith = prompUser('Amount to withdraw?');
    accountData.balance = balance - withdraw;
    return accountData.balance;

}
function deposit(balance, deposit){
    accountDepo = prompUser('Amount to deposit?')
    let newAccountBalance = balance + deposit;
    return accountData.balance
}
function validatePin(){
    if (enterPassword === pin){
    return true;
    }else{
        false;
    } 

}

const pin = 9876543210;

let balance = 4.20;


module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.pin = pin;
module.exports.balance = balance;

console.log(module)

