#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\nWELCOME TO NUMBER GUESSING GAME\n");

const randomNumber = Math.floor(Math.random() * 7 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1 to 7: "
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guess a correct number");
}
else{
    console.log("Sorry, You guess a wrong number");
}