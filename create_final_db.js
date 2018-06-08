/*
 * Building db. the terminal interface to the database creation for the site
 * this populates all tables in the database and is tested with
 * routes/get_database.js
 *
 * This is a refactoring of create_database.js with a much simpler setup.
 * create_database.js is left in as a source for the programatic creation of
 * dabase elements as a superset of what exists in this file as we cut down on
 * features in this file.
 *
 * I think we were ultimately unable to get the backend working as required by
 * the class - and this was mostly my fault. 
 * I hope that I, Jasper, can take the loss of points instead of my teammates.  
 *
 */

const sqlite3 = require ('sqlite3');
const db = new sqlite3.Database ('./classes.db');
//increments the unique id of elements pushed into the events table for frontend logic
let idnum = 1; 

//sequentially
db.serialize(() => {
//create courses TABLE ------------------------------------------------------
  db.run ("CREATE TABLE courses \
    (id TEXT,\
    name TEXT\
    )"
  );

//create events TABLE ------------------------------------------------------
  db.run ("CREATE TABLE events \
    (id TEXT,\
    title TEXT,\
    start TEXT,\
    end TEXT,\
    place TEXT,\
    type TEXT\
    )"
  );
//fill----------------------------------------------------------------------
  let date_table_131 = 
    [ "'2018-04-04",
      "'2018-04-06",
      "'2018-04-09",
      "'2018-04-11",
      "'2018-04-13",
      "'2018-04-16",
      "'2018-04-18",
      "'2018-04-20",
      "'2018-04-23",
      "'2018-04-25",
      "'2018-04-27",
      "'2018-04-30",
      "'2018-05-02",
      //"'2018-05-04'",
      "'2018-05-07",
      "'2018-05-09",
      "'2018-05-11",
      "'2018-05-14",
      "'2018-05-16",
      "'2018-05-18",
      "'2018-05-21",
      "'2018-05-23",
      "'2018-05-25",
      "'2018-05-28",
      "'2018-05-30",
      "'2018-06-01",
      "'2018-06-04",
      "'2018-06-06",
      "'2018-06-08"];
  let cse131_discussion_dates = 
   ["'2018-04-06",
    "'2018-04-13",
    "'2018-04-20",
    "'2018-04-27",
    "'2018-05-04",
    "'2018-05-11",
    "'2018-05-18",
    "'2018-05-25",
    "'2018-06-01",
    "'2018-06-08"];

  for (entry of date_table_131) {
    db.run(["INSERT INTO events VALUES",
      "(",
      idnum++ +",",
      "'CSE 131 Lecture',",
      entry + "T09:00:00',",
      entry + "T09:50:00',",
      "'Center Hall 109',",
      "'lecture'",
      ")"].join(' '));
  };
  for (entry of cse131_discussion_dates) {
    db.run(["INSERT INTO events VALUES",
      "(",
      idnum++ +",",
      "'CSE 131 Discussion',",
      entry + "T12:00:00',",
      entry + "T12:50:00',",
      "'Center Hall 119',",
      "'discussion'",
      ")"].join(' '));
  };

});
