var express = require('express'),
    router  = new express.Router();
    request = require('request');

var passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

// Root path:
router.get('/', pagesController.welcome);

router.get('/survey', pagesController.survey);
router.get('/about', pagesController.about);
router.get('/results', usersController.showResults);
router.put('/results', usersController.postResults);
router.get('/myresults', usersController.showResults);
router.get('/getMyId', usersController.getMyId);

// Path for sharing results with non-logged-in users:
router.get('/shareMyResults/:user_id', usersController.shareResults);

//----------------------//

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('*', function(req, res){
  res.redirect('/');
});

//----------------------//


module.exports = router;
