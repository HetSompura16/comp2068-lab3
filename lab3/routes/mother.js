'use strict';
var express = require('express');
var router = express.Router();

/* GET mother page. */
router.get('/', function (req, res) {
	res.render('mother', { name: 'Bhavika', comment: 'She is my favourite' });
});

module.exports = router;