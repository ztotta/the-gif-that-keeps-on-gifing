// Require resource's model(s).
var User = require("../models/user");

var index = function(req, res, next){
  User.find({}, function(err, users) {
    if (err) {
      res.json({message: err});
    } else {
      res.render('pages/welcome', {users: users});
    }
  });
};

var postResults = function(req, res, next) {
//	user = 
	
		console.log('post route clicked');
		console.log(req.body.sT);
	res.json({success: true});
//	res.redirect_to('/pages/results', { user: req.user });
};

var showResults = function(req, res, next) {
	res.render('pages/results', { user: req.user });
};

module.exports = {
  index: index,
	postResults: postResults,
	showResults: showResults
};
