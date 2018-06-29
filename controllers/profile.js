var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

// GET /auth/profile - sends the form to any single profile
router.get('/', isLoggedIn, function(req, res) {
  db.user.find({
    where: {id: req.user.id}
    // use user b/c we found a user
  }).then(function(user) {
    user.getTrails().then(function(trails) {
// %%%%%%%%%%requery the api for each id!!%%%%%%next step

      res.render('profile/profile', {
        user: user,
        trails: trails
      });
    });
  });
});



// DELETE /auth/profile - deletes one favorite item from the list**
router.delete('trails/:name', function(req, res) {
  var trailToDelete = req.params.name;
  res.send({message: 'You have successfully deleted the trail'});
});

module.exports = router;
