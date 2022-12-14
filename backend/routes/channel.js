const {PubSub} = require('@google-cloud/pubsub');
var channel =[]

const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
router.post('/', async(req, res, _) => { 
    
    const pubsub = new PubSub();
// create a new channel with the given name
    channel.push(pubsub.channel('valpers-channel.'+req.query.code));

    res.status(200).send('channel creado: ' + 'valpers-channel.'+req.query.code)
});
var test = '';

const testSend = () => function(req, res, next){
    new Promise(function(resolve, reject) {
        // Setting 2000 ms time
        setTimeout(resolve, 10000);
    }).then(function() {
        const pubsub = new PubSub();
        const testchannel= pubsub.channel(req.query.channel);
        testchannel.publish('Prueba test de '+req.query.channel);
        console.log('mensaje de prueba publicado')
    });
    return next()
}
router.get('/test', testSend(), async(req, res, next) => { 
    const pubsub = new PubSub();
    const testchannel= pubsub.channel(req.query.channel);
    testchannel.subscribe();
    channel.subscribe((message) => {
        res.status(200).send(message)
    });
    
// create a new channel with the given name
    
});
module.exports = router