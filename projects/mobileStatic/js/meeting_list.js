$(function(){
	$(document).ready(function(){
		cityShow();
		meetingList();
		mettingXq();
	});


	//返回空间
	$(".user_metting_city").change(function(){
		$(".user_metting_space").html('');
		var provinceID = $(".user_metting_city option:selected").val()
				$.ajax({
					type:"post",
					url:box_webapp_url+"/space1",
					data:{cityCode:provinceID},
					dataType:"json",
					success:function(data){
//						console.log(data)
						
						var str = '';	
						
						for(var i=0;i<data.length;i++){							
							
							str += '<option value = "'+data[i].id+'">'+data[i].spaceName+'</option>'
							
						}
						$(".user_metting_space").html('<option value="">所在空间</option>'+str);						
					}
				});
		
	})
	
	
	
	
	
	//返回城市（会议室列表）
	
	function cityShow(){
			$.ajax({
					type:"post",
					url:box_webapp_url+"/citiesOpen",
					dataType:"json",
					success:function(data){
//						console.log(data)

						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'							
						}
						$(".user_metting_city").html('<option value="">所在城市</option>'+str);						
					}
				});
	}




	//会议室列表
	
	function meetingList(){
		var usercity = $(".user_metting_city option").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/boardroom/listByPage",
			data:{city:usercity},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					
					var str = '';
					var data = res.data.result;
					
					for(var i=0; i<data.length; i++){
					
					str += '<div class="long-rent-nav-img-box rent-office-yuyuanbox metting-office-box">'+
					'<a href="meeting-room-xq.html">'+
						'<img src='+data[i].image+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].spaceName+'</span>'+
							'<span class="long-price-rg">'+data[i].price+' /30分钟</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].address+'</span>'+
							'<button class="long-price-rg met_lisuserBtn" id='+data[i].id+'>预定</button>'+
						'</div>'+
						'<div class="rent-office-gongwei">'+
							'<span>'+data[i].spaceId+'个工位可预订</span>'+
							'<span class="rent-office-yuding-time">'+data[i].startTime+'-'+data[i].endTime+'</span>'+					
						'</div>'+					
				'</div>'
			};	
					
				}

//				console.log(str);
				
				$(".metting-office-box").html(str);
				
			}
			
		});	
		
	}
	
	$(".user_metting_space").change(function(){
		
//		var usercity = $(".user_metting_city option").val();
		var spaceid = $(".user_metting_space option:selected").val();
		
		$.ajax({
			type:"post",
			url:box_webapp_url+"/boardroom/listByPage",
			data:{plantId:spaceid},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					
					var str = '';
					var data = res.data.result;
					
					for(var i=0; i<data.length; i++){
					
					str += '<div class="long-rent-nav-img-box rent-office-yuyuanbox metting-office-box">'+
					'<a href="meeting-room-xq.html">'+
						'<img src='+data[i].image+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].spaceName+'</span>'+
							'<span class="long-price-rg">'+data[i].price+' /30分钟</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].address+'</span>'+
							'<button class="long-price-rg met_lisuserBtn" id='+data[i].id+'>预定</button>'+
						'</div>'+
						'<div class="rent-office-gongwei">'+
							'<span>'+data[i].spaceId+'个工位可预订</span>'+
							'<span class="rent-office-yuding-time">'+data[i].startTime+'-'+data[i].endTime+'</span>'+					
						'</div>'+					
				'</div>'
			};	
				}
			
//				console.log(str);
				
				$(".metting-office-box").html(str);
			}
		});	
		
		})
		
	//会议室详情
	console.log(getQueryString('id'));
	function mettingXq(){
		var newdate = $("#newdate").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/boardroom/boardRoomDetail",
			data:{
				boardRoomId: getQueryString('id'),
				selectDate:newdate},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					
				var str = '';
				
				var data = res.data.boardRoom;//获取所有值
				
				var a = res.data.boardRoom.reserveTime.split(",");//将reserveTime的字符串转化为数组（后台返回的已经预定了的参数）
					console.log(a);
				
				//遍历input值
				$('.modalTime span').each(function(){					
//						console.log(($(this).attr('datetime')));//查看datetime	
//						console.log(a.indexOf($(this).attr('datetime')));//查看datetime转为下标	
						
					if (a.indexOf(($(this).attr('datetime'))) >= 0) {
						
						$(this).css("background-color","gainsboro").prop("disabled","true");//判断已预定时间并灰色禁用
					}
		
				});
	
				var str ='<div class="met-xq-containerbox">'+
				'<div class="met-xq-box">'+
					'<div class="met-xq">'+					
						'<a href="">'+
							'<div class="li-lf">'+
								'<img src="images/img_11.png" alt="" />'+
							'</div>'+
							'<div class="li-rg">'+
								'<div class="li-h5 spaceXqID" id='+data.spaceId+'>'+data.spaceName+'</div>'+
								'<div class="li-ip">'+data.address+'</div>'+
								'<div class="li-ip">'+data.createTime+'</div>'+
							'</div>'+
						'</a>'+												
					'</div>'+	
				'</div>'+			
				'<div class="met-xq-ydbox">'+
					'<div class="rent-yuytimeboxs">'+
						'<div class="rent-yuytime metnewstime">'+
							'<span>预约信息</span>'+
						'</div>'+
						'<div class="rent-yuytime metnewstime">'+
							'<span>预约日期</span>'+
							'<div class="rent-xq-gengduo">'+
									'<input type="date" class="rent-xq-date" id="newdate" min=""/>'+
							'</div>'+
						'</div>'+
						'<div class="rent-yuytime metnewstime">'+
						'<span>预约时间</span>'+
							'<div class="rent-xq-gengduo metting-xq-timeabox">'+
								'<div class="metting-xq-time">'+
									'<input type="text" id="time-range-input" datetime="" evaluation=""/>'+
								'</div>'+
								'<span id="result-show">0小时</span>'+
								'<button type="button" data-toggle="modal" data-target="#myModal" onclick="changeDateK()"></button>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+				
				'<div class="rent-office-xq-newsbox">'+
					'<div class="rent-office-xq-news">'+
						'<ul>'+
							'<li class="app-list-city">'+
								'<span>会议室信息</span>'+
							'</li>'+							
							'<li class="app-list-input">'+
								'<span>会议室单价</span>'+
								'<div class="met-dj">'+
									'<input type="text" placeholder="￥'+data.price+'元 /每分钟"/>'+
								'</div>'+
							'</li>'+
							'<li class="app-list-input">'+
								'<span>容纳人数</span>'+
								'<div>'+
									'<input type="text" placeholder="'+data.peopleCount+'人"/>'
								'</div>'+
							'</li>'+
							'<li class="app-list-input line">'+
								'<span>配套设施</span>'+				
							'</li>'+
						'</ul>'+						
						'<div class="rent-office-facilitiesbox">'+
							'<div class="rent-office-facilities">'+
								'<ul>'+
									'<li class="fac01">'+
										'<span>WiFi</span>'+
									'</li>'+
									'<li class="fac02">'+
										 '<spn>会议室</span>'+
									'</li>'+
									'<li class="fac03">'+
										 '<span>休闲</span>'+
									'</li>'+
									'<li class="fac04">'+
										 '<span>打印</span>'+
									'</li>'+
									'<li class="fac05">'+
										 '<span>饮用水</span>'+
									'</li>'+
									'<li class="fac06">'+
										 '<span>办公</span>'+
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'+						
					'</div>'+			
				'</div>'+
			'</div>';	
					
			}
