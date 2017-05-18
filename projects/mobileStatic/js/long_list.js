$(function(){
	
	longList();
	longXQ();
})

	function longList(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/longStation/list",
			data:'',
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
					str += '<div class="long-rent-nav-img-box">'+
					'<a href="Long-rent-xq.html">'+
						'<img src='+box_qiniu_img_url+data[i].space.image+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].space.spaceName+'</span>'+
							'<span class="long-price-rg">'+data[i].space.longPrice+'</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].space.address+'</span>'+
								'<button class="long-price-rg makeBtn" id='+data[i].id+'>预约入驻</button>'+
						'</div>'+
				'</div>'
				
				}
//				console.log(str);
				$(".long-rent-nav-img-box").html(str);
			}		
			}
			
		});	
		
	}
	
	
	
	//长租详情
	function longXQ(){
			$.ajax({
				type:"post",
				url:box_webapp_url+"/longStation/detail",
				data:{id:getQueryString('id')},
				dataType:"json",
				success:function(res){
					console.log(res);
					
				if(res.code==200){
					
					var data=res.partition;
					
					var dataID =res.longstation;
					var datalocation =res.longstation.space;
					var dataspace = res.activities;//本空间活动
					
					var str="";
					
					$(".user_longXq img").attr("src",box_qiniu_img_url+datalocation.image);
					$(".user_longXq h4").text(datalocation.name);
					$(".user_longXqadrss").text(datalocation.address);
					$(".user_longXqtel").text(datalocation.phone);
					$(".long-rent-xq-mapbox p").text(datalocation.detail);
					$("#longXqPrice").text(datalocation.longPrice);
					$(".xqlongBtn").attr('id',dataID.id);
					
					for(var i=0;i<dataspace.length;i++){
						str +='<div class="long-rent-xq-lunbotuImg">'+
								'<div class="long_xqUserImg">'+
									'<img src='+box_qiniu_img_url+dataspace[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long_xq_spaceBox">'+
									'<div class="long_xq_spaceBox_name01">'+dataspace[i].name+'</div>'+
									'<div class="long_xq_spaceBox_state">'+dataspace[i].status+'</div>'+
								'</div>'+
							'</div>'
					}
					
					$(".long-rent-xq-lunbotu").html(str);
					console.log(str)
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


	//长租预约入驻
	$("#sub").on("tap",function(){

		var user_city = $("#space_user_city").val();//城市名称
		var user_space = $("#space_user_space").val();//空间名称
		
		var in_date = $("#app_user_time").val();//入驻时间
		var new_date = in_date.replace(/-/g,"/");
		
		var user_name = $("#company_name").val();// 公司名称
		
		var user_contact = $("#contact").val(); //联系人
		var user_tel = $("#tel").val();		    //联系电话
		var user_people = $("#people").val();   //入驻人数
		var user_note = $("#note").val();
			
		var user_spaceId=$("#company_name");//空间id
			
			if(user_city==""|| user_city==null){
				var span_city=$("<span class='span_city'></span>");

				$(".appd_list_city").append(span_city);				
				
				$(".span_city").text("请选择城市");
				
				return false;
			}
			
			else if(user_space==""||user_space== null){
				var span_space=$("<span class='span_space'></span>");
				
				$(".appd_list_space").append(span_space);
				
				$(".span_space").text("请选择空间");
				
				return false;
			}
			
			else if(in_date==""||in_date==null){
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
			url:"http://121.42.238.147:8080/book/save",
			dataType:"json",
			data:{
				city:user_city, //城市名称
				workshop:user_space,//空间名称
				workshopId:getQueryString('id'),//空间id
				bookingDate:new_date, //入驻日期
				company:user_name,  //公司名称
				name:user_contact,	//联系人			
				phone:user_tel, //电话
				number:user_people, //入驻人数
				remark:user_note, //备注
			},
			success:function(res){
				console.log(res);
				
				if(res==200){
//					window.location.href ="rent-order.html";					
				}			
				else {
					if(res.errorCode==500){
						showAlert("请选择社区")
					}
					
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