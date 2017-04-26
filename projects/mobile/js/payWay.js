
//判断支付方式
$(document).ready(function(){
	
	$(".payMoney").text(getQueryString('money'));
	
	if(is_weixin()==true){
		
		$(".wechatBox_user").show();
		$(".payBox_user").hide();
	}else{
		
		$(".wechatBox_user").hide();
		$(".payBox_user").show();
	}
	
})


	$(".rentOrderpayWay").on("tap", function() {

			var newDate = $("#new_Date").val();
			var payWay = "";

			if($('.Zhifu_Pay').is(':checked')) {
				payWay = 1;
			} else if($('.weChat_Pay').is(':checked')) {
				payWay = 3;
			}

			//		console.log(payWay);

			//去支付页，
			if(payWay ==1) {
				window.location.href = box_webapp_url+"/rentPay/payment?payNumber=" + getQueryString('payNumber');
			} else if(payWay == 3) {
				$.ajax({
					type: "get",
					url: box_webapp_url+"/rentPay/payment?payNumber=" + getQueryString('payNumber'),
					success: function(ress) {
						console.log(ress);
						//支付订单
						window.location.href = ress;
					}
				})
			} else {
				alert(res.error_msg)
			}
			
				
				
		});		
		
			
		function getQueryString(money) {
			//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
			var reg = new RegExp('(^|&)' + money + '=([^&]*)(&|$)', 'i');
			var r = window.location.search.substr(1).match(reg);
			//      console.log(r);
			if(r != null) {
				return decodeURI(r[2]); //获取ClassName的参数
		
			}
			return null;
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
		
		
		function getQueryString(payNumber) {
			//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
			var reg = new RegExp('(^|&)' + payNumber + '=([^&]*)(&|$)', 'i');
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
		
		