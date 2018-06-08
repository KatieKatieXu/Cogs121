/*
 *  Database interaction logic to respond to get requests through routes.
 *  Querries the database with the parameters requested by the client logic.
 *
 *  A simple function to be included and called in the routes/ and to populate
 *  the frontend calendar of events.
 *
 */
const express = require('express');
const router = express.Router();

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('/home/jasper/launch/ucsd/121/Cogs121/classes.db');

access = function (classes, event_types) {
  let access_return;
  return access_return;
}

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

}
