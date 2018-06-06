const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {

  /* GET course page */

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

    /*
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

*/

  });
}

//router.get('/events/', function (req, res) { }

router.get('/events/', function (req, res) { }

router.get('/events/:id', function (req, res) { }








db.close();

module.exports = router;
