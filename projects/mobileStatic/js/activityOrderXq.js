$(function(){
	
	activityOrderXQ();
//	mettingOrderPayWay();
})


function activityOrderXQ(){
	
			$.ajax({
			type:"post",	
			url:box_webapp_url+"activityTickets/getActivityOrder",
			data:{orderId:getQueryString('id')},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				var data =res.data.orderDetail;
				
			var Status="";
			if(data.orderStatus==1){
				Status="已报名"
			}else if(data.orderStatus==2){
				Status="免费票"
			}else if(data.orderStatus==3){
				Status="待付款"
			}else if(data.orderStatus==4){
				Status="已付款"
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
				
			
			$(".activityXqtime").text(data.openStarttime+"-"+data.openEndtime);//预约时间
			$(".activityXqpicr").text();//相关费用
			$(".activityXqNumber").text();//剩余名额
			$(".activityXqorganizers").text()//主办方
			$(".activtyIntroduce").text();//场地介绍
			
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

