#! /usr/bin/env node

import inquirer from "inquirer";

let studentName = await inquirer.prompt([
    {
     name: "string",
     type: "input",
     message: "Please Enter your Name: ",
     validate: function (value) {
        if (value.trim() !==""){
            return true;
        }return "Please enter a non-empty value"
    },   
    }
]);
console.log("\n  Instructions:\n  1.Selct an answer using arrow keys up & down.");
    console.log("\n 2. Each Question carries one mark.");
    
    const quiz: {
    Question_1 : string;
    Question_2 : string;
    Question_3 : string;
    Question_4 : string;
    Question_5 : string;
    } = await inquirer.prompt([
        {
            name: "Question_1",
            type: "list",
            message: " \n What is TypeScript primarily used for?",
            choices: ["\n A. Memory Management","B. Dynamic Typing", "C. Static Typing","D. Asynchronous operations"]
        },{
            name: "Question_2",
            type: "list",
            message: " \n Which of the following is NOT a valid TypeScript data type?",
            choices: ["\n A. void","B. any", "C. dynamic","D. tuple"]
        },{
            name: "Question_3",
            type: "list",
            message: " \n How do you denote a variable as readonly in TypeScript?",
            choices: ["\n A. const","B. static","C. readonly","D. fixed"]
        },{
            name: "Question_4",
            type: "list",
            message: " \n How do you specify that a function does not return anything in TypeScript?",
            choices: ["\n A. function myFunc(): undefined", "B. function myFunc(): void","C. function myFunc(): null","D. function myFunc(): None"]
        },{
            name: "Question_5",
            type: "list",
            message: "\n How do you define a custom type in TypeScript?",
            choices: ["\n A. interface","B. typedef","C. type","D. Both A and C"]
        }
    ]);
    let score: number = 0;
    switch(quiz.Question_1) {
        case "C. Static Typing":
            console.log("1. Correct.");
            ++score;
            break;
            default:
            console.log("1. Incorrect!");
    }
    switch(quiz.Question_2) {
        case "B. any":
            console.log("2. Correct.");
            ++score;
            break;
            default:
            console.log("2. Incorrect!");
    }
    switch(quiz.Question_3) {
        case "C. readonly":
            console.log("3. Correct.");
            ++score;
            break;
            default:
            console.log("3. Incorrect!");
    }
    switch(quiz.Question_4) {
        case "B. function myFunc(): void":
            console.log("4. Correct.");
            ++score;
            break;
            default:
            console.log("4. Incorrect!");
    }
    switch(quiz.Question_5) {
        case "D. Both A and C":
            console.log("5. Correct.");
            ++score;
            break;
            default:
            console.log("5. Incorrect!");
    }
    console.log(`You have got ${score } numbers out of 5`);
    let ans = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Choose one From the given options.", 
            choices: ["Continue", "Exit" ]
        }
       ]);
       
    