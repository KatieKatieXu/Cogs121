const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('../classes.db');

router.get('/', function (req, res) {
  
  db.all ('SELECT id, name FROM courses', (err, rows) => {
    res.send (rows);
  });
}

/* GET course page */

router.get('/:id', function (req, res) {
    switch (req.params.id) {
        case 'cogs121':
            res.render('course', {name: 'COGS 121'});
            break;
        case 'cogs123':
            res.render('course', {name: 'COGS 123'});
            break;
        case 'cogs102c':
            res.render('course', {name: 'COGS 102C'});
            break;
    }
});

db.close();

module.exports = router;
