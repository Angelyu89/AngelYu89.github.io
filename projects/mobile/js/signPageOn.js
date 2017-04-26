		$(function(){
			ok1=false;
			ok2=false;
			ok3=false;
			ok4=false;
			ok5=false;
			
			
         // 验证用户名
                $('input[name="userName"]').focus(function(){
                    $(this).next().text('用户名为3-20位之间').removeClass('state1').addClass('state2');
                }).blur(function(){
                    if($(this).val().length >= 3 && $(this).val().length <=12 && $(this).val()!=''){
                        $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                        ok1=true;
                    }else{
                        $(this).next().text('用户名为3-20位之间').removeClass('state1').addClass('state3');
                    }
                     
                });
		
		//手机号
		var mobileRegex = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
		
		 $('input[name="userPhone"]').focus(function(){
		 	$(this).next().text('请输入手机号').removeClass('state1').addClass('state2');
		 }).blur(function(){
		 	var phone =$("#userset_tel").val();
		 	console.log(phone);
                if(mobileRegex.test(phone) && $(this).val()!=''){
                    $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                    ok2=true;
                }else{
                    $(this).next().text('请输入正确手机号').removeClass('state1').addClass('state3');
                }
		})
		 
		 
		 // 验证公司名称
		    $('input[name="user_companyName"]').focus(function(){
		        $(this).next().text('公司名为3-20位之间').removeClass('state1').addClass('state2');
		    }).blur(function(){
		        if($(this).val().length >= 3 && $(this).val().length <=12 && $(this).val()!=''){
		            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
		            ok3=true;
		        }else{
		            $(this).next().text('公司名为3-20位之间').removeClass('state1').addClass('state3');
		        }
		         
		    });
		 
		     // 验证职务
                $('input[name="userWork"]').focus(function(){
                    $(this).next().text('职务为3-20位之间').removeClass('state1').addClass('state2');
                }).blur(function(){
                    if($(this).val().length >= 2 && $(this).val().length <=12 && $(this).val()!=''){
                        $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                        ok4=true;
                    }else{
                        $(this).next().text('职务为3-20位之间').removeClass('state1').addClass('state3');
                    }
                     
                });
		 
		 
		 //验证邮箱
                $('input[name="email"]').focus(function(){
                    $(this).next().text('请输入正确的EMAIL格式').removeClass('state1').addClass('state2');
                }).blur(function(){
                    if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
                        $(this).next().text('请输入正确的EMAIL格式').removeClass('state1').addClass('state3');
                    }else{                  
                        $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                        ok5=true;
                    }
                     
                });
 
			
			$("#sub").on("tap",function(){
				if(ok1 && ok2 && ok3 && ok4 && ok5){
					
				var name =$("#userset_name").val();//姓名
				var tel = $("#userset_tel").val();//联系电话
				var space = $("#userset_space").val();//公司名称
				var work = $("#contact").val();//职务
				var email = $("#user_email").val();//email

				$.ajax({
					type:"post",
					url:box_webapp_url+"/activityTickets/signUp?",
					data:{
						activityId:getQueryString('activityId'),
						spaceId:getQueryString('spaceId'),
						realName:name,
						userPhone:tel,
						companyName:space,
						companyPosition:work,
						email:email,
						
					},
					dataType:"json",
					success:function(res){
						console.log(res);
						
					if(res.code==200){
						
						var data=res.place;
						window.location.href="activityOrderList.html";
					}else{
						var data=res.msg;
						alert(data);
					}
					}
					
				});	
				
				}else{
					 return false;
				}
				
			})
			
		})
	
	
		//空间id
		function getQueryString(spaceId) {
	        //以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	        var reg = new RegExp('(^|&)' + spaceId + '=([^&]*)(&|$)', 'i');
	        var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	        if (r != null) {
	            return decodeURI(r[2]);//获取ClassName的参数
	
	        }
	        return null;
	    }
		
		//活动id
		function getQueryString(activityId) {
	        //以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	        var reg = new RegExp('(^|&)' + activityId + '=([^&]*)(&|$)', 'i');
	        var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	        if (r != null) {
	            return decodeURI(r[2]);//获取ClassName的参数
	
	        }
	        return null;
	    }
	
	//活动报名(免费)
		
//$("#sub").on("tap",function(){
//			
//		var name =$("#userset_name").val();//姓名
//		var tel = $("#userset_tel").val();//联系电话
//		var space = $("#userset_space").val();//公司名称
//		
//	//	var work = $("").val();//职务
//	//	var email = $("").val(data.contacts);//email
//	
//		$.ajax({
//				type:"post",
//				url:box_webapp_url+"/activityTickets/signUp?",
//				data:{
//					name:name,
//					userPhone:tel,
//					companyName:space,
//				},
//				dataType:"json",
//				success:function(res){
//					console.log(res);
//					
//				if(res.code==200){
//					
//					var data=res.place;
//					
////					window.location.href="activity.html";
//					
//				
//				}		
//				}
//				
//			});	
//			
//			
//		})