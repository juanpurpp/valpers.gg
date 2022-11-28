const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
//var authorize = require('../controllers/auth_controller.js')
var db = require('../users.js');
/*router.get('/', authorize(['admin']), function(req, res, next) {
  res.send('authorized user');
});*/

router.post('/', async(req,res) => {
  try{ db.add({"name": req.body.name,"password": req.body.password, "roles": "usuario"});
  }
  catch(e){
    console.log(e)
  }
  res.send('Usuario creado :v')
} );
module.exports = router;