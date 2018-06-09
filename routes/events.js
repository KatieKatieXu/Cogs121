/* allows the calendar to get the coures information as well as filter the events by type on the calendar */

const express = require('express');
const router = express.Router({});
const pug = require('pug');
const moment = require('moment');

const data = require('../data.json');

/* GET event data */
router.get('/', function(req, res) {
  let result = [];

  let courseFilters = req.query.courses.split(',');
  let eventFilters = req.query.events.split(',');

  data.forEach(source => {
    if (courseFilters.includes(source.id)) {
      let filtered = [];
      source.events.forEach(event => {
        if (eventFilters.includes(event.type)) {
          filtered.push(event);
        }
      });
      result.push({
        id: source.id,
        name: source.name,
        color: source.color,
        events: filtered
      });
    }
  });

  res.send(result);
});

router.get('/:courseId/:eventId', function(req, res) {
  data.forEach(source => {
    if (source.id === req.params.courseId) {
      source.events.forEach(event => {
        if (event.id === parseInt(req.params.eventId)) {
          switch (event.type) {
            case "lecture":
              res.render('templates/lecture', Object.assign({
                date: moment(event.start).format('dddd, MMM D'),
                time: moment(event.start).format('h:mma')  + ' - ' + moment(event.end).format('h:mma'),
              }, event));
              break;
            case 'officehours':
              res.render('templates/officehours', Object.assign({
                date: moment(event.start).format('dddd, MMM D'),
                time: moment(event.start).format('h:mma')  + ' - ' + moment(event.end).format('h:mma'),
              }, event));
              break;
            case 'assignment':
              res.render('templates/deadline', Object.assign({
                date: moment(event.start).format('dddd, MMM D'),
                time: moment(event.start).format('h:mma')
              }, event));
          }
        }
      });
    }
  });
});

module.exports = router;
