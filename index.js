const inquirer = require('inquirer');
const {Department, addDepartment} = require('./libs/Department');
const {Roles, addRole} = require('./libs/Roles');
const { Employee, addEmployee } = require('./libs/Employee');


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
                Department.viewDepartment();
                init();
                break;
            }
            case "view all roles": {
                Roles.viewRoles()
                init();
                break;
            }
            case "view all employees": {
                Employee.viewEmployee()
                init();
                break;
            }
            case "add a department": {
               addDepartment()
                break;
            }
            case "add a role":{
                addRole()
                break;
            }
            case "add an employee": {
                addEmployee()
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


init()

module.exports = {init};

