const eventEmitter = require('events');

// 类的继承
class example extends eventEmitter{}

const _example = new example();

// 注册事件
_example.on('event',(str)=>{
  console.log(str);
})

// 注册单词事件（事件只能发布一次）
_example.once('_event',(str)=>{
  console.log(str);
});

// 发布事件
_example.emit('event','this is test');
_example.emit('event','this is second');

_example.emit('_event','this is test');
_example.emit('_event','this is second');
