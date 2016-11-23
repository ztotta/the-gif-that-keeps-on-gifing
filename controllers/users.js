// Require resource's model(s).
var User = require("../models/user");

//var index = function(req, res, next){
//  User.find({}, function(err, users) {
//    if (err) {
//      res.json({message: err});
//    } else {
//      res.render('pages/welcome', {users: users});
//    }
//  });
//};

var postResults = function(req, res, next) {
		User.findOne({_id: req.user._id}, function(err, user) {
			user.surveySelections = [];
			user.surveySearchValues = [];
			user.save();
//			console.log('After save: ' + user);
			
			req.body.sS.forEach(function(surveySelection) {
//				console.log(surveySelection);
				user.surveySelections.push(surveySelection);
			})
			req.body.sSV.forEach(function(surveySearchValue) {
//				console.log(surveySearchValue);
				user.surveySearchValues.push(surveySearchValue);
			})
//			console.log("Results posted by " + req.user.name);
//			console.log("Results = " + user.surveySelections);
//			console.log("Results = " + user.surveySearchValues);
			user.save(function(err, savedUser) {
				if (err) {
					res.json({success: false, error: err});
				} else {
					res.json({success: true, user: savedUser});
				}
			})
		})
};

var showResults = function(req, res, next) {
	if (!req.user) {
			res.redirect('/');
	}
	
	User.findOne({_id: req.user._id}, function(err, user) {
		var surveySelections = user.surveySelections;
		var surveySearchValues = user.surveySearchValues;
//		console.log("sSV from showResults: " + surveySearchValues);
//		console.log("User " + user);
			res.render('pages/results', 
				{user: req.user, surveySelections: surveySelections, surveySearchValues: surveySearchValues})
	})
};

module.exports = {
//  index: index,
	postResults: postResults,
	showResults: showResults
};
