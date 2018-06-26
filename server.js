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
  unirest.get("https://trailapi-trailapi.p.mashape.com/?limit=10&q[city_cont]=" + req.query.city + "&q[state_cont]=" +
  req.query.state)
    .header("X-Mashape-Key", process.env.API_KEY)
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log('----------------result.body.places------------', result.body.places);
      console.log('#######################')
      console.log('NEW THING TO LOOK AT FOR --each-- ITEM IN THE ARRAY')
      console.log('-------result.body.places[0].activities example-------', result.body.places[0].activities)
      console.log('#######################')
      res.render('searchResults', {searchResults: result.body.places});
    });
});

// Routes
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
