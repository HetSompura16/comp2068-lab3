'use strict';
var express = require('express');
var router = express.Router();

/* GET father page. */
router.get('/', function (req, res) {
	res.render('father', { name: 'Pankaj', comment: 'He is very hardworking person' });
});

module.exports = router;