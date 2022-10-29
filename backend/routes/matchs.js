const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
var db = require('../matchs.js');
var dbranks = require('../ranks.js')

var ranks
dbranks.find().then(res => ranks = res)
/**
 *      /matchs
 *      Control sobre las matchs que se est�n trabajando en la p�gina:
 */

router.get('/', async(req, res, _) => { 
    /**
     *      GET http://localost:3000/matchs Obtener las matchs que se estan trabajando o trabajaron
     *      Parametros: id (opcional) - Regresa una match por su id
     */
    if(req.query.id != null){     
        res.json(await db.findOne(req.query.id));

        console.log("GET match id="+req.query.id)
    }
    else{   
        res.json(await db.find());
    }
});

module.exports = router;
router.post('/', async(req, res) => {
    /**
    *       POST http://localost:3000/matchs crea una nueva resource vacia con id
    *       Sin parametros
    *      
    */
    var nid = 0;
    try {
        nid = (await db.maxId()).id + 1
    }
    catch(e) {
        console.log(e)
    }
    data={
        "id": nid,
        "map": null, 
        "ready": false,
        "team1": null,
        "team2": null
    }
    db.add(data)
    console.log('added')
    console.log(data)
    res.json(data)
});
router.put('/', async(req, res, _) => {
    /**
     *      PUT http://localost:3000/matchs actualiza una match
     *      Parametros: 
     *          -balanced (opcional) true/false - balancea el grupo
     *          -choosemap (opcional) true/false - Elige un mapa de los mapas seleccionados
     */
    if(req.query.balance){
        console.log('balance')
        req.body.team1 = balance(req.body.team1.concat(req.body.team2).sort(function() {return (Math.random()-0.5)}))
        req.body.team2 = req.body.team1.splice(req.body.team1.length/2)
    }
    if(req.query.choosemap && typeof req.body.map !='string') req.body.map = req.body.map[Math.floor(Math.random() * req.body.map.length)];
    console.log(req.body)
    try{
        await db.update(req.body.id, req.body)
    }
    catch(e){
        console.log(e)
    }
    //res.send('Resource updated')
    res.json(req.body)
});
module.exports = router

var rankToNumber = function(rank){
    /**
     * Combierte un rango a un valor numerico
     */
    var res = -1;
    ranks.forEach(elem =>{
        if(elem.name == rank) res = elem.ID
    })
    return res
}
var balance = function(players){
    /**
     * Balancea un array de players, retorna a un arreglo intercalado de bueno con malo.
     * Dividir el retorno a la mitad dar� dos teams balanceados
     */
    players.forEach(r => {
        for(var i = 0; i<players.length-1; i++){
            if(rankToNumber(players[i].rank)>rankToNumber(players[i+1].rank)){

                temp = players[i];
                players[i] = players[i+1];
                players[i+1] = temp
            }
        }
    })
    const res = []
    for(var i = 0; i<players.length; i+=2){
        res[i] = players[i/2]
        res[i+1] = players[players.length-1-(i/2)]
    }
    if(players.length != res.length) res.pop()
    return res
}