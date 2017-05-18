	//活动报名(免费)
		
$("#sub").on("tap",function(){
			
		var name =$("#userset_name").val();//姓名
		var tel = $("#userset_tel").val();//联系电话
		var space = $("#userset_space").val();//公司名称
		
	//	var work = $("").val();//职务
	//	var email = $("").val(data.contacts);//email
	
		$.ajax({
				type:"post",
				url:box_webapp_url+"/activityTickets/signUp?",
				data:{
					name:name,
					userPhone:tel,
					companyName:space,
				},
				dataType:"json",
				success:function(res){
					console.log(res);
					
				if(res.code==200){
					
					var data=res.place;
					
//					window.location.href="activity.html";
					
				
				}		
				}
				
			});	
			
			
		})