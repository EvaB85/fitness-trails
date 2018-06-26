
module.exports = function(req, res, next) {
  if (!req.user) {
    req.flash('error', 'You must be logged in to access that page, jerk!');
    res.redirect('/auth/login');
  } else {
    next();
  }
}

/////////

// var req = {
//   header: {
//     stuff: 'stuff'
//   },
//   body: {
//     dataOne: 'data stuff',
//     dataTwo: 'more data',
//     dataThree: 'titty mcgee'
//   },
//   user: {
//     username: 'eva',
//     sessionId: 213832827
//   }
// };
