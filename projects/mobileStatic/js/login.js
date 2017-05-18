$("#user_btn").on("tap",function(){
        var sg_name=$("#userid").val();
        var sg_password=$("#userpossword").val();
		console.log(1111);
		
		$.ajax({
			type:"post",
			url:box_webapp_url+"/user/formlogin",
			data:{username:sg_name,password:sg_password},
			dataType:"json",
			success:function(data){
				console.log(data)
				window.location.href="mobile-home.html"
			},
			error:function(msg){
				console.log(msg);
			},
			
		});
				
	})			