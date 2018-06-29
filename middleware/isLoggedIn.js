
module.exports = function(req, res, next) {
  if (!req.user) {
    req.flash('error', 'You must be logged in to access this page.');
    res.redirect('/auth/login');
  } else {
    next();
  }
}

/////////BELOW IS FOR STUDYING..DELETE BEFORE SUMBITTING!

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
