// server

require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var flash = require('connect-flash');
var unirest = require('unirest');
var request = require('request')
var geocoder = require('geocoder');

var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));


//1. THIS NEEDS to come before your app.use passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

//2. Setup flash messages
app.use(flash());

// 3.THIS MUST come after the session setup
app.use(passport.initialize());
app.use(passport.session());

// 4.Attach the current user to the response for all routes
// Also, attach the flash messages
app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
})

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/search', function(req, res) {
  var city = req.body.city;
  var state = req.body.state;
  var distance = req.body.distance;
  var address = city + ", " + state;
  //use Geocoder to get Lat / Lng of user based on entered city(req.body.city), state(req.body.state)
  //Pass geocoder information into new API (below)
  //update form to get max distance
  geocoder.geocode(address, function(err, data) {
    if (err) return err;
    console.log('inGEOcoder!$$$$$$$$$$$$$$$$$', data.results[0].geometry)
    var lat = data.results[0].geometry.location.lat;
    var lng = data.results[0].geometry.location.lng;
    request("https://www.hikingproject.com/data/get-trails?lat="+ lat +"&lon="+ lng +"&maxDistance="+ distance +"&key=" + process.env.HIKING_PROJECT_KEY, function(error, response, body) {
      var data = JSON.parse(body);
      console.log('<:)<:)<:)<:)<:)<:)ICE CREAAAAAAAAAMMMMMMMM!!!!<:)<:)<:)<:)<:)<:)<:)<:)<:)');
      console.log('data', data.trails);
      res.render('searchResults', {searchResults: data.trails})
    });
  });
});


// Routes
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/trail', require('./controllers/trail'));


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
