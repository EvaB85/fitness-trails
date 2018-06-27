var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.use(express.static(__dirname + '../../public'));

// GET /trail/:name - returns a single trail to show
    //sends data in query string, we dnt want info in url, we want info in the body

// POST /trail/:name - sends data in the body of the request
router.post('/:name', function(req, res) {
  var trailData = req.body;
  console.log('##############trailData#################', trailData);
  console.log('^#^#^#^#^#^#^#^#^#^# trailData.activityType', trailData.activityType)
  res.render('tr3ails/show', {trailData: trailData});
  // res.send('yay');
});

module.exports = router;
