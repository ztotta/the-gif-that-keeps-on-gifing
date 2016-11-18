var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var answerSchema = new mongoose.Schema({
    answer01:   String,
    answer02:   String,
    answer03:   String,
    answer04:   String,
    answer05:   String,
    answer06:   String,
    answer07:   String,
    answer08:   String,
    answer09:   String,
    answer10:   String
})

var userSchema = new mongoose.Schema({
    answers: [answerSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
