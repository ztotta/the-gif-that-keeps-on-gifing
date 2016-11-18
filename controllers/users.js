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

module.exports = {
  index: index
};
