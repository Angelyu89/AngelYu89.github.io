$(function(){
	
	meetingListOrderAll();
})


	function meetingListOrderAll(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:0},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				
					for(var i = 0; i < data.length; i++){
//						
//					var datatime = data[i].startTime;
//
//					var c = new Date();
//					c.setTime(datatime);
//					var year = c.getFullYear();
//					var month = c.getMonth() + 1;
//					var strDate = c.getDate();
//					var hour = c.getHours();
//					var minute = c.getMinutes();
//					var second = c.getSeconds();
//					if(month >= 1 && month <= 9) {
//						month = "0" + month;
//					}
//					if(strDate >= 0 && strDate <= 9) {
//						strDate = "0" + strDate;
//					}
//					if(hour < 10) hour = '0' + hour;
//					if(minute < 10) minute = '0' + minute;
//					if(second < 10) second = '0' + second;
//					var newendTime = (year + "-" + month + "-" + strDate);
						
						if(data[i].orderStatus==1){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>待付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
											'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
										'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="quxiaobtn mettingOrder_qx" id="'+data[i].orderId+'">取消订单</button>'+
										'<button class="mettingOrderPayWayBtn" mettingOrderListID="'+data[i].orderId+'" money="'+data[i].orderTotalAmt+'" payWay="'+data[i].payWay+'">订单支付</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}else if(data[i].orderStatus==2){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>已付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}else if(data[i].orderStatus==3){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+	
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>已完成</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
					
				}else if(data[i].orderStatus==4){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+	
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>已取消</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				
				
				}
				
				
				$(".meetingAll").html(str);
//					console.log(str);
			}		
			}
			
		});	
			
	}
	
	//全部订单
$(".meetingAllBtn").on("tap",function(){
			$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:0},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				
					for(var i = 0; i < data.length; i++){
						
						if(data[i].orderStatus==1){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+	
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>报名票</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="quxiaobtn mettingOrder_qx" id="'+data[i].orderId+'">取消订单</button>'+
										'<button class="mettingOrderPayWayBtn" mettingOrderListID="'+data[i].orderId+'" money="'+data[i].orderTotalAmt+'" payWay="'+data[i].payWay+'">订单支付</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}else if(data[i].orderStatus==2){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+	
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>免费票</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}else if(data[i].orderStatus==3){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>待付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
					
				}else if(data[i].orderStatus==4){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>已付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				}
				
				$(".meetingAll").html(str);
//					console.log(str);
			}		
			}
			
		});	
	
	
})

//报名票

$(".meetingPendingBtn").on("tap",function(){
	
			$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:1},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>报名票</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="quxiaobtn mettingOrder_qx" id="'+data[i].orderId+'">取消订单</button>'+
										'<button class="mettingOrderPayWayBtn" mettingOrderListID="'+data[i].orderId+'" money="'+data[i].orderTotalAmt+'" payWay="'+data[i].payWay+'">订单支付</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				
				$(".meetingPending").html(str);
//					console.log(str);
			}		
			}
			
		});	
	
	
})


//免费票
$(".meetingPaymentBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:2},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>免费票</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				
				$(".meetingPayment").html(str);
//					console.log(str);
			}		
			}
			
		});	
	
})


//待付款

$(".meetingCompletedBtn").on("tap",function(){
	$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:3},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>待付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				
				$(".meetingCompleted").html(str);
//					console.log(str);
			}		
			}
			
		});	
	
})


//已付款

$(".meetingCancelledBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/order/list",
			data:{orderStatus:4},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
										'<div class="li-lf met-or-lilf">'+
											'<img src='+data[i].pic+' alt="" />'+
										'</div>'+
										'<div class="li-rg met-or-lirg">'+
											'<div class="li-h5 met-lirg-imbox">'+data[i].boardRoomName+'<img src="images/img3333_07.png" alt="" />'+
												'<span>已付款</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">12层B128号<span>B1</span>'+
											'</div>'+
											'<div class="li-ip met-li-ip">'+
												'<span>2017-2-6</span>'+
												'<span class="met-or-time">预定时间 :'+newPackaging(data[i].startTime)+'</span>'+
											'</div>'+
										'</div>'+
									'<div class="act-pay met-act-pay">'+
										'<span class="pay-lf">订单编号: '+data[i].orderId+'</span>'+
										'<span class="pay-rg">￥'+data[i].orderTotalAmt+'元 </span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="mettingOrderListBtnlook" rentOrderListID="'+data[i].orderId+'">查看订单</button>'+
									'</div>'+								
								'</li>'+    
							'</ul>'+
						'</div>'+
					'</div>'
				}
				
				$(".meetingCancelled").html(str);
//					console.log(str);
			}		
			}
			
		});	
})



//待付款取消订单
	$(".meetingOrderqxBox").on("tap",".mettingOrder_qx",function(){
		orderID =$(this).attr('id');
		
		console.log(orderID)
		$.ajax({
			type:"post",	
			url:box_webapp_url+"/order/cancel",
			data:{orderid:orderID},
			dataType:"json",
			success:function(res){
				console.log(res);
			if(res.code==200){
				alert('订单已取消');
			}		
			}
		})
	})
	
	
	//订单支付--跳转支付页
$(".meetingOrderqxBox").on("tap",".mettingOrderPayWayBtn",function(){
	
	var money =$(".mettingOrderPayWayBtn").attr("money");
	var orderNo = $(".mettingOrderPayWayBtn").attr("mettingOrderListID");
	var pay = $(".mettingOrderPayWayBtn").attr("payWay");
	window.location.href="mettingPay-zif.html?money="+money+"&orderNo="+orderNo+"&paychannel="+pay;
})


	
	function newPackaging(a){
		
		var d= new Date();
              d.setTime(a);
              var year = d.getFullYear();
              var month = d.getMonth()+1;
              var date = d.getDate();
              var hour = d.getHours();
              var minute  = d.getMinutes();
              var second = d.getSeconds();
              var newsetTime =(year+"-"+month+"-"+date);
//				console.log(newsetTime);
		
		return newsetTime;
		
	}