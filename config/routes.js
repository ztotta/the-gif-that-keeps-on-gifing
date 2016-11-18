var express = require('express'),
    router  = new express.Router();
    request = require('request');

// Require controllers.
var pagesController = require('../controllers/pages');
//var usersController = require('../controllers/users');

// root path:
router.get('/', pagesController.welcome);

module.exports = router;
