const express = require('express');
const router = express.Router();

const model = require('/home/jasper/launch/ucsd/121/Cogs121/models/courses.js');

router.get('/events/', function (req, res) { 
  res.send (model (req.classes, req.event_types));
});

//console.log (model(['cse131'], []));

module.exports = router;
