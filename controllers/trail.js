var express = require('express');
var db = require('../models');
var request = require('request')
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.use(express.static(__dirname + '../../public'));

router.get('/:id', function(req, res){
  console.log('in trail/:name get route')
  var id = req.params.id;
  request("https://www.hikingproject.com/data/get-trails-by-id?ids=" + id + "&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
    var data = JSON.parse(body);
    console.log('##############################################################');
    console.log('data', data);
    res.render('trails/show', {trail: data.trails[0]})
  });
});

// router.post('/:name', function(req, res){
//   console.log('in trail/:name get route')
//   var trailData = req.body;
//   console.log('stuff', req.body)
//   res.redirect(trailData.linkName)
// })

    //sends data in query string, we dont want info in url, we want info in the body
// POST /trail/:name - sends data in the body of the request
// router.post('/:name', function(req, res) {
//   console.log("IN THE POST TRAIL ROUTE");
//   var trailData = req.body;
//   console.log('##############trailData#################', trailData);
//   console.log('^#^#^#^#^#^#^#^#^#^# trailData.activityType', trailData.activityType)
//   // res.render('trails/show', {trailData: trailData});
//   res.render('test')
// });

module.exports = router;
