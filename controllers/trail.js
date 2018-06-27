var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

router.post('/', function(req, res) {
  var trailData = JSON.parse(req.body);
  // var trailData = req.body;
  console.log('##############trailData#################', trailData);
  console.log('^#^#^#^#^#^#^#^#^#^# trailData.city', trailData.city)
  // res.render('trails/show');
  res.send('yay');
});


module.exports = router;


// router for all routes that are /trail


// hidden inputs or long list of data
