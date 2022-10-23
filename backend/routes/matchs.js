var express = require('express');
var router = express.Router();

var db = require('../matchs.js');
/**
 *      /matchs
 *      Control sobre las matchs que se est�n trabajando en la p�gina:
 */

/**
 *      GET http://localost:3000/matchs Obtener las matchs que se estan trabajando o trabajaron
 *      Parametros: id (opcional) - Regresa una match por su id
 */
router.get('/', async(req, res, _)=>{ 
    if(req.query.id == null){     
        res.json(await db.find());
        console.log("GET match id="+req.query.id)
    }
    else{   
        res.json(await db.find().then);
    }
});

module.exports = router;
router.post('/', function (req, res) {
    /* parametros posibles
        id: La id de la match

    */
});
router.put('/', function(req, res, _){
});
module.exports = router
