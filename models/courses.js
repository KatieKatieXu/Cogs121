/*
 *  Database interaction logic to respond to get requests through routes.
 *  Querries the database with the parameters requested by the client logic
 *
 */
const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('classes.db');

access = function (classes, event_types) {
  let access_return;
  return access_return;
}

/*
 * ----------------------------------------------------------------------------
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
}

 * ----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
    db.all ('SELECT id, name FROM courses', (err, rows) => {
      res.send (rows);
    });

  */

//module.exports = router;
// classes may be multiple, event_types may be multiple

module.exports = function (classes, event_types) {
  db.serialize(() => {
//----------------------------------------------------------------------------
    for (entry of classes) {
      db.all("SELECT * FROM schedule WHERE id=$id",
        {
          $id: entry
        },
        (err, rows) => {
          return rows;
        }
      );
    }
//----------------------------------------------------------------------------
  });



  //let data = access (classes, event_types);
  //console.log (data);
  //return data;

}
