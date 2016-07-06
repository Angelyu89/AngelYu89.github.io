/**
 * Created by sks on 2016/7/5.
 */


// require是node.js的系统函数 用来引入http模块 从而创建模块
var http=require("http");
var fs=require("fs");//同步API

 
//引入文件系统
http.createServer(function(request,response){//一个请求对象，一个服务器返回对象

    if(request.url=="/index.html"){

        response.end(fs.readFileSync("index.html"));

    }else if(request.url.match(/\/server/)){
        var pKv=/(\?|\&)([^=]+)=([^&]+)/g;
        var params={};
        while(true){
            var result=pKv.exec(request.url);
            if(result){
                params[result[2]]=result[3];
            }else{
                break;
            }
        }
        response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>总和为： "+(parseInt(params['number1'])+parseInt(params['number2']))+"</body></html>");
    }else{
        //返回数据
        response.end("<h1>你的答案是错误的</h1>");
    }
}).listen(8886);//贞听8886端口