//				console.log(str);
				
//			$('#myModalLabel').html(str);
				
			//获取当前的年月日
			 var date = new Date();
//			    console.log(date);
			    var seperator1 = "-";
			    var seperator2 = ":";
			    var month = date.getMonth() + 1;
			    var strDate = date.getDate();
			    if (month >= 1 && month <= 9) {
			        month = "0" + month;
			    }
			    if (strDate >= 0 && strDate <= 9) {
			        strDate = "0" + strDate;
			    }
			    //年月日时分秒
//			    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//			            + " " + date.getHours() + seperator2 + date.getMinutes()
//			            + seperator2 + date.getSeconds();
//			             console.log(currentdate);
			    
			    //年月日
			     var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
			     console.log(currentdate);         
			      
				$("#newdate").attr("min",currentdate);
				console.log(newdate);
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
		
	//会议室创建订单
	$(".met-yud-btn").on("tap",function(){
		var nedata = $("#newdate").val();
		var time = $("#time-range-input").val();
		var attribute =$("#time-range-input").attr('evaluation');
			attribute =nedata+" "+time.slice(0,5)+nedata+" "+time.slice(6,11);
				console.log(attribute);
				
		var starT =attribute.substring(0,16);
		starT +=':00';
		var endT =attribute.substring(16,36);
		endT +=':00';
		console.log(starT,endT);
		
		var payWay = "";

		if($('.Zhifu_Pay').is(':checked')) {
			payWay = 1;
		} else if($('.weChat_Pay').is(':checked')) {
			payWay = 3;
		}
	
//		console.log(getQueryString('id'))
		
		$.ajax({
			type:"post",
//			url:"http://115.28.40.198:8080/order/cancel?orderid=21",//取消订单
			url:box_webapp_url+"/boardroom/addOrder",
				data:{boardRoomId:getQueryString('id'),
					startTime:starT,
					endTime:endT,
					payWay:payWay},
				dataType:"json",
				success:function(res){
				console.log(res);
			
			//支付订单
				if(res.code == 200) {
							//去支付页，
							
							if(payWay == 1) {
//								window.location.href =box_webapp_url+"/pay/payment?orderNo="+res.orderId+'&paychannel=1'
								window.location.href = box_webapp_url+"/pay/payment?orderNo="+res.data+'&paychannel=1'
							} else if(payWay == 3){
								$.ajax({
									type: "get",
									url:box_webapp_url+"/pay/payment?orderNo="+res.data+ '&paychannel=3',
									success: function(ress) {
										console.log(ress);
										//支付订单
										window.location.href = ress;
									}
								})
							} else {
								alert(res.error_msg)
							}
						}
			
			}
			
		});
		
	})
	});

		//判断是否在微信内部
		function is_weixin() {

			var ua = navigator.userAgent.toLowerCase();

			if(ua.match(/MicroMessenger/i) == "micromessenger") {

				return true;

			} else {

				return false;

			}

		}
