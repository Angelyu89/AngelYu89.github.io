$(function(){
	
	$(document).ready(function(){
		buySureOrder();
	})
	
	
	//活动报名--买票
	
	function buySureOrder(){
		$.ajax({
				type:"post",
				url:box_webapp_url+"/activity/detail",
				data:{
					activityId:getQueryString("activityId"),
					spaceId:getQueryString("spaceId")
				},
					
//					console.log(getQueryString("id"));
				dataType:"json",
				success:function(res){
					console.log(res);
					
					if(res.code==200){
						
						var data = res.data;
						var data_tickets = res.data.tickets[0];
						
							var c = new Date();
		              c.setTime(data.startTime);
		              var year = c.getFullYear();
		              var month = c.getMonth()+1;
		              var strDate = c.getDate();
		              var hour = c.getHours();
		              var minute  = c.getMinutes();
		              var second = c.getSeconds();
		                if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second; 
		              var newstartTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
						
						var c = new Date();
		              c.setTime(data.endTime);
		              var year = c.getFullYear();
		              var month = c.getMonth()+1;
		              var strDate = c.getDate();
		              var hour = c.getHours();
		              var minute  = c.getMinutes();
		              var second = c.getSeconds();
		                if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second; 
		              var newendTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
						
						
						console.log(data_tickets)
						if(data.canSignup == "buy"){
							$(".order-navbox img").attr("src","data.image3");
							$(".activityXq").text(data.name);
							$(".adrss").text(data.activityAddress);
							$(".activityXqtime").text(newstartTime+ '-'+newendTime);
							$('.hostName').text(data.userName);
							$('.money').text(data_tickets.price);
						}
					}		
				}
				
			});	
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
		
		//空间id
		function getQueryString(spaceId){
	        //以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	        var reg = new RegExp('(^|&)' + spaceId + '=([^&]*)(&|$)', 'i');
	        var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	        if (r != null) {
	            return decodeURI(r[2]);//获取ClassName的参数
	
	        }
	        return null;
	    }
	
	//提交买票报名信息
	$("#buy_zif").on("tap",function(){
		
		var name =$("#buyset_name").val();//姓名
		var tel = $("#buyset_tel").val();//联系电话
		var space = $("#buyset_space").val();//公司名称
		var work = $("#buycontact").val();//职务
		var user_email = $("#buyemail").val();//email
	console.log(getQueryString('ticketId'));//查看ticetId得id
	
		var payWay = "";
	
		if($('.Zhifu_Pay').is(':checked')) {
				payWay = 1;
			} else if($('.weChat_Pay').is(':checked')) {
				payWay = 3;
			}
	
		$.ajax({
				type:"post",
//				url:"http://115.28.40.198:8080/activityTickets/ cancel?activityEnrollId=36",//取消活动
				url:box_webapp_url+"/activityTickets/submitTickets",
				data:{
					activityId:getQueryString('activityId'),
					realName:name,
					userPhone:tel,
					companyName:space,
					companyPosition:work,
					email:user_email,
					ticketId:getQueryString('ticketId'),//括号里得值应该是浏览器得值
					payWay:payWay,
					spaceId:getQueryString('spaceId'),
				},
				dataType:"json",
				success:function(res){
					console.log(res);
					if(res.code == 200) {
							//去支付页，
							if(payWay == 1) {
								window.location.href = box_webapp_url+"/pay/payment?orderNo="+res.data+'&paychannel=1'
							} else if(payWay == 3){
								$.ajax({
									type: "get",
									url: box_webapp_url+"/pay/payment?orderNo="+res.data+ '&paychannel=3',
									success: function(ress) {
										console.log(ress);
										//支付订单
										window.location.href = ress;
									}
								})
							} else {
								alert(res.error_msg)
							}
						}
				
				}
				
			});	
		
		
	})
		
	//取消付款	
	$(".met_quxiaoBtn").on("tap",function(){
		
		var name =$("#buyset_name").val();//姓名
		var tel = $("#buyset_tel").val();//联系电话
		var space = $("#buyset_space").val();//公司名称
		var work = $("#buycontact").val();//职务
		var user_email = $("#buyemail").val();//email
	console.log(getQueryString('ticketId'));//查看ticetId得id
		$.ajax({
				type:"post",
				url:box_webapp_url+"/activityTickets/cancelByActivityId?",//取消付款
				data:{
					activityId:getQueryString('activityId'),
				},
				dataType:"json",
				success:function(res){
					console.log(res);
				if(res.code==200){
					
					var data=res.data.enrollForm;
					
					window.location.href="activityOrderList.html";
					
				}		
				}
				
			});	
		
		
	})

	 function getQueryString(usertickbox) {
	        //以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	        var reg = new RegExp('(^|&)' + usertickbox + '=([^&]*)(&|$)', 'i');
	        var r = window.location.search.substr(1).match(reg);
//	      console.log(r);
	        if (r != null) {
	            return decodeURI(r[2]);
	
	        }
	        return null;
	    }

	
})


