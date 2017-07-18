var http =require("http");

http.createServer(function(request,response){
	response.writeHead(200,{
		"Content-Type":"text/plain"
	});
	response.write("Weclcome to nodejs");
	response.end();
}).listen(8000,"127.0.0.1");
console.log("Creat server on http://127.0.0.1:8000/");



//nodejs安装后的测试文件
//1，安装完成之后，打开终端，输入 npm -v  (如果安装成功会显示对应版本好：如：3.3.12)
//							node -v (如果安装成功会显示对应版本好：如：v5.4.1)

//2,新建一个将此js文件，放入项目
//  打开终端进入此项目的js所在目录，输入node nodejsText (出现如下，表示安装成功：Creat server on http://127.0.0.1:8000/)

//3，打开浏览器，点击http://127.0.0.1:8000/,如果无法打开，可以去掉.listen(8000,"127.0.0.1")中的ip监听改成.listen(8000),
//然后点击或者输入http://localhost:8000/  (同样输出，表示安装成功：Creat server on http://127.0.0.1:8000/)
