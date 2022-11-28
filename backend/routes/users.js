const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var authorize = require('../controllers/auth_controller.js')
var db = require('../users.js');
router.post('/auth', authorize(), function(req, res, next) {
  res.send('authorized user');
});

router.post('/', async(req,res) => {
  try{ db.add({"name": req.body.name,"password": req.body.password, "roles": "usuario"});
  }
  catch(e){
    console.log(e)
  }
  res.send('Usuario creado :v')
} );
router.post('/login', function(req, res) {
  console.log(req.body)
  db.findOne(req.body.name)
 .then((user => {
   if (!user || !user.comparePassword(req.body.password)) {
       return res.status(401).json({ message: 'Usuario o contraseña erroneos' });
   }
   const token = jwt.sign({  user_id: user._id, roles: user.roles}, process.env.JWT_KEY, {expiresIn: "7d"})
   user.token = token
   return res.status(200).json({ token: token, roles: user.roles, id: user._id});
 }))
 .catch ((error) => {
  console.log(error) 
})
});
module.exports = router;