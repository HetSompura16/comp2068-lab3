'use strict';
var express = require('express');
var router = express.Router();

/* GET sibling page. */
router.get('/', function (req, res) {
	res.render('sibling', { name: 'Darpen', comment: 'he is very talented' });
});

module.exports = router;