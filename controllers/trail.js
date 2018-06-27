var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.use(express.static(__dirname + '../../public'));

// GET /trail/:id - returns a single trail to show
router.get('/:id', function(req, res) {
  var id = parseInt(req.body.id);
  db.trail.find({
    where: {
      id: id
    }
  }).then(function(data) {
    var trailUrl ="https://trailapi-trailapi.p.mashape.com/?limit=20&q[city_cont]="
    request(pokemonUrl, function(error, response, body) {
      var favoritePokemon = JSON.parse(body);
      res.render('favorites/show', {
        favoritePokemon: favoritePokemon
      })
    })
  });
});

    //sends data in query string, we dnt want info in url, we want info in the body
// POST /trail/:name - sends data in the body of the request
router.post('/:name', function(req, res) {
  var trailData = req.body;
  console.log('##############trailData#################', trailData);
  console.log('^#^#^#^#^#^#^#^#^#^# trailData.activityType', trailData.activityType)
  res.render('trails/show', {trailData: trailData});
  // res.send('yay');
});

module.exports = router;
