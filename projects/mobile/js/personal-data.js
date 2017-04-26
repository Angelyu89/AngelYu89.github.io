//	$("#fileInput").on("change", function(e){
//
//		  var file = e.target.files[0]; //获取图片资源
//		
//		  // 只选择图片文件
//		  if (!file.type.match('image.*')) {
//		    return false;
//		  }
//		
//		  var reader = new FileReader();
//		
//		  reader.readAsDataURL(file); // 读取文件
//		
//		  // 渲染文件
//		  reader.onload = function(arg) {
//		
//		    var img = '<img class="preview" src="' + arg.target.result + '" alt="preview"/>';
//		    $(".preview_box").empty().append(img);
//		  }
//		});

$(function(){
	//显示修改头像
	$(".mod_user_hader").on("tap",function(){
		
		$(".modify_header").show();
		$(".peoplebox").hide();
		
		//给头像赋值
		$(".tou_baoc").on("tap",function(){
		var fileImg = $("#imgArea img").attr("src");//获取的头像
		
	
		
		
		if(fileImg!==""){
			$(".modify_header").hide();
			$(".peoplebox").show();
			
			if(fileImg!==undefined){
				$("#mod_user_hader img").next().remove();
			}
			
			$(".mod_user_hader img").attr("src",fileImg);
		}
		
		})
		
	})
	
	
	
	
	
	//显示姓名
		$(".name_img").on("tap",function(){
			
			$(".modify_name").show();
			$(".peoplebox").hide();
			
			$(".name_baoc").on("tap",function(){
			
			var name = $("#user_xm").val();//姓名
			
			if(name!==""){
				
			$(".modify_name").hide();
			$(".peoplebox").show();
			
			$(".name_userbox").text(name);
			}
			
		})
		
	})
	
	//显示手机号
		$(".tel_img").on("tap",function(){
			
		$(".modify_tel").show();
		$(".peoplebox").hide();
				
		//给性别赋值
		$(".tel_userbaoc").on("tap",function(){
			
			var sex = $("#user_tel").val();//性别
			
			if(sex!==""){
				$(".modify_tel").hide();
				$(".peoplebox").show();
				
				$(".tel_baox").text(sex);
			}
	
		})
			
	})
	
	//显示性别
	$(".sex_img").on("tap",function(){
			
		$(".modify_sex").show();
		$(".peoplebox").hide();
				
		//给性别赋值
		$(".sex_userbaoc").on("tap",function(){
			
			var sex = $("#user_sex").val();//性别
			
			if(sex!==""){
				$(".modify_sex").hide();
				$(".peoplebox").show();
				
				$(".sex_baox").text(sex);
			}
	
		})
			
	})
	

	
	//显示公司
	$(".compan_img").on("tap",function(){
		
		$(".modify_company").show();
		$(".peoplebox").hide();
		
			//给公司赋值
		$(".company_bc").on("tap",function(){
			var canpany = $("#user_canName").val();//公司名称
			var newSpan = $("<span class='newSpan'></span>");
			if(canpany!==""){
				$(".modify_company").hide();
				$(".peoplebox").show();
				
				
				$(".canpany_userbox").append(newSpan);
				newSpan.text(canpany);
			}
		})
		
	})

	
	
	//显示空间
	$(".space_img").on("tap",function(){
		
		$(".modify_space").show();
		$(".peoplebox").hide();
		
		//给空间赋值
		$(".space_bc").on("tap",function(){
			var space = $("#user_sName").val();//空间名称
			var newSpan = $("<span class='newSpan'></span>");
			if(space!==""){
				
			$(".modify_space").hide();  
			$(".peoplebox").show();
			
			$(".space_userbox").append(space);
			newSpan.text(space);
			}
			
		})
		
	})
	
})


$(function(){
	//取消修改头像
	$(".per_quxiao").on("tap",function(){
		
		$(".peoplebox").show();
		$(".modify_header").hide();
		
	})
	
	//取消姓名
	$(".m_name_qx").on("tap",function(){
		$(".peoplebox").show();
		$(".modify_name").hide();
	})
	
		//取消性别
	$(".sex_quxiao").on("tap",function(){
		$(".peoplebox").show();
		$(".modify_sex").hide();
	})
	
	//取消公司
	$(".company_quxiao").on("tap",function(){
		$(".peoplebox").show();
		$(".modify_company").hide();
	})

	//取消空间
	$(".space_quxiao").on("tap",function(){
		$(".peoplebox").show();
		$(".modify_space").hide();
	})	
})











