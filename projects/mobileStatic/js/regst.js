
//注册--获取验证码
$("#user_hqyz").on("tap",function(){

	var tel = $("#rg_tel").val();
	console.log(tel);
	var code = $("#rg_code").val();
	console.log(code);
	
	$.ajax({
		type:"get",
		url:box_webapp_url+"/user/sendSmsValidCode",
		data:{mobile:tel,validCode:code},
		dataType:"json",
		success:function(data){
			console.log(data)
		},
		error:function(msg){
			console.log(msg);
		},
		
	});
		
	})

//注册 --提交注册
$("#user_rg").on("tap",function(){
	
	var tel = $("#rg_tel").val();
		console.log(tel);
	var code = $("#rg_code").val();
		console.log(code);
	var user_code = $("#rg_yz").val();
	
	var reg_password =$("#rg_password").val();
	
	$.ajax({
		type:"post",
		url:box_webapp_url+"/user/register",
		data:{mobile:tel,smsCode:code,passwd:reg_password},
		
		dataType:"json",
		success:function(data){
			console.log(data)
			window.location.href="login.html";
		},
		error:function(msg){
			console.log(msg);
		},
		
	});
	
})
	

