var express = require('express');
var router = express.Router();
var db = require('../maps.js');
/**
 *      /maps
 *      Obtener los mapas disponibles en el juego.
 */

/**
 *      GET http://localost:3000/maps Obtener los mapas guardados
 */
router.get('/', function(req, res, _){
    req.query.name = req.query.name.replace("-"," ")

    if(req.query.name != null){
        if(typeof req.query.name !== 'string'){
            res.send('Debe entregar un id valida')
            return
        }
        db.findMap(req.query.name).then(result =>{
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