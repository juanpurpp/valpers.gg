var express = require('express');
var router = express.Router();
var db = require('../agents.js');
/**
 *      /agents
 *      Obtener los agentes disponibles en el juego.
 */

/**
 *      GET http://localost:3000/agents Obtener los agentes guardados
 */
router.get('/', function(req, res, _){
    if(req.query.id == null){
        db.find().then(result =>{
            res.json(result);
            console.log(result +"\nid="+req.query.id)
        });
    }
});

module.exports = router;