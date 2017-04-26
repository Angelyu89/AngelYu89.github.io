
//返回上一页
$(".returnBtn img").on("tap",function(){
	
	window.history.back();
	
})
		

$(".returnBtnImg img").on("tap",function(){
	
	window.history.go(-1);
	
})

//长租预约详情跳--预约入驻页
$(".xqlongBtn").on("tap",function(){
	var longXqID = $(this).attr("id");
	var space = $(this).attr("space");
	var city = $(this).attr("city");
	
	
	window.location.href="appointment.html?id="+longXqID+"&city="+city+"&spaceName="+space;
})

$(".long-rent-xq-container").on("tap",".longSpaceActivity",function(){
	
	window.location.href="activityXQ.html";
})

//跳短租订单页
$(".rentOrder").on("tap",function(){
	
	window.location.href="rent-order.html";
})

//跳会议室订单页
$(".meetOrder").on("tap",function(){
	
	window.location.href="metting-order.html";
})

//跳会议活动订单页
$(".activityOrder").on("tap",function(){
	
	window.location.href="activityOrderList.html";
})

//短租全部订单
$(".orderAllBtn").on("tap",function(){
	$(".orderAll").show();
	$(".pending").hide();
	$(".Payment").hide();
	$(".completed").hide();
	$(".cancelled").hide();
})

//待付款
$(".pendingBtn").on("tap",function(){
	$(".orderAll").hide();
	$(".pending").show();
	$(".Payment").hide();
	$(".completed").hide();
	$(".cancelled").hide();
})

//已付款
$(".PaymentBtn").on("tap",function(){
	$(".Payment").show();
	$(".pending").hide();
	$(".completed").hide();
	$(".cancelled").hide();
	$(".orderAll").hide();
})

//已完成
$(".completedBtn").on("tap",function(){
	$(".completed").show();
	$(".pending").hide();
	$(".Payment").hide();
	$(".cancelled").hide();
	$(".orderAll").hide();
})


//已取消
$(".cancelledBtn").on("tap",function(){
	$(".cancelled").show();
	$(".pending").hide();
	$(".Payment").hide();
	$(".completed").hide();
	$(".orderAll").hide();
})


//会议室全部订单
$(".meetingAllBtn").on("tap",function(){
	$(".meetingAll").show();
	$(".meetingPending").hide();
	$(".meetingPayment").hide();
	$(".meetingCompleted").hide();
	$(".meetingCancelled").hide();
})

//待付款
$(".meetingPendingBtn").on("tap",function(){
	$(".meetingAll").hide();
	$(".meetingPending").show();
	$(".meetingPayment").hide();
	$(".meetingCompleted").hide();
	$(".meetingCancelled").hide();
})

//已付款
$(".meetingPaymentBtn").on("tap",function(){
	$(".meetingPayment").show();
	$(".meetingPending").hide();
	$(".meetingCompleted").hide();
	$(".meetingCancelled").hide();
	$(".meetingAll").hide();
})

//已完成
$(".meetingCompletedBtn").on("tap",function(){
	$(".meetingCompleted").show();
	$(".meetingPending").hide();
	$(".meetingPayment").hide();
	$(".meetingCancelled").hide();
	$(".meetingAll").hide();
})


//已取消
$(".meetingCancelledBtn").on("tap",function(){
	$(".meetingCancelled").show();
	$(".meetingPending").hide();
	$(".meetingPending").hide();
	$(".meetingCompleted").hide();
	$(".meetingAll").hide();
})


//活动全部订单
$(".activityAllBtn").on("tap",function(){
	$(".activityAll").show();
	$(".activityPending").hide();
	$(".activityPayment").hide();
	$(".activityCompleted").hide();
	$(".activityCancelled").hide();
})

//待付款
$(".activityPendingBtn").on("tap",function(){
	$(".activityAll").hide();
	$(".activityPending").show();
	$(".activityPayment").hide();
	$(".activityCompleted").hide();
	$(".activityCancelled").hide();
})

