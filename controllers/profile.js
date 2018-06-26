var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');


router.use(express.static(__dirname + '../../public'));

// GET /auth/profile - sends the form to any single profile
router.get('/', isLoggedIn, function(req, res) {
  console.log('req.user', req.user)
  // db.user.find({
  //   where: {req.user}
  // });
  res.render('profile/profile', {user: req.user});
});


module.exports = router;
