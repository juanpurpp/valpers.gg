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
    if(req.query.name != null){
        if(typeof req.query.name !== 'string'){
            res.send('Debe entregar un id valida')
            return
        }
        db.findAgent(req.query.name).then(result =>{
            res.json(result);
            console.log(result +"\nname="+req.query.name)
        });
    }
    else{
        db.find().then(result =>{
            res.json(result);
            console.log(result +"\nname="+req.query.name)
        });
    }
        
});

module.exports = router;