const fs = require('fs');

fs.readFile('../logs/hello.log',(error,data)=>{
  if (error) {
    console.log(error);
  } else {
    // data默认为Buffer 使用toString()方法可以转换成字符串
    console.log(data.toString());
  }
})

// 指定要读取的内容类型，可以省去toString()
fs.readFile('../logs/hello.log','utf-8',(error,data)=>{
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
})
