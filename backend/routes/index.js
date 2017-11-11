var express = require('express');
var router = express.Router();
var common = require('./../controllers/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sidebar', function(req, res, next) {
	common.getSideBarMenu(function (result) {
		res.send(result);
	})
});


module.exports = router;
