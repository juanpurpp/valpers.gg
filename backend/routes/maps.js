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
router.post('/', function(req,res, _){
        db.addAll(req.body)
        .then(res.status(200).send('Mapas cambiados'))
        .catch(function(error){console.log(error)})
})
module.exports = router;