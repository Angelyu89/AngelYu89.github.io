$(function() {

	activityListOrderAll();
})

function activityListOrderAll() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 0
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			var data = res.data.result;
			var str = '';

			if(res.code == 200) {

				var Status = "";
				if(data.orderStatus == 1) {
					Status = "已报名"
				} else if(data.orderStatus == 2) {
					Status = "待付款"
				} else if(data.orderStatus == 3) {
					Status = "已付款"
				} else if(data.orderStatus == 4) {
					Status = "已取消"
				}

				for(var i = 0; i < data.length; i++) {

					var datatime = data[i].startTime;

					var c = new Date();
					c.setTime(datatime);
					var year = c.getFullYear();
					var month = c.getMonth() + 1;
					var strDate = c.getDate();
					var hour = c.getHours();
					var minute = c.getMinutes();
					var second = c.getSeconds();
					if(month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if(strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					if(hour < 10) hour = '0' + hour;
					if(minute < 10) minute = '0' + minute;
					if(second < 10) second = '0' + second;
					var newendTime = (year + "-" + month + "-" + strDate);

					if(data[i].orderStatus == 2) {
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">待付款</span>' +
							'<button class="quxiaobtn activiylistOrder_qx" id="' + data[i].enrollId + '">取消订单</button>' +
							'<button class="activityOrderPayWayBtn" money="' + data[i].orderAmt + '" orderNo="' + data[i].orderId + '" payWay="">活动支付</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 3) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '6元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已付款</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 4) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].ticketPrice + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已取消</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 1) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已报名</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					}
				}

				$(".activityAll").html(str);
				//					console.log(str);
			}
		}

	});

}

//全部订单
$(".activityAllBtn").on("tap", function() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 0
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			var data = res.data.result;
			var str = '';

			if(res.code == 200) {
				for(var i = 0; i < data.length; i++) {
					if(data[i].orderStatus == 2) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">待付款</span>' +
							'<button class="quxiaobtn activiylistOrder_qx" id="' + data[i].enrollId + '">取消订单</button>' +
							'<button class="activityOrderPayWayBtn" money="' + data[i].orderAmt + '" orderNo="' + data[i].orderId + '" payWay="">活动支付</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 3) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '6元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已付款</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 4) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].ticketPrice + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已取消</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					} else if(data[i].orderStatus == 1) {

						var datatime = data[i].startTime;

						var c = new Date();
						c.setTime(datatime);
						var year = c.getFullYear();
						var month = c.getMonth() + 1;
						var strDate = c.getDate();
						var hour = c.getHours();
						var minute = c.getMinutes();
						var second = c.getSeconds();
						if(month >= 1 && month <= 9) {
							month = "0" + month;
						}
						if(strDate >= 0 && strDate <= 9) {
							strDate = "0" + strDate;
						}
						if(hour < 10) hour = '0' + hour;
						if(minute < 10) minute = '0' + minute;
						if(second < 10) second = '0' + second;
						var newendTime = (year + "-" + month + "-" + strDate);
						str += '<div class="home-cion-ip">' +
							'<div class="home-cion-list activity-list">' +
							'<ul>' +
							'<li>' +
							'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
							'<div class="li-lf">' +
							'<img src="images/img_11.png" alt="" />' +
							'</div>' +
							'<div class="li-rg">' +
							'<div class="li-h5">' + data[i].activityName + '</div>' +
							'<div class="li-ip">' + data[i].activityAddress + '</div>' +
							'<div class="li-ip">' + newendTime + '</div>' +
							'</div>' +
							'<div class="act-pay">' +
							'<span class="pay-lf">订单编号：</span>'+
							'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
							'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
							'</div>' +
							'</div>' +
							'<div class="activity-zifubtn">' +
							'<span class="pay-lf">已报名</span>' +
							'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</div>' +
							'</div>'
					}
				}

				$(".activityAll").html(str);
				//					console.log(str);
			}
		}

	});

})

