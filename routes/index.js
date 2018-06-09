/* render one of the two main pages of the site */

const express = require('express');
const router = express.Router({});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {currentUrl: '/'});
});

router.get('/status', function(req, res) {
  res.render('test', {currentUrl: '/status'});
});

module.exports = router;
