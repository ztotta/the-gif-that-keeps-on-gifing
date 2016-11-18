var _ = require('lodash');

var localEnvVars = {
  TITLE:      'the-gif-that-keeps-on-gifing',
  SAFE_TITLE: 'the-gif-that-keeps-on-gifing'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
