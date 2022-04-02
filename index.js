const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const db = require('./db/connection');
const fs = require('fs');

const starterQuestion = [
    {
        type: 'checkbox',
        name: 'chose',
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "Exit"],
        validate: choiceInput => {
            
            if(choiceInput.length !== 1){
                console.log("You need to choose only one choice");
                return false;
            } else {
                return true;
            }
        }
    },
];



function init() {
    inquirer.prompt(starterQuestion).then(answers => {
        switch(answers.chose[0]){
            case "view all departments": {
                
                console.log("Thanks for viewing all departments");
                
                break;
            }
            case "view all roles": {
                inquirer.prompt()
                console.log("Thanks for viewing all roles");
                break;
            }
            case "view all employees": {
                console.log("thanks for viewing all employees");
                break;
            }
            case "add a department": {
                console.log("thanks for adding a department");
                break;
            }
            case "add a role":{
                console.log("Thanks for adding a role.");
                break;
            }
            case "add an employee": {
                console.log("Thanks for adding an employee!");
                break;
            }
            case "update an employee": {
                console.log("Thanks for updating an employee!");
                break;
            }
            case "Exit": {
                console.log("Thanks for your time. Please come back soon! Or don't we don't really care either way.");
                break;
            }
        }

       // writeToFile()
    })
}

function writeToFile(fileName, data){
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('File written Successfully');
        }
    })

}

init()

