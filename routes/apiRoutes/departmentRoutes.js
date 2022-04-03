const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

router.get('/department', (req, res) => {
  var sql = 'SELECT * FROM department';
  db.query(sql, (err, data) => {
    if(err) throw err;
    res.render('department', {title: 'department', userData: data});
  });
});

module.exports = router;