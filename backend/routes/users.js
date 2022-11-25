var express = require('express');
var router = express.Router();
var authorize = require('../controllers/auth_controller.js')

router.get('/', authorize(['admin']), function(req, res, next) {
  res.send('authorized user');
});

module.exports = router;