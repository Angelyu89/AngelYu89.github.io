$(function(){
	
	activityOrderXQ();
})


function activityOrderXQ(){
		$.ajax({
			type:"post",	
			url:box_webapp_url+"/activityTickets/getActivityOrderById",
			data:{activityEnrollId:getQueryString('id')},
			dataType:"json",
			success:function(res){
				
				console.log(res);
				
			if(res.code==200){
				var data =res.data;
				
			var Status="";
			if(data.status==0){
				Status="活动取消"
			}else if(data.status==3){
				Status="即将开始"
			}else if(data.status==4){
				Status="正在进行"
			}else if(data.status==5){
				Status="活动结束"
			}
			
			var datapirce="";
			if(data.orderAmt==null){
				datapirce="免费"
			}else{
				datapirce=data.orderAmt;
			}
			
			var datatime =data.startTime;
			var d = new Date();
              d.setTime(datatime);
              var year = d.getFullYear();
              var month = d.getMonth()+1;
              var date = d.getDate();
              var hour = d.getHours();
              var minute  = d.getMinutes();
              var second = d.getSeconds();
              var newsetTime =(year+"-"+month+"-"+date);
				console.log(newsetTime);

				
			$(".activityhaoma").text(data.enrollId);//订单编号
			$(".activityName").text(data.activityName);//活动名称
			$(".activityadrass").text(data.activityAddress);//活动地点
			$(".activitytime").text(newsetTime);//活动时间
			$(".acitvityspace").text(data.userName);//主办方

			$(".resname").text(data.realName);//报名人
			$(".phone").text(data.userPhone);//电话
			$(".satatus").text(Status);//活动状态
			$(".satatus").attr("satatusId",data.status);//活动状态加属性
			$(".price").text(datapirce);//金额
			
			$(".order-xq-bcbtn").attr('money',datapirce);
			$(".order-xq-bcbtn").attr('orderNo',data.orderId);
			$(".order-xq-bcbtn").attr('payWay',data.payWay);
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
function getQueryString(orderStatus) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + orderStatus + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}	


//判断订单详情页--支付 、取消按钮是否显示
    var Status =getQueryString('orderStatus');
	if(Status==1){
				$(".order-xq-bcbtn").hide();
			}else if(Status==2){
				$(".order-xq-bcbtn").show();
			}else if(Status==3){
				$(".order-xq-bcbtn").hide();
			}else if(Status==4){
				$(".order-xq-bcbtn").hide();
			}	
			
			
			
//订单详情--支付

$(".order-xq-bcbtn").on("tap",function(){
	
	var money = $(".order-xq-bcbtn").attr("money");
	var orderNo = $(".order-xq-bcbtn").attr("orderNo");
	var pay = $(".order-xq-bcbtn").attr("payWay");
		
		window.location.href="mettingPay-zif.html?money="+money+"&orderNo="+orderNo+"&payWay="+pay;
})

