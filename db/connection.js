const mysql = require('mysql2');
const index = require('../index');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'G@rrettGS11',
        database: 'employeeGrid'
    },
    console.log("Connected to the database")
)

module.exports = db;