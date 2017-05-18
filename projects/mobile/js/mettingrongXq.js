$(function(){
	
	$(document).ready(function(){
		mettingXq();
	});
	
})
	
	//会议室详情
	console.log(getQueryString('id'));
	function mettingXq(){
		var newdate = $("#newdate").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/boardroom/boardRoomDetail",
			data:{
				boardRoomId: getQueryString('id'),
				selectDate:newdate},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					
				var str = '';
				
				var data = res.data;//获取所有值
//				if(data.reserveTime==null){
//					
//				}else{
//					var a = res.data.reserveTime.split(",");//将reserveTime的字符串转化为数组（后台返回的已经预定了的参数）
//					console.log(a);
//					//遍历input值
//					$('.modalTime span').each(function(){					
//	//						console.log(($(this).attr('datetime')));//查看datetime	
//	//						console.log(a.indexOf($(this).attr('datetime')));//查看datetime转为下标	
//							
//						if (a.indexOf(($(this).attr('datetime'))) >= 0){
//							
//							$(this).css("background-color","gainsboro").prop("disabled","true");//判断已预定时间并灰色禁用
//						}
//					});
//					
//				}
				
				var a = res.data.reserveTime.split(",");//将reserveTime的字符串转化为数组（后台返回的已经预定了的参数）
					console.log(a);
					//遍历input值
					$('.modalTime span').each(function(){					
	//						console.log(($(this).attr('datetime')));//查看datetime	
	//						console.log(a.indexOf($(this).attr('datetime')));//查看datetime转为下标	
							
						if (a.indexOf(($(this).attr('datetime'))) >= 0){
							
							$(this).css("background-color","gainsboro").prop("disabled","true");//判断已预定时间并灰色禁用
						}
					});
				
				
				//遍历input值
				$('.modalTime span').each(function(){					
//						console.log(($(this).attr('datetime')));//查看datetime	
//						console.log(a.indexOf($(this).attr('datetime')));//查看datetime转为下标	
						
					if (a.indexOf(($(this).attr('datetime'))) >= 0){
						
						$(this).css("background-color","gainsboro").prop("disabled","true");//判断已预定时间并灰色禁用
					}
				});

				$(".spaceXqID").attr("id",data.boardRoomId);
				$(".mettingXqPeonumber").text(data.maxPeopNum);
				$(".spaceXqID").text(data.boardRoomName);
				$(".mettingXq_spaceaddress").text(data.spaceAddress);
				$(".mettingXq_saceName").text(data.spaceName);
				$(".mettingXqpice input").val(data.price);
				$(".meeting_roomNumer input").val(data.maxPeopNum);
//				var numtime = $("#result-show").val();
				
//				$(".metting_price").text(parseInt(data.price)*parseInt(numtime));//单价乘以时间段
				$(".metting_price").text(data.price);
				
				if(data.tel== 1) {
					$(".fac01").css("display","inline-block"); //wifi
				}else if(data.tel == null || data.tel == "") {}
				
				
				if(data.video==1) {
					$(".fac02").css("display","inline-block"); //座椅
				}else if(data.video == null || data.video == "") {}
				
				
				if(data.projector== 1) {
					$(".fac04").css("display","inline-block"); //投影
				}else if(data.projector == null || data.projector == "") {}
				
				if(data.sound == 1) {
					$(".fac08").css("display","inline-block"); //音响
				}else if(data.sound == null || data.sound == "") {}
				
			
				
			//获取当前的年月日
			 var date = new Date();
//			    console.log(date);
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    //年月日时分秒
//			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//			            + " " + date.getHours() + seperator2 + date.getMinutes()
//			            + seperator2 + date.getSeconds();
//			             console.log(currentdate);
			    
			    //年月日
			     var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
			     console.log(currentdate);         
			      
				$("#newdate").attr("min",currentdate);
				console.log(newdate);
			}
				
		}
		});	

	}
	
	
	function getQueryString(id) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + id + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}
	


		
	//会议室创建订单
	$(".met-yud-btn").on("tap",function(){
		var nedata = $("#newdate").val();
		var time = $("#time-range-input").val();
		var attribute =$("#time-range-input").attr('evaluation');
			attribute =nedata+" "+time.slice(0,5)+nedata+" "+time.slice(6,11);
				console.log(attribute);
				
		var starT =attribute.substring(0,16);
		starT +=':00';
		var endT =attribute.substring(16,36);
		endT +=':00';
		console.log(starT,endT);
		
		var payWay = "";

		if($('.Zhifu_Pay').is(':checked')) {
			payWay = 1;
		} else if($('.weChat_Pay').is(':checked')) {
			payWay = 3;
		}
	
//		console.log(getQueryString('id'))
		
		$.ajax({
			type:"post",
//			url:"http://115.28.40.198:8080/order/cancel?orderid=21",//取消订单
			url:box_webapp_url+"/boardroom/addOrder",
				data:{boardRoomId:getQueryString('id'),
					startTime:starT,
					endTime:endT,
					payWay:payWay},
				dataType:"json",
				success:function(res){
				console.log(res);
			
			//支付订单
				if(res.code == 200) {
							//去支付页，
							
							if(payWay == 1) {
//								window.location.href =box_webapp_url+"/pay/payment?orderNo="+res.orderId+'&paychannel=1'
								window.location.href = box_webapp_url+"/pay/payment?orderNo="+res.data+'&paychannel=1'
							} else if(payWay == 3){
								$.ajax({
									type: "get",
									url:box_webapp_url+"/pay/payment?orderNo="+res.data+ '&paychannel=3',
									success: function(ress) {
										console.log(ress);
										//支付订单
										window.location.href = ress;
									}
								})
							} else {
								alert(res.error_msg)
							}
						}else if(res.code==600){
//								alert("未登录，请您先登录！")
//								window.location.href="login.html";
							}
			
			}
			
		});
		
	})


		//判断是否在微信内部
		function is_weixin() {
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == "micromessenger") {

				return true;

			} else {

				return false;
			}
		}
	
