"use strict"

const getBalance = require('./atm')
const myAccountData = require('./account')

getBalance();

let atmMenu = prompt('Welcome to yougotnomoneyATM\nPlease make a selection:\n1. Get Account Balance.\n2. Withdraw from Account\n3. Deposit to Account\n4. End Transaction')
switch (atmMenu){
    case '1':
        getBalance
        break;
    case '2':
        withdraw
        break;
    case '3':
        deposit
        break;
    case '4':
        break;
    default:
        alert('Entry isnt an option.\nPlease make another selection.')
}