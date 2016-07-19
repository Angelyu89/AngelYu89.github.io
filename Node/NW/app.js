/**
 * Created by sks on 2016/7/19.
 */

//引用node.js文件的系统库
//  const fs=require("fs");

class Main{

    constructor(){
        fs.readdir("/",function(){
            console.log(arguments);//arguments输出内容结果（错误与正确）Array：输出正确内容及0：null（错误信息);错误：输出Eerror;
        });


        //Ajax获取
        $.get("http://www.baidu.com").done(function(data){
            console.log(data);
        });
    }
}
new Main();