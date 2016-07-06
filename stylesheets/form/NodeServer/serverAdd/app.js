/**
 * Created by sks on 2016/7/6.
 */

//服务器与客户端通信


var http=require("http");
var fs=require("fs");

//解析参数
function decodeUrlParams(url){
    var pKv=/(\?|\&)([^=]+)=([^&]+)/g;
    var params={};
    while(true){
        var result=pKv.exec(url);
        if(result){
            params[result[2]]=result[3];
        }else{
            break;
        }
    }
    return params;
}

//执行
function handleServer(request,response){
    var params=decodeUrlParams(request.url);
    var aValue=parseInt(params.a);
    var bValue=parseInt(params.b);

    response.end("Result:"+(aValue+bValue));
}

http.createServer(function(request,response){
    if(request.url=="/index.html"||request.url=="/"){
        response.end(fs.readFileSync("index.html"));
    }else if(request.url.match(/\/server/)){
       handleServer(request,response);
    }

}).listen(60000);//端口号必须五位数以上