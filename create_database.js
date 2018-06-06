/*
 * Building db. the terminal interface to the database creation for the site
 * this populates all tables in the database and is tested with
 * routes/get_database.js
 *
 */

const sqlite3 = require ('sqlite3');
//const db = new sqlite3.Database ('classes.db');
const db = new sqlite3.Database ('/home/jasper/launch/ucsd/121/Cogs121/classes.db');

//sequentially
db.serialize(() => {
//create courses TABLE ------------------------------------------------------
  db.run ("CREATE TABLE courses \
    (id TEXT,\
    name TEXT,\
    schedule TEXT,\
    description TEXT\
    )"
  );

  //fill
  db.run("INSERT INTO courses VALUES \
    ('cogs121',\
      'COGS 121',\
      'MWF @ 2:00',\
      'webapps class learning frontend and backend frameworks'\
    )"
  );

  db.run("INSERT INTO courses VALUES \
    ('cogs123',\
    'COGS 123',\
    'MWF @ ?:00',\
    'explores intersection of social behavior and computational systems'\
    )"
  );

  db.run("INSERT INTO courses VALUES\
    ('cse131',\
      'CSE 131',\
      'MWF @ 9:00',\
      'create compilers and understand parsing'\
    )"
  );

//create schedule TABLE ------------------------------------------------------
  db.run ("CREATE TABLE schedule \
    (id TEXT,\
    date TEXT,\
    begin_time TEXT,\
    end_time TEXT,\
    place TEXT,\
    type TEXT\
    )"
  );
//cse131-------------------------------------------------lectures
  let cse131_lecture_dates = 
    ["'2018-04-04'",
      "'2018-04-06'",
      "'2018-04-09'",
      "'2018-04-11'",
      "'2018-04-13'",
      "'2018-04-16'",
      "'2018-04-18'",
      "'2018-04-20'",
      "'2018-04-23'",
      "'2018-04-25'",
      "'2018-04-27'",
      "'2018-04-30'",
      "'2018-05-02'",
      //"'2018-05-04'",
      "'2018-05-07'",
      "'2018-05-09'",
      "'2018-05-11'",
      "'2018-05-14'",
      "'2018-05-16'",
      "'2018-05-18'",
      "'2018-05-21'",
      "'2018-05-23'",
      "'2018-05-25'",
      "'2018-05-28'",
      "'2018-05-30'",
      "'2018-06-01'",
      "'2018-06-04'",
      "'2018-06-06'",
      "'2018-06-08'"];

  for (entry of cse131_lecture_dates) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'9:00',",
      "'9:50',",
      "'Center Hall 109',",
      "'lecture'",
      ")"].join(' '));
  };

  /*
  db.run("INSERT INTO schedule VALUES\
    ('',\
      '',\
      '',\
      '',\
      ''\
    )"
  );
  */
//cse131-------------------------------------------------discussion
  let cse131_discussion_dates = 
   ["'2018-04-06'",
    "'2018-04-13'",
    "'2018-04-20'",
    "'2018-04-27'",
    "'2018-05-04'",
    "'2018-05-11'",
    "'2018-05-18'",
    "'2018-05-25'",
    "'2018-06-01'",
    "'2018-06-08'"];

  for (entry of cse131_discussion_dates) {
    db.run(
      ["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'12:00',",
      "'12:50',",
      "'Center Hall 119',",
      "'discussion'",
      ")"].join(' '));
  };
