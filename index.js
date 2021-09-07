"use strict"

const prompt = require('prompt-sync')();
const atm = require('./atm');
const pin = require('./account');

// getBalance();
// var askPass = prompt("What is password")
// if (askPass === atm.validatePin){
//     return runAtm
// }

atm.validatePin();


    

// if (askPass !== atm.validatePin){
//     console.log("Pin is incorrect, please re-enter pin")
// }

// function runAtm(){
//     console.log('Welcome to yougotnomoneyATM\nPlease make a selection:\n1. Get Account Balance.\n2. Withdraw from Account\n3. Deposit to Account\n4. End Transaction')
//     let atmMenu = prompt();
//     switch (atmMenu){
//         case '1':
//             atm.getBalance()
//             break;
//         case '2':
//             atm.withdraw
//             break;
//         case '3':
//             atm.deposit
//             break;
//         case '4':
//             break;
//         default:
//             console.log('Entry isnt an option.\nPlease make another selection.')
//     }
// }