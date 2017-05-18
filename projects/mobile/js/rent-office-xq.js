$(function() {
	showLocation_details();
	//	sub_rentOrder();

})

//工位详情
function showLocation_details() {

	var newDate = $("#new_Date").val();

	$.ajax({
		type: "post",
		url: box_webapp_url+"/dzStation/getStationInfo",
		data: {
			stationId: getQueryString('id'),
			date: newDate
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			if(res.code == 200) {

				var data = res.data;
				var unixTimestamp = new Date(1487056967000 * 1000);
				createTime = unixTimestamp.toLocaleString();
				// 					console.log(createTime);	

				$("#user_bannerimg_rent").attr("src", "data.spaceAddress");
				$("#usernameh4_rent").text(data.spaceName);
				$("#user_id_rent").text(data.spaceAddress);
				//				$("#user_tel_rent").text(data.phoneBooth);
				$("#user_time_rent").text(data.openTime + '-' + data.closeTime);
				//				$("#pre_time").text(data.createTime);

				$('#user_rent_nmber').val(data.count);
				$('#user_rent_qian').val(data.price);
				$(".rent_xq_pirobox").text(data.price);
				//				$(".sub_order").attr('id',data.id);

			}
		}

	});

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


//短租创建订单

$(".sub_order").on("tap", function() {

			var newDate = $("#new_Date").val();
			var payWay = "";

			if($('.Zhifu_Pay').is(':checked')) {
				payWay = 1;
			} else if($('.weChat_Pay').is(':checked')) {
				payWay = 3;
			}

			//		console.log(payWay);

			//提交订单
			$.ajax({
					type: "post",
					url: box_webapp_url+"/rentPay/creatOrder",
					data: {
						payWay: payWay,
						roomId: getQueryString('id'),
						date: newDate
					},
					dataType: "json",
					success: function(res) {
						console.log(res);
						//支付订单
						if(res.code == 200) {
							//去支付页，
							var data = res.data;
							if(payWay ==1) {
								window.location.href = box_webapp_url+"/rentPay/payment?payNumber=" + data;
							} else if(payWay == 3) {
								$.ajax({
									type: "get",
									url: box_webapp_url+"/rentPay/payment?payNumber=" + data,
									success: function(ress) {
										console.log(ress);
										//支付订单
										window.location.href = ress;
									}
								})
							} else {
								alert(res.error_msg)
							}
						}else if(res.code==600){
//								alert("未登录，请您先登录！")
//								window.location.href="login.html";
							}

					}})
			})

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


		//判断是否在微信内部
		function is_weixin() {

			var ua = navigator.userAgent.toLowerCase();

			if(ua.match(/MicroMessenger/i) == "micromessenger") {

				return true;

			} else {

				return false;

			}

		}
		