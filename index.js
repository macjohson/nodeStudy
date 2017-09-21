const eventEmitter = require('events');
class player extends eventEmitter{}

const _player = new player();

_player.on('play',(str)=>{
    console.log(`playing ${str}`);
});

_player.emit('play','ninghao');