const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const model = require ('../models/test.js');

router.get('/', function (req, res) {
  /* 
   * call ../models/test.js and return the result of that call (rows)
   * so like res.send (retval);
   */
  model();
  res.send ('compile?');
});

/* GET course page */

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
