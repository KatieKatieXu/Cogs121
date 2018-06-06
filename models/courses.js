const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('/home/jasper/launch/ucsd/121/Cogs121/classes.db');

db.serialize(() => {

  db.all ('SELECT id, name FROM courses', (err, rows) => {
    res.send (rows);
  });
});

/* GET course page */

db.all('SELECT * FROM courses WHERE id=$id',
  {
    $id: req.params.id
  },
  (err, rows) => {
    console.log (rows);
    res.send (rows);
  }
);

db.close();


module.exports = router;
