var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');
var passport = require('../config/passportConfig');
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

// GET /profile - sends the form to any single profile
router.get('/', isLoggedIn, function(req, res) {
  db.user.find({
    where: {id: req.user.id}
  }).then(function(user) {
    user.getTrails().then(function(trails) {
      var trailsIdArray = [];
      trails.forEach(function(trail) {
        trailsIdArray.push(trail.uniqueTrailId);
      });
      var idString = trailsIdArray.join(',');
      console.log(idString);
      request("https://www.hikingproject.com/data/get-trails-by-id?ids=" + idString + "&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
        var data = JSON.parse(body);
        res.render('profile/profile', {user: user, trails: data.trails});
      });
    });
  });
});

// GET /profile/edit - route to edit page
router.get('/edit', function(req, res) {
  res.render('profile/update', {user: req.user});
});


// DELETE /profile/trail/:id - deleting a join table entry
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

// PUT /profile/edit - editing user name and email
router.put('/edit', function(req, res) {
  db.user.update({
    name: req.body.name
  }, {
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    res.sendStatus(200);
  });
});

module.exports = router;
