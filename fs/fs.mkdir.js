const fs = require('fs');

// 创建一个目录
fs.mkdir('logs',(error)=>{
  if (error) {
    console.log(error);
  }else{
    console.log('success');
  }
})

// fs.mkdirSync() 创建目录的同步方法
