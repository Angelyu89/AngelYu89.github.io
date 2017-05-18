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
	

//支付
//$(function(){
//	
//	$(document).ready(function(){
//		sub_order('.sub_order');//短租
//		sub_order('.met-yud-btn');//会议室
//		sub_order('.order-xq-bcbtn');//活动
//	})
//	
//	function sub_order(obj){
//		
//		$(obj).on("tap", function() {
//
//			var newDate = $("#new_Date").val();
//
//			var payWay = "";
//
//			if($('.Zhifu_Pay').is(':checked')) {
//				payWay = 1;
//			} else if($('.weChat_Pay').is(':checked')) {
//				payWay = 3;
//			}
//
//			//		console.log(payWay);
//
//			//提交订单
//			$.ajax({
//					type: "GET",
//					url: "http://115.28.40.198:8080/rentPay/creatOrder",
//					data: {
//						payWay: payWay,
//						roomId: getQueryString('id'),
//						date: newDate
//					},
//					dataType: "json",
//					success: function(res) {
//						console.log(res);
//						//支付订单
//						if(res.code == 0) {
//							//去支付页，
//							var data = res.data;
//							if(payWay = 1) {
//								window.location.href = "http://115.28.40.198:8080/rentPay/payment?payNumber=" + data;
//							} else if(payWay = 3) {
//								$.ajax({
//									type: "get",
//									url: "http://115.28.40.198:8080/rentPay/payment?payNumber=" + data,
//									success: function(ress) {
//										//console.log(ress);
//										//支付订单
//										window.location.href = ress;
//									}
//								})
//							} else {
//								alert(res.error_msg)
//							}
//						}
//
//					}})
//			})
//
//		function getQueryString(id) {
//			//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
//			var reg = new RegExp('(^|&)' + id + '=([^&]*)(&|$)', 'i');
//			var r = window.location.search.substr(1).match(reg);
//			//      console.log(r);
//			if(r != null) {
//				return decodeURI(r[2]); //获取ClassName的参数
//
//			}
//			return null;
//		}
//		
//	}
//	
//	
//})
//	




