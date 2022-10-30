var express = require('express');
var router = express.Router();
var db = require('../ranks.js');
/**
 *      /ranks
 *      Obtener los ranks disponibles en el juego.
 */

/**
 *      GET http://localost:3000/ranks Obtener los agentes guardados
 */
router.get('/', function(req, res, _){

    if(req.query.name != null){
        req.query.name = req.query.name.replace("-"," ")
        if(typeof req.query.name !== 'string'){
            res.send('Debe entregar un id valida')
            return
        }
        db.findRank(req.query.name).then(result =>{
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