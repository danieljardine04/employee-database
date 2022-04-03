const inquirer = require('inquirer');
const { init } = require('../index');


class Department {

  constructor(name, id){
    this.name = name;
    this.id = id;
  }

  static viewDepartment(){
    const db = require('../db/connection');
    db.query('SELECT * FROM department', function(err, results,) {
      console.log(results);
      
    })
  }

  
}

function addDepartment(){
 inquirer.prompt([
   {
     type: 'input',
     name: 'department',
     message: "What would you like the departments name to be?"
   }
 ]
 ).then(answers => {
   var string = answers.department;
   const db = require('../db/connection');
   db.query(`INSERT INTO department (name) VALUES("${string}")`);
   console.log(`Added ${answers.department} to the department table`);
  })
  
}
module.exports = { Department, addDepartment } ;