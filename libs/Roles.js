const inquirer = require('inquirer');

class Roles {
  
  constructor(){

  }

  static viewRoles(){
    const db = require('../db/connection');
    db.query('SELECT * FROM roles', function(err, results,) {
      console.log(results);
      
    })
  }
}

function addRole(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the title of this new role?"
    },
    {
      type: 'input',
      name: 'salary',
      message: "What is the salary of this new role?"
    },
    {
      type: 'input',
      name: 'department_id',
      message: "What is the department id of this role"
    }
  ]
  ).then(answers => {
    var title = answers.title;
    var salary = answers.salary;
    var department_id = answers.department_id;
    const db = require('../db/connection');
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES("${title}", ${parseInt(salary)}, ${parseInt(department_id)})`);
    console.log(`Added ${answers.title}, ${answers.salary}, ${answers.department_id} to the roles table`);
   })
  }

module.exports = {Roles, addRole};