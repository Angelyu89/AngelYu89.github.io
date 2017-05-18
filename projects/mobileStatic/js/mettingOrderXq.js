$(function(){
	
	mettingOrderXQ();
//	mettingOrderPayWay();
})


function mettingOrderXQ(){
	
			$.ajax({
			type:"post",	
			url:box_webapp_url+"/order/detail",
			data:{orderid:getQueryString('id')},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				var data =res.data.orderDetail;
				
			var Status="";
			if(data.orderStatus==1){
				Status="待付款"
			}else if(data.orderStatus==2){
				Status="已付款"
			}else if(data.orderStatus==3){
				Status="已完成"
			}else if(data.orderStatus==4){
				Status="已取消"
			}
			
			var d = new Date();
              d.setTime(data.startTime);
              var year = d.getFullYear();
              var month = d.getMonth()+1;
              var date = d.getDate();
              var hour = d.getHours();
              var minute  = d.getMinutes();
              var second = d.getSeconds();
              var newsetTime =(year+"-"+month+"-"+date);
				console.log(newsetTime);
				
			$(".mettingOrderhao").text(data.orderId);//订单编号
			$(".mettingOrderName").text(data.spaceName);//空间名称
			$(".mettingOrderAradss").text(data.spaceAddress);//空间地址
			
			$(".mettingspaceOrdername").text(data.meetingUserName);//会议室名称
			$(".mettingOrderpeoplename").text(data.userName);//预约人姓名
			$(".mettinOrderDate").text(newsetTime);//预约日期
			$(".mettingOrdertime").text(data.openStarttime+"-"+data.openEndtime);//预约时间
			$(".mettingpeoplenumber").text(data.peopleNum);//容纳人数
			$(".mettingOrderprice").text(data.meetRoomPrice);//会议室单价
			
			$(".mettingOrderPlaceTimee").text(data.scheduledTime);//下单时间
			$(".mettingOrderPay").text(data.payWay);//支付方式
			$(".mettingmoney").text(data.totalAmount);//订单金额
			$(".mettingOrderSmoney").text(data.totalAmount);//实付款
			
//			$().text(data.couponAmount)//优惠劵金额
			$(".order-fk").text(Status);//订单状态
			$(".order-fk").attr("statusorder",data.orderStatus);
			
			}		
			}
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

