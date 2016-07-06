/**
 * Created by sks on 2016/7/6.
 */


var http=require("http");
var fs=require("fs");

function decodeParams(paramsStr){
    var pKv=/(\?|\&|^)([^=]+)=([^&]+)/g;
    var params={};
    while (true){
        var result=pKv.exec(paramsStr);
        if(result){
            params[result[2]]=result[3];
        }else{
            break;
        }
    }
    return params;
}


function handlerServerRequestEnd(request,response,params){
    response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>Hello "+decodeURI(params['name'])+"</body></html>");
}


//处理服务器请求

function handleServerRequest(request,response){
    switch (request.method){
        case"GET":
        var params=decodeParams(request.url);
            handlerServerRequestEnd(request,response,params);
            break;
        case "POST":
            var allData="";
            request.on("data",function(data){
                allData+=data;
            });
            request.on("end",function(){
                var params=decodeParams(allData);
                handlerServerRequestEnd(request,response,params);
            });
            break;
    }
}

//引入文件系统
http.createServer(function(request,response){//一个请求对象，一个服务器返回对象

    if(request.url=="/index.html"||request.url=="/"){

        //返回前端
        response.end(fs.readFileSync("index.html"));

    }else if(request.url.match(/\/server/)){

        handleServerRequest(request,response);
    }else{
        //返回数据
        response.end("<h1>努力是成功的唯一捷径，也是成功必须付出的代价</h1>");
    }
}).listen(8088);