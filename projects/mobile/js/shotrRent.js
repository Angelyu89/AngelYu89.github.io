$(function(){
	$(document).ready(function(){
		showProvince();

	})
	
	//返回所在城市
	$('.user_rent_provinces').change(function(){
		$('.user_rent_city').html('');
		var provinceId = $('.user_rent_provinces option:selected').val();
		$.ajax({
					type:"post",
					url:box_webapp_url+"/cities",
					data:{province:provinceId},
					dataType:"json",
					success:function(data){
//						console.log(data)
						
						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'
							
						}
						$(".user_rent_city").html(str);						
					}
				});
	})
		
	
	//所在省份 
	function showProvince(){
		$.ajax({
					type:"post",
					url:box_webapp_url+"/provinces",
					dataType:"json",
					success:function(data){
//						console.log(data)
//						if(data.code == 200){
//							
//						}
						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'							
						}
						$(".user_rent_provinces").html('<option value="">所在省份</option>'+str);						
					}
				});
	}
	
	});
	
	
	
//$(function(){
//	
//	$(document).ready(function(){
//		cityShow();
//
//	})
//	
//	//返回空间
//	$(".user_metting_city").change(function(){
//		$(".user_metting_space").html('');
//		var provinceID = $(".user_metting_city option:selected").val()
//				$.ajax({
//					type:"post",
//					url:box_webapp_url+"/space1",
//					data:{cityCode:provinceID},
//					dataType:"json",
//					success:function(data){
////						console.log(data)
//						
//						var str = '';	
//						
//						for(var i=0;i<data.length;i++){							
//							
//							str += '<option value = "'+data[i].spaceCode+'">'+data[i].spaceName+'</option>'
//							
//						}
//						$(".user_metting_space").html('<option value="">所在空间</option>'+str);						
//					}
//				});
//		
//	})
//	
//	//返回城市（会议室列表）
//	
//	function cityShow(){
//			$.ajax({
//					type:"post",
//					url:box_webapp_url+"/cities",
//					dataType:"json",
//					success:function(data){
////						console.log(data)
//
//						var str = '';	
//						for(var i=0;i<data.length;i++){							
//		
//							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'							
//						}
//						$(".user_metting_city").html('<option value="">所在城市</option>'+str);						
//					}
//				});
//	}
//})
//	
	

	




