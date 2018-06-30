var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');
var passport = require('../config/passportConfig');
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

// GET /auth/profile - sends the form to any single profile
router.get('/', isLoggedIn, function(req, res) {
  db.user.find({
    where: {id: req.user.id}
    // use user b/c we found a user
  }).then(function(user) {
    user.getTrails().then(function(trails) {
      // Requery the API with selected id's
      var trailsIdArray = [];
      trails.forEach(function(trail) {
        trailsIdArray.push(trail.uniqueTrailId);
      });
      var idString = trailsIdArray.join(',');
      console.log(idString);
      request("https://www.hikingproject.com/data/get-trails-by-id?ids=" + idString + "&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
        // parse body, data --> something we can work with, data we got back from API, in an OBJECT form b/c of JSON.parse (was in JSON see w3schools)
        var data = JSON.parse(body);
        console.log('##############################################################');
        console.log('data', data);
        res.render('profile/profile', {user: user, trails: data.trails});
      });
    });
  });
});

// DELETE /auth/profile - deletes one favorite item from the list**
// deleting from our database..see above...access with db.modelname.function
// function is find create delete etc
router.delete('/trail/:id', function(req, res) {
  console.log('in DELETE$$$$$$$$$');
  db.trail.find({
    where: {
      uniqueTrailId: req.params.id
    }
  }).then(function(trail) {
    db.trailsUsers.destroy({
      where: {
        trailId: trail.id,
        userId: req.user.id
      }
    }).then(function(data) {
      console.log(data);
      console.log('~~~~~~~~~ DELETED entry ~~~~~~~~')
      res.sendStatus(200);
      // res.redirect('/profile/' + req.user.id));
      });
    });
  });






// also look up the Sequelize help function for deleting a record off a join table

// work on styling and adding all the info you want on the profile page
// do NOT delete the for each...you can move it, but don't delete it

module.exports = router;
