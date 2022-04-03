const inquirer = require('inquirer');

class Employee {
  
  constructor(){

  }

  static viewEmployee(){
    const db = require('../db/connection');
    db.query('SELECT * FROM employee', function(err, results,) {
      console.log(results);
      
    })
  }

}

function addEmployee(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What is the new Employee's First name?"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What is the new Employee's last name?"
    },
    {
      type: 'input',
      name: 'role_id',
      message: "What is the role id for this Employee?"
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is the Employee's Manager id? "
    }
  ]
  ).then(answers => {
    var first_name = answers.first_name;
    var last_name = answers.last_name;
    var role_id = answers.role_id;
    var manager_id = answers.manager_id;
    const db = require('../db/connection');
    db.query(`INSERT INTO employee (first_name, last_name, role_id, Manager_id) VALUES("${first_name}", "${last_name}", ${parseInt(role_id)}, ${parseInt(manager_id)})`);
    console.log(`Added ${answers.first_name}, ${answers.last_name}, ${answers.role_id}, and ${answers.manager_id} to the Employee table`);
   })
  }

module.exports = {Employee, addEmployee};