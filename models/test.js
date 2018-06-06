/*
 *  test interactions with the courses.js model. A holdover from development
 *
 */
const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('./classes-test.db');

console.log (__dirname);

db.serialize(() => {

  db.all ('SELECT * FROM sqlite_master', (err, rows) => {
    console.log ('rows', rows);
    console.log (err);
    //return (rows);
  });
});

db.close();

/*
router.get('/:id', function (req, res) {

  db.all('SELECT * FROM courses WHERE id=$id',
    {
      $id: req.params.id
    },
    (err, rows) => {
      console.log (rows);
      res.send (rows);
    }
  );


});
*/


module.exports = router;
