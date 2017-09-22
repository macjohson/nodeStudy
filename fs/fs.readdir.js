// 列出目录里面的东西
const fs = require('fs');

fs.readdir('../logs',(error,data)=>{
  if (error) {
    console.log(error);
  }else {
    // data为一个数组
    console.log(data);
    data.map((item)=>{
      console.log(item);
    })
  }
})
