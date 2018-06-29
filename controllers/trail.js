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
  // after ? pass in info in query string , parameter and then the value
  request("https://www.hikingproject.com/data/get-trails-by-id?ids=" + id + "&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
    // parse body, data --> something we can work with, data we got back from API, in an OBJECT form b/c of JSON.parse (was in JSON see w3schools)
    var data = JSON.parse(body);
    console.log('##############################################################');
    console.log('data', data);
                                // this data is representing ONE trail we name it trail NOT trails
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
    db.user.find({
      where: {id: req.user.id}
      // user we found
    }).then(function(user, created) {
      // add a trail
      user.addTrail(trail).then(function(trail) {
        // req.flash('success', "Added to Favorites' list");
        // redirecting them to the same page (pass an actual value, actual page they are on)
        res.redirect('/trail/' + req.body.trailId);
      });
    })
  });
});

// need profiles page to show my Favorites**********
// i need an EDIT and a PUT and delete********
// change the users email CRUD , NEED PUT route edit...edit the user's name or email
// make my SHOW page display all info i want
// results page display all info I want **********

// all our trail routes

module.exports = router;
