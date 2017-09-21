const fs = require('fs');


// 如果文件不存在，会创建一个文件，如果文件存在，会覆盖原来的文件内容


fs.writeFile('logs/hello.log','hello macjohson \n',(error)=>{
  if (error) {
    console.log(error);
  }else{
    console.log('success');
  }
})

// 给文件添加内容
fs.appendFile('logs/hello.log','hello ninghao \n',(error)=>{
  if (error) {
    console.log(error);
  }else {
    console.log('success');
  }
})
