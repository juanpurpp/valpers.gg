var express = require('express');
var router = express.Router();
var db = require('../ranks.js');

router.get('/', function(req, res, _){
    if(req.query.id == null){
        db.find().then(result =>{
            res.json(result);
            console.log(result +"\nid="+req.query.id)
        });
    }
});

module.exports = router;