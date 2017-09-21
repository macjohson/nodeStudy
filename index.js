const eventEmitter = require('events');
class player extends eventEmitter{}

const _player = new player();

_player.once('play',(str)=>{
    console.log(`playing ${str}`);
});

_player.emit('play','macjohson');
_player.emit('play','ninghao');
