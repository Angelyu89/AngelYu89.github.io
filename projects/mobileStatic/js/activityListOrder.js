$(function(){
	
	activityListOrderAll();
})

	function activityListOrderAll(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:1},
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">待支付</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">已付款</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">免费票</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">免报名</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
					}
				}
				
				$(".activityAll").html(str);
					console.log(str);
			}		
			}
			
		});	
		
	}
	
	
	//全部订单
	$(".activityAllBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:1},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.page.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
					if(data[i].orderStatus==1){
						str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">待支付</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">已付款</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">免费票</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
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
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">免报名</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
					}
				}
				
				$(".activityAll").html(str);
					console.log(str);
			}		
			}
			
		});	
		
	})
	
	
	//待付款
	$(".activityPendingBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:1},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.page.result;
				var str = '';
				
			if(res.code==200){
				
				for(var i=0;i<data.length;i++){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">待支付</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				$(".activityPending").html(str);
				
			}
		
			}
		
		})
	})
	
	//已付款
	$(".activityPaymentBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:2},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.page.result;
				var str = '';
				
			if(res.code==200){
				
				for(var i=0;i<data.length;i++){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">已付款</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				$(".activityPayment").html(str);
			}
		
			}
		
		})
	})
	
	//免费票
	$(".activityCompletedBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:3},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.page.result;
				var str = '';
				
			if(res.code==200){
				
				for(var i=0;i<data.length;i++){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">免费票</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				$(".activityCompleted").html(str);
			}
		
			}
		
		})
		
	})
	
	//已报名
	$(".activityCancelledBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activityTickets/getList",
			data:{searchStatus:4},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.page.result;
				var str = '';
				
			if(res.code==200){
				
				for(var i=0;i<data.length;i++){
					str +='<div class="home-cion-ip">'+
						'<div class="home-cion-list activity-list">'+
							'<ul>'+
								'<li>'+
									'<div class="mettingOrder_XQListBtn" metXqListBtnOrderId="'+data[i].orderId+'" orderStatus="'+data[i].orderStatus+'">'+
									'<a href="activity-xq.html">'+
										'<div class="li-lf">'+
											'<img src="images/img_11.png" alt="" />'+
										'</div>'+
										'<div class="li-rg">'+
											'<div class="li-h5">互联网下一个风口何方？新一轮的风向标</div>'+
											'<div class="li-ip">北京市天恒大厦B1企业盒子28号</div>'+
											'<div class="li-ip">2017-2-6</div>'+
										'</div>'+
									'</a>'+
									'<div class="act-pay">'+
										'<span class="pay-lf">已报名</span>'+
										'<span class="pay-rg">￥66元</span>'+
									'</div>'+
									'</div>'+
									'<div class="activity-zifubtn">'+
										'<button class="activityOrderPayWayBtn" money="" orderNo="" payWay="">活动支付</button>'+
									'</div>'+									
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'
				}
				$(".activityCancelled").html(str);
			}
		
			}
		
		})
		
	})
