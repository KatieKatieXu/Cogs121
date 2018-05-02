
const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('classes.db');

//sequentially
db.serialize(() => {
  //create
  db.run ("CREATE TABLE courses (id TEXT, name TEXT, schedule TEXT)");

  //fill
  db.run("INSERT INTO courses VALUES ('cogs121', 'COGS 121', 'MWF @ 2:00')");
  db.run("INSERT INTO courses VALUES ('cogs123', 'COGS 123', 'MWF @ ?:00')");
  db.run("INSERT INTO courses VALUES ('cse131', 'CSE 131', 'MWF @ 9:00')");

  console.log ("filled");

  //backend use
});

  db.each ("SELECT name, schedule FROM courses", (err, row) => {
    console.log (row.name + ": " + row.schedule);
  });

db.close(); //end
