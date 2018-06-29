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
    res.render('trails/show', {trail: data.trails[0]})
  });
});



// all our trail routes

module.exports = router;
