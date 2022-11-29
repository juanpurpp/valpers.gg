'use strict';
var jwt = require("jsonwebtoken")
var Users = require('../models/users_schema.js')
const authorize = () =>
 function(req, res, next) {
    const roles= req.body.roles
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Se necesita un token para autentificar");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded)
    if(roles.length > 0){
      Users.findOne({name: req.body.name})
        .then((user) => {
          let allowed = false 
          console.log(user.roles, user.name)
          for (const r of user.roles){
            if (roles.includes(r))
              allowed = true
          }
          if (allowed){
            return next()
          }else{
            return res.status(401).send('Usuario no tiene permisos para realizar la operación')
          }
        })
    }else{
      return next()
      }
  } catch (err) {
    return res.status(401).send("Token invalido");
  }
};


module.exports = authorize
