var request = require('request');

var passport = require('passport');

var welcome = function(req, res, next) {
  res.render('pages/welcome', { user: req.user });
};

var survey = function(req, res, next) {
	if (!req.user) {
			res.redirect('/');
	} else {
			res.render('pages/survey', { user: req.user });
	}
};

var about = function(req, res, next) {
	res.render('pages/about', { user: req.user });
};

module.exports = {
  welcome: welcome,
	survey: survey,
	about: about
};
