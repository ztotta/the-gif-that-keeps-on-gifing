var request = require('request');

var passport = require('passport');

var welcome = function(req, res, next) {
  res.render('pages/welcome', { user: req.user });
};

module.exports = {
    welcome: welcome
};
