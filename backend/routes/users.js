var express = require('express');
var router = express.Router();
var common = require('./../controllers/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/sidebar', function(req, res, next) {
	common.getSideBarMenu();
  res.send('respond with a resource');
});


module.exports = router;