//已付款
$(".activityPaymentBtn").on("tap",function(){
	$(".activityPayment").show();
	$(".activityPending").hide();
	$(".activityCompleted").hide();
	$(".activityCancelled").hide();
	$(".activityAll").hide();
})

//已取消
$(".activityFreeticketBtn").on("tap",function(){
	$(".activityCompleted").show();
	$(".activityPending").hide();
	$(".activityPayment").hide();
	$(".activityCancelled").hide();
	$(".activityAll").hide();
})


//已报名
$(".activityRegisteredBtn").on("tap",function(){
	$(".activityCancelled").show();
	$(".activityPending").hide();
	$(".activityPending").hide();
	$(".activityCompleted").hide();
	$(".activityAll").hide();
})

//短租---查看订单--跳转订单详情页
$(".rentOrderqxBox").on("tap",".rentOrderListBtnlook",function(){
	
		var orderID =$(this).attr("rentorderlistid");
	
	window.location.href="rent-order-xq.html?id="+orderID;
})


//短租--订单支付--跳转支付页
$(".rentOrderqxBox").on("tap",".rentOrderPayWayBtn",function(){
		
		var money = $(".rentOrderPayWayBtn").attr("money");
		var payNumber = $(".rentOrderPayWayBtn").attr("payNumber");
		var pay = $(".rentOrderPayWayBtn").attr("payWay");
		
		window.location.href="pay-zif.html?money="+money+"&payNumber="+payNumber+"&payway="+pay;
	})


//点击短租--订单列表--查看详情
$(".rentOrderqxBox").on("tap",".rentOrder_XQListBtn",function(){
	
	var orderStatus = $(this).attr("orderStatus");
	var orderID = $(this).attr('xqlistbtnorderid');
	
	window.location.href="rent-order-xq.html?id="+orderID+"&orderStatus="+orderStatus;
	
})


//会议室  ----查看订单--跳转订单详情页
$(".meetingOrderqxBox").on("tap",".mettingOrderListBtnlook",function(){
	
		var orderID =$(this).attr("rentorderlistid");
	
	window.location.href="metting-order-xq.html?id="+orderID;
})


//点击会议室--订单列表--查看详情
$(".meetingOrderqxBox").on("tap",".mettingOrder_XQListBtn",function(){
	
	var orderStatus = $(this).attr("orderStatus");
	var orderID = $(this).attr('metXqlistbtnorderid');
	
	window.location.href="metting-order-xq.html?id="+orderID+"&orderStatus="+orderStatus;
	
})

//活动列表 ---跳转活动详情
$(".activityOrderqxBox").on("tap",".activityOrder_XQListBtn",function(){
	
	var enrollId = $(this).attr("activityOrder_XQListBtn");
	var orderStatus = $(this).attr("orderStatus");
	
	window.location.href="activityOrderXq.html?id="+enrollId+"&orderStatus="+orderStatus;
})


//活动列表--查看订单--跳转详情页
$(".activityOrderqxBox").on("tap",".acitvityOrderListBtnlook",function(){
	var enrollId = $(this).attr("activityOrder_XQListBtn");
	var orderStatus = $(this).attr("orderStatus");
	
	window.location.href="activityOrderXq.html?id="+enrollId+"&orderStatus="+orderStatus;

})





//活动--订单支付--跳转支付页
$(".activityOrderqxBox").on("tap",".activityOrderPayWayBtn",function(){
		
		var money = $(".activityOrderPayWayBtn").attr("money");
		var orderNo = $(".activityOrderPayWayBtn").attr("orderNo");
		var pay = $(".activityOrderPayWayBtn").attr("payWay");
		
		window.location.href="mettingPay-zif.html?money="+money+"&orderNo="+orderNo+"&payWay="+pay;
	})
	



