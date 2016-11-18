var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var surveySchema = new mongoose.Schema({
    answerSets: []
})

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    surveys: [surveySchema],
    created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
