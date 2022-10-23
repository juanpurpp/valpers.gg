var express = require('express');
var router = express.Router();
<<<<<<< Updated upstream
var db = require('../matchs.js');
/**
 *      /matchs
 *      Control sobre las matchs que se est�n trabajando en la p�gina:
 */

/**
 *      GET http://localost:3000/matchs Obtener las matchs que se estan trabajando o trabajaron
 *      Parametros: id (opcional) - Regresa una match por su id
 */
router.get('/', function(req, res, _){ 
    if(req.query.id == null){
        db.find().then(result =>{
            res.json(result);
            console.log("GET match id="+req.query.id)
            console.log(result);
        });
    }
    else{
        db.find().then(result =>{
            res.json(result);
            console.log(result +"\nid="+req.query.id)
        });
    }
});

module.exports = router;
=======
router.post('/', function (req, res) {
    /* parametros posibles
        id: La id de la match

    */
});
router.get('/', function(req, res, _){
});
module.exports = router
>>>>>>> Stashed changes