//待付款
$(".activityPendingBtn").on("tap", function() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 2
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			var data = res.data.result;
			var str = '';

			if(res.code == 200) {

				for(var i = 0; i < data.length; i++) {

					var datatime = data[i].startTime;
					var c = new Date();
					c.setTime(datatime);
					var year = c.getFullYear();
					var month = c.getMonth() + 1;
					var strDate = c.getDate();
					var hour = c.getHours();
					var minute = c.getMinutes();
					var second = c.getSeconds();
					if(month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if(strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					if(hour < 10) hour = '0' + hour;
					if(minute < 10) minute = '0' + minute;
					if(second < 10) second = '0' + second;
					var newendTime = (year + "-" + month + "-" + strDate);

					str += '<div class="home-cion-ip">' +
						'<div class="home-cion-list activity-list">' +
						'<ul>' +
						'<li>' +
						'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
						'<div class="li-lf">' +
						'<img src="images/img_11.png" alt="" />' +
						'</div>' +
						'<div class="li-rg">' +
						'<div class="li-h5">' + data[i].activityName + '</div>' +
						'<div class="li-ip">' + data[i].activityAddress + '</div>' +
						'<div class="li-ip">' + newendTime + '</div>' +
						'</div>' +
						'<div class="act-pay">' +
						'<span class="pay-lf">订单编号：</span>'+
						'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
						'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
						'</div>' +
						'</div>' +
						'<div class="activity-zifubtn">' +
						'<span class="pay-lf">待付款</span>' +
						'<button class="quxiaobtn activiylistOrder_qx" id="' + data[i].enrollId + '">取消订单</button>' +
						'<button class="activityOrderPayWayBtn" money="' + data[i].orderAmt + '" orderNo="' + data[i].orderId + '" payWay="">活动支付</button>' +
						'</div>' +
						'</li>' +
						'</ul>' +
						'</div>' +
						'</div>'
				}
				$(".activityPending").html(str);

			}

		}

	})
})

//已付款
$(".activityPaymentBtn").on("tap", function() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 3
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			if(res.code == 200) {

				var data = res.data.result;

				var str = '';

				for(var i = 0; i < data.length; i++) {

					var datatime = data[i].startTime;

					var c = new Date();
					c.setTime(datatime);
					var year = c.getFullYear();
					var month = c.getMonth() + 1;
					var strDate = c.getDate();
					var hour = c.getHours();
					var minute = c.getMinutes();
					var second = c.getSeconds();
					if(month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if(strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					if(hour < 10) hour = '0' + hour;
					if(minute < 10) minute = '0' + minute;
					if(second < 10) second = '0' + second;
					var newendTime = (year + "-" + month + "-" + strDate);

					str += '<div class="home-cion-ip">' +
						'<div class="home-cion-list activity-list">' +
						'<ul>' +
						'<li>' +
						'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
						'<div class="li-lf">' +
						'<img src="images/img_11.png" alt="" />' +
						'</div>' +
						'<div class="li-rg">' +
						'<div class="li-h5">' + data[i].activityName + '</div>' +
						'<div class="li-ip">' + data[i].activityAddress + '</div>' +
						'<div class="li-ip">' + newendTime + '</div>' +
						'</div>' +
						'<div class="act-pay">' +
						'<span class="pay-lf">订单编号：</span>'+
						'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
						'<span class="pay-rg">￥' + data[i].orderAmt + '6元</span>' +
						'</div>' +
						'</div>' +
						'<div class="activity-zifubtn">' +
						'<span class="pay-lf">已付款</span>' +
						'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
						'</div>' +
						'</li>' +
						'</ul>' +
						'</div>' +
						'</div>'
				}
				$(".activityPayment").html(str);
			}

		}

	})
})

//已取消
$(".activityFreeticketBtn").on("tap", function() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 4
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			var data = res.data.result;
			var str = '';

			if(res.code == 200) {

				for(var i = 0; i < data.length; i++) {

					var datatime = data[i].startTime;
					var c = new Date();
					c.setTime(datatime);
					var year = c.getFullYear();
					var month = c.getMonth() + 1;
					var strDate = c.getDate();
					var hour = c.getHours();
					var minute = c.getMinutes();
					var second = c.getSeconds();
					if(month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if(strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					if(hour < 10) hour = '0' + hour;
					if(minute < 10) minute = '0' + minute;
					if(second < 10) second = '0' + second;
					var newendTime = (year + "-" + month + "-" + strDate);

					str += '<div class="home-cion-ip">' +
						'<div class="home-cion-list activity-list">' +
						'<ul>' +
						'<li>' +
						'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
						'<div class="li-lf">' +
						'<img src="images/img_11.png" alt="" />' +
						'</div>' +
						'<div class="li-rg">' +
						'<div class="li-h5">' + data[i].activityName + '</div>' +
						'<div class="li-ip">' + data[i].activityAddress + '</div>' +
						'<div class="li-ip">' + newendTime + '</div>' +
						'</div>' +
						'<div class="act-pay">' +
						'<span class="pay-lf">订单编号：</span>'+
						'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
						'<span class="pay-rg">￥' + data[i].ticketPrice + '元</span>' +
						'</div>' +
						'</div>' +
						'<div class="activity-zifubtn">' +
						'<span class="pay-lf">已取消</span>' +
						'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
						'</div>' +
						'</li>' +
						'</ul>' +
						'</div>' +
						'</div>'
				}
				$(".activityFreeticket").html(str);
			}

		}

	})

})

