var express = require('express');
var router = express.Router();
var db = require('../ranks.js');
const path = require('path');
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
router.get('/image', async(req, res, _) =>{

    if(req.query.name != null){
        req.query.name = req.query.name.replace("-"," ")
        if(typeof req.query.name !== 'string'){
            res.send('Debe entregar un id valida')
            return
        }
        db.findRank(req.query.name).then(result =>{
            console.log('result.img es '+ result.img)
            res.sendFile(result.img,{ root: path.join(__dirname, '../img') })
            console.log('imagen enviada')
        });
    }
    else{
        db.find().then(result =>{
            res.json(result);
            console.log(result +"\nname="+req.query.name)
            console.log('LA CONCHAAA')
        });
    }
    
});

module.exports = router;