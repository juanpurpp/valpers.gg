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
        console.log(req.query.id)
        console.log(Number.isInteger(req.query.id))
        /*if(!Number.isInteger(req.query.id)){
            res.send('Debe entregar un id valida')
            return
        }*/  
        res.json(await db.findOne(req.query.id));

        console.log("GET match id="+req.query.id)
    }
    else{   
        try {
            res.json(await db.find());
        }
        catch(e){
            console.log('error recibiendo matchs de la base de datos')
            console.log('error: ' + e)
        }
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
        "meta": {
            "avgRankTeam1": null,
            "avgRankTeam2": null
        },
        "map": null, 
        "ready": false,
        "team1": null,
        "team2": null
    }
    try{
        db.add(data)
    }
    catch(e){
        console.log('POST MATCH ERROR ADDING DATA')
        console.log('error: '+e)
    }
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
    /*if(!Number.isInteger(req.body.id)){
        res.send('Debe entregar un id valida')
        return
    }*/
    req.body.meta = null;
    req.query.randomize = (req.query.randomize == 'true')
    req.query.balance = (req.query.balance == 'true')
    req.query.choosemap = (req.query.choosemap == 'true')
    if(req.query.randomize){
        req.body.team1 = req.body.team1.concat(req.body.team2).sort(function() {return (Math.random()-0.5)})
        req.body.team2 = req.body.team1.splice(req.body.team1.length/2)
        console.log('randomize: ')
        console.log(req.query.randomize)
    }
    if(req.query.balance){
        console.log('balance')
        req.body.team1 = balance(req.body.team1.concat(req.body.team2).sort(function() {return (Math.random()-0.5)}))
        req.body.team2 = req.body.team1.splice(req.body.team1.length/2)
    }
    if(req.query.choosemap && typeof req.body.map !='string') req.body.map = req.body.map[Math.floor(Math.random() * req.body.map.length)];
    req.body.meta.avgRankTeam1 = avgRank(req.body.team1)
    req.body.meta.avgRankTeam2 = avgRank(req.body.team2)
    console.log(req.body)
    try{ await db.update(req.body.id, req.body)
    }
    catch(e){
        console.log('PUT MATCH ERROR UPDATING')
        console.log('error: '+e)
    }
    //res.send('Resource updated')
    res.json(req.body)
});
module.exports = router

const avgRank = function(team){ //calcula el rango promedio en valor
    var avg = 0;
    for(var player of team) {avg += rankToNumber(player.rank);}
    return numberToRank(avg/=team.length)
}
var rankToNumber = function(rank){
    /**
     * Combierte un rango a un valor numerico
     */
    for(var r of ranks) if(r.name == rank) return r.ID
    return -1
}
var numberToRank = function(valor){
    /**
     * Combierte un numero a rango, aproxima si es flotante
     */
    for(var r of ranks) if(r.ID == Math.round(valor)) return r.name
    return -1
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