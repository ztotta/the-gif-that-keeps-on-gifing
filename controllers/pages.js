var request = require('request');

var passport = require('passport');

var welcome = function(req, res, next) {
  res.render('pages/welcome', { user: req.user });
};

var survey = function(req, res, next) {
	res.render('pages/survey');
};

var showResults = function(req, res, next) {
	res.render('pages/results');
};

module.exports = {
  welcome: welcome,
	survey: survey,
	showResults: showResults
};
