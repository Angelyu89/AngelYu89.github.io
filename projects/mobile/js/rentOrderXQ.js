$(function(){
	
	rentOrderXQ();
	rentOrderPayWay();
})

//订单详情
function rentOrderXQ(){
		$.ajax({
			type:"post",	
			url:box_webapp_url+"/rentOrder/getInfo",
			data:{orderId:getQueryString('id')},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				var data =res.data;
				
			var Status="";
			if(data.orderStatus==1){
				Status="待付款"
			}else if(data.orderStatus==2){
				Status="已付款"
			}else if(data.orderStatus==3){
				Status="已取消"
			}else if(data.orderStatus==4){
				Status="已完成"
			}
			
				
			$(".rentOrderhao").text(data.id);//订单编号
			$(".rentOrderName").text(data.spaceName);//空间名称
			$(".rentOrderAradss").text(data.spaceAddress);//空间地址
			$(".rentOrderTime").text(data.openTime +'-'+data.closeTime);//开放时间
			$(".retnOrderStatrTime").text(data.day);//预定日期
			$(".rentOrderLocationNumber").text(data.payNumber);//工位数量
			$(".rentOrderPric").text(data.price);//工位价格
			$(".rentOrderPlaceTimee").text(data.createTime);//下单时间
			$(".rentOrderPay").text(data.payWay);//支付方式
			$(".rentOrderMoney").text(data.totalAmount);//订单金额
			$(".rentOrderSmoney").text(data.payAmount);//实付款
//			$().text(data.couponAmount)//优惠劵金额
			$(".order-fk").text(Status);//订单状态
			$(".order-fk").attr("statusOrder",data.orderStatus);
			
			}		
			}
		})
	
}
	
	//订单详情支付
	function rentOrderPayWay(){
		$(".rentOrderPayWayBtn").on("tap",function(){
			var OrderID =$(".rentOrderhao").text();
			console.log(OrderID)
			var payWay = $(".rentOrderPay").text();
			
			var money = $(".rentOrderSmoney").text();
			
			window.location.href="pay-zif.html?money="+money+"&payNumber="+OrderID+"&payway="+payWay;
			
		})
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

	//订单详情取消订单
	$(".rentOrderxqxqBox").on("tap",".rentlistOrder_qx",function(){
		$.ajax({
			type:"post",	
			url:box_webapp_url+"/rentOrder/cancel",
			data:{orderId:getQueryString('id')},
			dataType:"json",
			success:function(res){
				console.log(res);
			if(res.code==200){
				alert(订单已取消)
			}		
			}
		})
	})


//判断订单详情页--支付 、取消按钮是否显示
    var Status = $(".order-fk").attr(statusorder);
	if(Status==1){
				$(".xqOrderPayBoxShow").show();
			}else if(Status==2){
				$(".xqOrderPayBoxShow").hide();
			}else if(Status==3){
				$(".xqOrderPayBoxShow").hide();
			}else if(Status==4){
				$(".xqOrderPayBoxShow").hide();
			}	


