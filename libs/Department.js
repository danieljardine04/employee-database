const inquirer = require('inquirer');

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

module.exports = Department;