//已报名
$(".activityRegisteredBtn").on("tap", function() {
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/getList",
		data: {
			searchStatus: 1
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			var data = res.data.result;
			var str = '';

			if(res.code == 200) {

				for(var i = 0; i < data.length; i++) {

					var datatime = data[i].startTime;

					var c = new Date();
					c.setTime(datatime);
					var year = c.getFullYear();
					var month = c.getMonth() + 1;
					var strDate = c.getDate();
					var hour = c.getHours();
					var minute = c.getMinutes();
					var second = c.getSeconds();
					if(month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if(strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					if(hour < 10) hour = '0' + hour;
					if(minute < 10) minute = '0' + minute;
					if(second < 10) second = '0' + second;
					var newendTime = (year + "-" + month + "-" + strDate);

					str += '<div class="home-cion-ip">' +
						'<div class="home-cion-list activity-list">' +
						'<ul>' +
						'<li>' +
						'<div class="activityOrder_XQListBtn" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">' +
						'<div class="li-lf">' +
						'<img src="images/img_11.png" alt="" />' +
						'</div>' +
						'<div class="li-rg">' +
						'<div class="li-h5">' + data[i].activityName + '</div>' +
						'<div class="li-ip">' + data[i].activityAddress + '</div>' +
						'<div class="li-ip">' + newendTime + '</div>' +
						'</div>' +
						'<div class="act-pay">' +
						'<span class="pay-lf">订单编号：</span>'+
						'<span class="activitybianhao">'+data[i].enrollId+'</span>'+
						'<span class="pay-rg">￥' + data[i].orderAmt + '元</span>' +
						'</div>' +
						'</div>' +
						'<div class="activity-zifubtn">' +
						'<span class="pay-lf">已报名</span>' +
						'<button class="acitvityOrderListBtnlook" activityOrder_XQListBtn="' + data[i].enrollId + '" orderStatus="' + data[i].orderStatus + '">查看订单</button>' +
						'</div>' +
						'</li>' +
						'</ul>' +
						'</div>' +
						'</div>'
				}
				$(".activityRegistered").html(str);
			}

		}

	})

})

//活动列表--取消订单
$(".activityOrderqxBox").on("tap", ".activiylistOrder_qx", function() {
	orderID = $(this).attr('id');

	console.log(orderID)
	$.ajax({
		type: "post",
		url: box_webapp_url + "/activityTickets/cancel",
		data: {
			activityEnrollId: orderID
		},
		dataType: "json",
		success: function(res) {
			console.log(res);
			if(res.code == 200) {
				alert('订单已取消');
			}
		}
	})
})

//$(function(){
//	$(document).ready(function(){
//		timeEncapsulate(1492704000000);
//	});
//
//		function timeEncapsulate(f){
//				
//		var c = new Date();
//        c.setTime(f);
//        var year = c.getFullYear();
//        var month = c.getMonth()+1;
//        var strDate = c.getDate();
//        var hour = c.getHours();
//        var minute  = c.getMinutes();
//        var second = c.getSeconds();
//          if (month >= 1 && month <= 9) {
//		        month = "0" + month;
//		    }
//		    if (strDate >= 0 && strDate <= 9) {
//		        strDate = "0" + strDate;
//		    }
//		    if(hour<10) hour = '0' + hour; 
//		    if(minute<10) minute = '0' + minute; 
//		    if(second<10) second = '0' + second; 
//        var newendTime =(year+"/"+month+"/"+strDate);
//		}
//	})