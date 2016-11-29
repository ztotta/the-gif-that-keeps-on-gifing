// Require resource's model(s).
var User = require("../models/user");

// This route saves the user's survey results to the database, replacing any previous 
// results. These results are later retrieved for the timeline view ('results.ejs'):
var postResults = function(req, res, next) {
		User.findOne({_id: req.user._id}, function(err, user) {
			user.surveySelections = [];
			user.surveySearchValues = [];
			user.save();
			
			req.body.sS.forEach(function(surveySelection) {
				user.surveySelections.push(surveySelection);
			})
			req.body.sSV.forEach(function(surveySearchValue) {
				user.surveySearchValues.push(surveySearchValue);
			})
			user.save(function(err, savedUser) {
				if (err) {
					res.json({success: false, error: err});
				} else {
					res.json({success: true, user: savedUser});
				}
			})
		})
};

// This route allows the user to see their results at any time on the page (after they
// have completed at least one survey) by grabbing their results and sending them to the
// timeline view ('results.ejs'):
var showResults = function(req, res, next) {
	if (!req.user) {
			res.redirect('/');
	}
	
	User.findOne({_id: req.user._id}, function(err, user) {
		var surveySelections = user.surveySelections;
		var surveySearchValues = user.surveySearchValues;
			res.render('pages/results', 
				{user: req.user, surveySelections: surveySelections, surveySearchValues: surveySearchValues})
	})
};

// When the user clicks 'Share' from the results page, this route grabs the user's id
// so that it can be appended to the newly created URL:
var getMyId = function(req, res, next) {
	if (!req.user) {
			res.redirect('/');
	}
	
	User.findOne({_id: req.user._id}, function(err, user) {
			res.json({user: user})
	})
};

// This action replicates the showResults action, but allows the page to be viewed by
// non-logged-in users (i.e. when viewing someone else's results from a shared link):
var shareResults = function(req, res, next) {
	User.findOne({_id: req.params.user_id}, function(err, user) {
		var surveySelections = user.surveySelections;
		var surveySearchValues = user.surveySearchValues;
			res.render('pages/results', 
				{user: '', surveySelections: surveySelections, surveySearchValues: surveySearchValues})
	})
};

module.exports = {
	postResults: postResults,
	showResults: showResults,
	getMyId: getMyId,
	shareResults: shareResults
};
