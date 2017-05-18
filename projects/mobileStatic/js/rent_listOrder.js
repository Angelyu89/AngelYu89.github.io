$(function(){
	
	rent_listOderAll();
})

//全部订单
	function rent_listOderAll(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList?",
//			data:'',
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				
				for(var i = 0; i < data.length; i++){
////					
				if(data[i].orderStatus==1){
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">待付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="quxiaobtn rentlistOrder_qx" id="'+data[i].id+'">取消订单</button>'+
											'<button class="rentOrderPayWayBtn" rentOrderListID="'+data[i].id+'" money="'+data[i].payAmount+'" payNumber="'+data[i].payNumber+'" payWay="'+data[i].payWay+'">订单支付</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
//					
				}else if(data[i].orderStatus==2){
					str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src="box_qiniu_img_url'+data[i].img+'" alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号:'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
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
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<span>已完成</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
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
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已取消</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
					
				}
				
				$(".orderAll").html(str);
//					console.log(str);
			}		
			}
			
		});	
			
	}
	
	
	$(".orderAllBtn").on("tap",function(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList?",
			data:{status:0},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i = 0; i < data.length; i++){
////					
				if(data[i].orderStatus==1){
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">待付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="quxiaobtn rentlistOrder_qx" id="'+data[i].id+'">取消订单</button>'+
												'<button class="rentOrderPayWayBtn" rentOrderListID="'+data[i].id+'" money="'+data[i].payAmount+'" payNumber="'+data[i].payNumber+'" payWay="'+data[i].payWay+'">订单支付</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
//					
				}else if(data[i].orderStatus==2){
					str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src="box_qiniu_img_url'+data[i].img+'" alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号:'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
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
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已完成</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
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
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已取消</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
					
				}
				
				$(".orderAll").html(str);
//					console.log(str);
			}		
			}
			
		});	
			
	})
	
	
	//待付款
	$(".pendingBtn").on("tap",function(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList?",
			data:{status:1},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i=0;i<data.length;i++){	
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">待付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
										'<button class="quxiaobtn rentlistOrder_qx" id="'+data[i].id+'">取消订单</button>'+
											'<button class="rentOrderPayWayBtn" rentOrderListID="'+data[i].id+'" money="'+data[i].payAmount+'" payNumber="'+data[i].payNumber+'" payWay="'+data[i].payWay+'">订单支付</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
					$(".pending").html(str);
			}		
			}
		})
	});	
		
		
	//已付款
	$(".PaymentBtn").on("tap",function(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList?",
			data:{status:2},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i=0;i<data.length;i++){	
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src="box_qiniu_img_url'+data[i].img+'" alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已付款</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号:'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
					$(".Payment").html(str);
			}		
			}
		})
	});	


	//已完成
	$(".completedBtn").on("tap",function(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList",
			data:{status:4},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i=0; i<data.length; i++){	
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已完成</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
				$(".completed").html(str);
			}	
			
			}
		})
	});	
	
	
	//已取消
	$(".cancelledBtn").on("tap",function(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/rentOrder/getList",
			data:{status:3},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				var data =res.data.result;
				var str = '';
				
			if(res.code==200){
				for(var i=0;i<data.length;i++){	
						str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list activity-list">'+
								'<ul>'+
									'<li>'+
										'<div class="rentOrder_XQListBtn" xqListBtnOrderId="'+data[i].id+'" orderStatus="'+data[i].orderStatus+'">'+	
											'<div class="li-lf met-or-lilf">'+
												'<img src='+box_qiniu_img_url+data[i].img+' alt="" />'+
											'</div>'+
											'<div class="li-rg met-or-lirg">'+
												'<div class="li-h5 met-lirg-imbox">'+data[i].spaceName+'<img src="images/img3333_07.png" alt="" />'+
													'<span class="Statusbox" orderStatus="'+data[i].orderStatus+'">已取消</span>'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
												'</div>'+
												'<div class="li-ip met-li-ip">'+
													'<span>'+data[i].day+'</span>'+
													'<span class="met-or-time">预定工位(2个)</span>'+
												'</div>'+
											'</div>'+
										'<div class="act-pay met-act-pay">'+
											'<span class="pay-lf rentOrderListIDDClass" rentOrderListIDD="'+data[i].id+'">订单编号：'+data[i].id+'</span>'+
											'<span class="pay-rg">￥'+data[i].payAmount+'元 </span>'+
										'</div>'+
										'</div>'+
										'<div class="activity-zifubtn">'+
											'<button class="rentOrderListBtnlook" rentOrderListID="'+data[i].id+'">查看订单</button>'+
										'</div>'+							
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
				}
					$(".cancelled").html(str);
			}		
			}
		})
	});	
	
	
	//待付款取消订单
	$(".rentOrderqxBox").on("tap",".rentlistOrder_qx",function(){
		orderID =$(this).attr('id');
		
		console.log(orderID)
		$.ajax({
			type:"post",	
			url:box_webapp_url+"/rentOrder/cancel",
			data:{orderId:orderID},
			dataType:"json",
			success:function(res){
				console.log(res);
			if(res.code==200){
				alert('订单已取消');
			}		
			}
		})
	})
	
	

	
	