//tests
  db.run(["INSERT INTO schedule VALUES",
    "(",
    "'cse131',",
    "'2018-05-04'" + ",",
    "'9:00',",
    "'9:50',",
    "'Center Hall 109',",
    "'midterm'",
    ")"].join(' '));

  db.run(["INSERT INTO schedule VALUES",
    "(",
    "'cse131',",
    "'2018-06-13'" + ",",
    "'8:00',",
    "'11:00',",
    "'TBA',",
    "'final'",
    ")"].join(' '));

  //cse131-------------------------------------------------officehours
  //mondays
  let cse131_officehours_dates_m = 
   ["'2018-04-09'",
    "'2018-04-16'",
    "'2018-04-23'",
    "'2018-04-30'",
    "'2018-05-07'",
    "'2018-05-14'",
    "'2018-05-21'",
    "'2018-05-28'",
    "'2018-06-04'"];

  for (entry of cse131_officehours_dates_m) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'1:00',",
      "'4:00',",
      "'CSE B215',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_m) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'5:00',",
      "'8:00',",
      "'CSE B250a',",
      "'officehours'",
      ")"].join(' '));
  };

  //tuesdays
  let cse131_officehours_dates_t = 
   ["'2018-04-10'",
    "'2018-04-17'",
    "'2018-04-24'",
    "'2018-05-01'",
    "'2018-05-08'",
    "'2018-05-15'",
    "'2018-05-22'",
    "'2018-05-29'",
    "'2018-06-05'"];

  for (entry of cse131_officehours_dates_t) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'9:00',",
      "'1:00',",
      "'CSE B270a',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_t) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'12:00',",
      "'2:00',",
      "'CSE 3206',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_t) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'3:00',",
      "'5:00',",
      "'CSE B275',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_t) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'5:00',",
      "'7:00',",
      "'CSE B240a',",
      "'officehours'",
      ")"].join(' '));
  };
  //thursdays
  let cse131_officehours_dates_r = 
   ["'2018-04-12'",
    "'2018-04-19'",
    "'2018-04-26'",
    "'2018-05-03'",
    "'2018-05-10'",
    "'2018-05-17'",
    "'2018-05-24'",
    "'2018-05-31'",
    "'2018-06-07'"];

  for (entry of cse131_officehours_dates_r) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'11:30',",
      "'1:00',",
      "'CSE B270a',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_r) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'3:00',",
      "'5:00',",
      "'CSE B250a',",
      "'officehours'",
      ")"].join(' '));
  };

  //fridays
  let cse131_officehours_dates_f = 
   ["'2018-04-13'",
    "'2018-04-20'",
    "'2018-04-27'",
    "'2018-05-04'",
    "'2018-05-11'",
    "'2018-05-18'",
    "'2018-05-25'",
    "'2018-06-01'"];

  for (entry of cse131_officehours_dates_f) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'1:00',",
      "'3:00',",
      "'CSE B215',",
      "'officehours'",
      ")"].join(' '));
  };
  for (entry of cse131_officehours_dates_f) {
    db.run(["INSERT INTO schedule VALUES",
      "(",
      "'cse131',",
      entry + ",",
      "'3:00',",
      "'6:00',",
      "'CSE B260',",
      "'officehours'",
      ")"].join(' '));
  };

  //cogs121-------------------------------------------------
  //cogs123-------------------------------------------------

  //create assignments TABLE ------------------------------------------------------
  db.run ("CREATE TABLE assignments \
    (id TEXT,\
    name TEXT,\
    link TEXT,\
    due TEXT\
)"
  );
//cse131-------------------------------------------------
/*
  db.run("INSERT INTO assignments VALUES\
    ('cse131',\
      '',\
      '',\
      '',\
      ''\
    )"
  );
*/

  let cse131_pas= 
   [
     ["'PA0'", "'https://ucsd-cse131-s18.github.io/pa0/'", "'2018-04-11'"],
     ["'PA1'", "'https://ucsd-cse131-s18.github.io/pa1/'", "'2018-04-18'"],
     ["'PA2'", "'https://ucsd-cse131-s18.github.io/pa2/'", "'2018-04-25'"],
     ["'PA3'", "'https://ucsd-cse131-s18.github.io/pa3/'", "'2018-05-02'"],
     ["'PA4'", "'https://ucsd-cse131-s18.github.io/pa4/'", "'2018-05-09'"],
     ["'PA5'", "'https://ucsd-cse131-s18.github.io/pa5/'", "'2018-05-20'"],
     ["'PA6'", "'https://ucsd-cse131-s18.github.io/pa6/'", "'2018-05-20'"],
     ["'PA7'", "'https://ucsd-cse131-s18.github.io/pa7/'", "'2018-05-31'"],
     ["'PA8'", "'https://ucsd-cse131-s18.github.io/pa8/'", "'2018-06-07'"],
     ["'Written 1'", "'https://ucsd-cse131-s18.github.io/written1/'", "'2018-05-14'"],
     ["'Written 2'", "'https://ucsd-cse131-s18.github.io/written2/'", "'2018-06-05'"],
   ];

  for (entry of cse131_pas) {
    db.run(["INSERT INTO assignments VALUES",
      "(",
      "'cse131',",
      entry[0] + ",",
      entry[1] + ",",
      entry[2],
      ")"].join(' '));

  };

  //cogs121-------------------------------------------------
  //cogs123-------------------------------------------------

  //backend use
});

//log
db.each ("SELECT name, schedule FROM courses", (err, row) => {
  //console.log (row.name + ": " + row.schedule);
});

db.each ("SELECT date, id, type FROM schedule", (err, row) => {
  //console.log (row.id + ": " + row.date + ": " + row.type);
});


db.close(); //end
