
$(".loginOut").on("tap",function(){
	$.ajax({
		type:"post",
		url:box_webapp_url+"/user/logout",
		dataType:"json",
		success:function(data){
			alert('您已退出登录')
			window.location.href="login.html";
		},
		error:function(msg){
			console.log(msg);
		},
		
	});
	
	})
