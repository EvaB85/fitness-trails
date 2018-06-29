var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

// GET /auth/profile - sends the form to any single profile
router.get('/', isLoggedIn, function(req, res) {
  console.log('req.user', req.user)
  res.render('profile/profile', {user: req.user});
});

// DELETE /auth/profile - deletes one favorite item from the listen**
router.delete('trails/:name', function(req, res) {
  var trailToDelete = req.params.name;
  res.send({message: 'You have successfully deleted the trail'});
});

$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var teamElement = $(this);
  var teamUrl = teamElement.attr('href');
  $.ajax({
    method: 'DELETE',
    url: teamUrl
  }).done(function(data) {
    // get data returned from the DELETE route
    console.log(data);

    // do stuff when the DELETE action is complete
    teamElement.remove();

    // or, you can redirect to another page
    window.location = '/teams';
  });
});
module.exports = router;
