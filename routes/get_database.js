/*
 *  Test the database; part of the 'terminal interface' to creating the backend
 *  of this application alongside ../create_database.js
 *
 */

const sqlite3 = require ('sqlite3');
//const db = new sqlite3.Database ('../classes.db'); //opens db
const db = new sqlite3.Database ('/home/jasper/launch/ucsd/121/Cogs121/classes-test.db'); //opens db

db.serialize(() => {

/*
db.each ("SELECT id FROM courses", (err, row) => {
}, () => {
}); //end each


db.each ("SELECT name FROM courses", (err, row) => {
}, () => {
}); //end each
*/

db.all ('SELECT * FROM courses WHERE id=$id',
  {
    $id: 'cse131'
  }, (err, rows) => {
  console.log (rows);
});

db.all ('SELECT * FROM schedule WHERE id=$id',
  {
    $id: 'cse131'
  }, (err, rows) => {
  console.log (rows);
});

});

db.close(); //closes db
