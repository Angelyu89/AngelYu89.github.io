$(function(){
	
	$(document).ready(function(){
		appoinment()
	})
	
	function appoinment(){
		$(".appointment_city").text(getQueryString('city'));//城市名称
		$(".appointment_space").text(getQueryString('spaceName'));//空间名称
	}
	
})

	//长租预约入驻
	$("#sub").on("tap",function(){
		var in_date = $("#app_user_time").val();//来访时间
		var new_date = in_date.replace(/-/g,"/");
		
		var user_name = $("#company_name").val();// 公司名称
		
		var user_contact = $("#contact").val(); //联系人
		var user_tel = $("#tel").val();		    //联系电话
		var user_people = $("#people").val();   //入驻人数
		var user_note = $("#note").val();
			
		var user_spaceId=$("#company_name");//空间id
			 if(in_date==""||in_date==null){
				var span_times=$("<span class='span_times'></span>");

				$(".user_spaTimebox").append(span_times);	
				
				$(".span_times").text("请选择时间");
				
				return false;
			}
			
			else if(user_name==""||user_name==null){
				$(".span_name").text("公司名称不能为空");
				
				return false;
			}				
			
			else if(user_contact==""||user_contact==null){
				
				$(".span_contact").text("联系人不能为空");
				
					return false;
				}
			else if(user_tel==""||user_tel==null){
				
				$(".span_tel").text("电话不能为空");
				
					return false;
				}
			else if(user_people==""||user_people==null){
				
				$(".span_people").text("入驻人数不能为空");
				
					return false;
			}	

		console.log(getQueryString('id'))
		$.ajax({
			type:"post",
			url:box_webapp_url+"/book/save",
			dataType:"json",
			data:{
				city:getQueryString('city'), //城市名称
				spaceName:getQueryString('spaceName'),//空间名称
				workshopId:getQueryString('id'),//空间id
				bookingDate:new_date, //来访日期
				company:user_name,  //公司名称
				name:user_contact,	//联系人			
				phone:user_tel, //电话
				number:user_people, //入驻人数
				remark:user_note, //备注
			},
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					alert("您已预约成功，稍后会联系您")		
					window.location.href="mobile-home.html";
				}			
				else if(res.code==500){
						showAlert("系统繁忙，请稍后再试")
				}else if(res.code==600){
//								alert("未登录，请您先登录！")
//								window.location.href="login.html";
							}
			},
			error:function(msg){
				console.log(msg);
			}
			
		});

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
		function getQueryString(city) {
			//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
			var reg = new RegExp('(^|&)' + city + '=([^&]*)(&|$)', 'i');
			var r = window.location.search.substr(1).match(reg);
			//      console.log(r);
			if(r != null) {
				return decodeURI(r[2]); //获取ClassName的参数

			}
			return null;
		}
		
	function getQueryString(spaceName) {
			//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
			var reg = new RegExp('(^|&)' + spaceName + '=([^&]*)(&|$)', 'i');
			var r = window.location.search.substr(1).match(reg);
			//      console.log(r);
			if(r != null) {
				return decodeURI(r[2]); //获取ClassName的参数

			}
			return null;
		}