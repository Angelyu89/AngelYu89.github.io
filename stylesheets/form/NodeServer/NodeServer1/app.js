/**
 * Created by sks on 2016/7/4.
 */

var http=require("http");

http.createServer(function(request,response){
    response.end("<h1>Hello NodeJS</h1>");
}).listen(8010);