var express = require('express'),
    router  = new express.Router();
    request = require('request');

var passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

// root path:
router.get('/', pagesController.welcome);
router.get('/survey', pagesController.survey);
router.get('/results', usersController.showResults);
router.put('/results', usersController.postResults);
router.get('/about', pagesController.about);

//----------------------//

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

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

//-------------//


module.exports = router;
