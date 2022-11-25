var express = require('express');
var jwt = require('jsonwebtoken')
var Users = require('../models/users_schema.js')
var router = express.Router();

router.post('/', function(req, res) {
     console.log(req.body)
     Users.findOne({name: req.body.name})
    .then((user => {
      if (!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({ message: 'Usuario o contraseña erroneos' });
      }
      const token = jwt.sign({ email: user.email, user_id: user._id, roles: user.roles}, process.env.JWT_KEY, {expiresIn: "7d"})
      user.token = token
      return res.status(200).json({ token: token, email: user.email, roles: user.roles, id: user._id});
    }))
    .catch ((error) => {
     console.log(error) 
   })
});

module.exports = router;
