
	//预约-选择城市
	$("#appointment_city").on('tap',function(){
//			console.log(111);
	 	 $(".appointment-container").hide();
	
	 	 $(".citybox").show();
		});
				
		
		$("#app_city_baoc").on("tap",function(){
			
			var user_space = $("#space_user_city").val();
						
			var newSpan = $("<span></span>");
			//保存城市
			if(user_space!=""){
				
				$(".citybox").hide();
				
				$(".appointment-container").show();
				
				//清空原有内容
				if(newSpan!=undefined){
					
				$("#appointment_city").next().remove();
				}
				
				$(".appd_list_city").append(newSpan);
				
				newSpan.text(user_space);
				
				
				
			}else{
				alert("请填写资料")
			}
			
		})
		
		
	//预约--空间选择
	$("#appointment_space").on('tap',function(){
//			console.log(111);
	 	 $(".appointment-container").hide();
	
	 	 $(".spacebox").show();
		});
				
		$("#app_space_baoc").on("tap",function(){
			
			var user_spacetow = $("#space_user_space").val();
						
			var newSpantow = $("<span></span>");
			
			//保存空间
			if(user_spacetow!=""){
				
				$(".spacebox").hide();
				$(".appointment-container").show();
				
				//清空原有内容
				if(newSpantow!=undefined){
					
				$("#appointment_space").next().remove();
				}
				$(".appd_list_space").append(newSpantow);
				
				newSpantow.text(user_spacetow);
				
			}else{
				alert("请填写资料")
			}
			
		})
		
		

	$(".mod-nav-lf").on("tap",function(){
		$(".citybox").hide();
		$(".appointment-container").show();
	});

	
	//预约-选择空间
	//保存
	$("#appointment_space").on("tap",function(){
		 $(".appointment-container").hide();
	
	 	 $(".spacebox").show();
	});

	//取消
	$(".mod-nav-lf").on("tap",function(){
		$(".spacebox").hide();
		$(".appointment-container").show();
	});


//清空
	$(function(){	
		
		//选择城市
		$('input[name="user_spaceCity"]').focus(function(){
			if($(".span_city")!=undefined){
				$(".span_city").remove();				
			}			
		});
		
		//入驻日期
		$("#app_user_time").focus(function(){
			if("#app_user_time"!=undefined){
				$(".span_times").remove();
			}
			
		});
		
		//公司名称
		$('#company_name').focus(function(){
			if("#company_name"!=undefined){
				$(".span_name").remove();
			}			
		});
	
	
		//联系人
		$('#contact').focus(function(){
			if("#contact"!=undefined){
				$(".span_contact").remove();
			}			
		});
		
		//联系电话
		$('#tel').focus(function(){
			if("#tel"!=undefined){
				$(".span_tel").remove();
			}			
		});

		//入驻人数
		$('#people').focus(function(){
			if("#people"!=undefined){
				$(".span_people").remove();
			}
		});
		
		
	});
	
	
	//添加工位数量
	
//	 function init(){
//        var Ary=$(".add");
//        function(){
//		    var sumNum=0;//记录和的变量
//		    for(var Ary=1;Ary<=100;Ary++){
//		        sumNum+=Ary;//累加上次的值
//		    }
//		    
//        }
//		
//		}
//
//	
	

 
	
	 



	


			
	