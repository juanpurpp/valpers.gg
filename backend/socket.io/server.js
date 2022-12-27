module.exports=function(server){
    const io = require('socket.io')(server);
    io.on('connection', socket => {
        console.log('A user has connected');
      
        //subscripción, socket se enlaza en una room
        socket.on('subscribe', (channel) => {
          console.log(`User has subscribed to channel "${channel}"`);
          socket.join(channel);
        });
      
        //Abandonar room
        socket.on('unsubscribe', (channel) => {
          console.log(`User has unsubscribed from channel "${channel}"`);
          socket.leave(channel);
        });
      
        //Publicar un mensaje en el canal, esta obsoleto por ahora
        socket.on('publish', (channel, message) => {
          console.log(`Message "${message}" published to channel "${channel}"`);
          io.to(channel).emit('message', message);
        });

        //Se actualiza la información de la partida
        socket.on('update', (objeto) => {
          console.log(`Message "${objeto.message}" published to channel "${objeto.channel}"`);
          io.to(objeto.channel).emit('message', objeto.message);
        });

        //Evento de entrada de usuario, el mensaje es su nombre
        socket.on('join', (objeto) => {
          console.log(`sujeto "${objeto.message}" entro to channel "${objeto.channel}"`);
          io.to(objeto.channel).emit('joining', objeto.message);
        });

        //Evento de salida de usuario, elmensaje es su nombre
        socket.on('leave', (objeto) => {
          console.log(`sujeto "${objeto.mesage}" dejó el canal "${objeto.channel}"`);
          io.to(objeto.channel).emit('leaving', objeto.message);
        });

        //Evento de inicio de partida para que todos vayan al resultado
        socket.on('start', (channel) => {
          console.log(`Empezó la partida de "${channel}"`);
          io.to(channel).emit('starting');
        });
    }); //crear un servidor socket.io
}