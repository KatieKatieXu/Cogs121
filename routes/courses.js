const express = require('express');
const router = express.Router();

const model = require('/home/jasper/launch/ucsd/121/Cogs121/models/courses.js');

//router.get('/', function (req, res) { }
//router.get('/events/', function (req, res) { }



router.get('/events/', function (req, res) { });

router.get('/events/:id', function (req, res) { });

console.log (model(['cse131'], []));





module.exports = router;
