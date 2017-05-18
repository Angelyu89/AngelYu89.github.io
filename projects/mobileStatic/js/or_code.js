	$.ajax({
			type:"GET",
			url:box_webapp_url+"/rentPay/payment?",
			data:{payNumber:data;},
			dataType:"json",
			success:function(res){
				console.log(res);
				//支付订单
				if(res.code==0){
				//去支付页，
				 var data = res.data;
				 
//				 window.location.href ="http://115.28.40.198:8080/rentPay/payment?payNumber="+ data;
				}
				else {
					alert(res.error_msg)
				}
			}
			
		});