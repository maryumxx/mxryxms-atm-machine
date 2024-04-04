#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPin = 3333;

let pinCheck = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin",
});

if (pinCheck.pin == myPin) {
  console.log("Pin is correct");
} else {
  console.log("Pin is incorrect");
}

let actionAns = await inquirer.prompt({
  name: "question",
  type: "list",
  message: "What would you like to do?",
  choices: ["Withdraw", "Check Balance"],
});

if (actionAns.question === "Withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "Select your option",
      choices: ["Enter Your Amount", "Choose from Fast Cash List"],
    },
  ]);
  if (amountAns.options === "Enter Your Amount") {
    let yourAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "How much would you like to withdraw?",
      },
    ]);

    if (yourAmount.amount > myBalance) {
        console.log("Insufficient Balance");
        }
        else if (myBalance -= yourAmount.amount){
    
        console.log(`Your new balance is ${myBalance}`);
        }
}

    else if (amountAns.options === "Choose from Fast Cash List") {
    let fcAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: "Select your fast cash option",
        choices: ["1000", "2000", "5000", "10000", "20000"],
      },
    ]);

    if (fcAmount.amount > myBalance) {
        console.log("Insufficient Balance");
        }
        else if (myBalance -= fcAmount.amount){
    
        console.log(`Your new balance is ${myBalance}`);
        }
}
}
    else if (actionAns.question === "Check Balance") {
    console.log(`Your Balance is ${myBalance}`)
    }


