#! /usr/bin/env node 
import inquirer from "inquirer";

//Asking Question from Users through inquirer

const answer = await inquirer.prompt([
    {message:"Enter firstNumber",type: "number",name: "firstNumber"},
    {message: "Enter secondNumber",type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform opertion",
        type:"list",    
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

    //Conditional statement If-Else 

    if(answer.operator === "Addition"){
        console.log(answer.firstNumber + answer.secondNumber)
    }
    else if (answer.operator === "Subtraction"){
        console.log(answer.firstNumber - answer.secondNumber)
    }
    else if (answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber)
    }
    else if (answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber)
    }
    else{
        console.log("Invalid Input")
    }