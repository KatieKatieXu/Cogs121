
const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('../classes.db'); //opens db

db.serialize(() => {

loc = [];
loc2 = [];
loc3 = [];

db.each ("SELECT id FROM courses", (err, row) => {
  //console.log (row.id + ": " + row.name + " - " + row.schedule);
  loc.push (row.id);
}, () => {
  //console.log ("final: ", loc);
}); //end each


db.each ("SELECT name FROM courses", (err, row) => {
  //console.log (row.id + ": " + row.name + " - " + row.schedule);
  loc2.push (row.name);
}, () => {
  //console.log ("final: ", loc2);
}); //end each

db.all ('SELECT id, name FROM courses', (err, rows) => {
  console.log (rows);
});

});

db.close(); //closes db
