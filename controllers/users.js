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
		User.findOne({_id: req.user._id}, function(err, user) {
			req.body.sS.forEach(function(surveySelection) {
				console.log(surveySelection);
				user.surveySelections.push(surveySelection);
			})
			req.body.sSV.forEach(function(surveySearchValue) {
				console.log(surveySearchValue);
				user.surveySearchValues.push(surveySearchValue);
			})
			console.log("Results posted by " + req.user.name);
			console.log("Results = " + user.surveySelections);
			console.log("Results = " + user.surveySearchValues);
		})
		res.json({success: true});
};

var showResults = function(req, res, next) {
	res.render('pages/results', { user: req.user });
};

module.exports = {
  index: index,
	postResults: postResults,
	showResults: showResults
};
