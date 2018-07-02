var express = require('express');
var db = require('../models');
var request = require('request')
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.use(express.static(__dirname + '../../public'));

// GET /trail/:id
router.get('/:id', function(req, res){
  console.log('in trail/:id get route')
  var id = req.params.id;
  request("https://www.hikingproject.com/data/get-trails-by-id?ids=" + id + "&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('trails/show', {trailData: data.trails[0]})
  });
});

// POST /trail
router.post('/', isLoggedIn, function(req, res) {
  // saving a trail (favorite)
  db.trail.findOrCreate({
    where: {
      uniqueTrailId: req.body.trailId
    }
  }).spread(function(trail, created) {
    console.log('~~~~~~~~~~~~CREATED?: ', created)
    db.user.find({
      where: {id: req.user.id}
    }).then(function(user, created) {
      user.addTrail(trail).then(function(trail) {
        console.log('KYLE REDIRECT')
        res.redirect('/trail/' + req.body.trailId);
      });
    })
  });
});

module.exports = router;
