/**
 * Created by sks on 2016/7/4.
 */



var http=require("http");
var fs=require("fs");

//引入文件系统
http.createServer(function(request,response){//一个请求对象，一个服务器返回对象
    
    if(request.url=="/index.html"){
        
        //返回前端
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
        response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>Hello "+decodeURI(params['name'])+"</body></html>");
    }else{
        //返回数据
        response.end("<h1>努力是成功的唯一捷径，也是成功必须付出的代价</h1>");
    }
}).listen(8888);