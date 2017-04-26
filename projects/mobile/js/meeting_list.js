$(function(){
	$(document).ready(function(){
		cityShow();
	});


	//返回空间
	$(".user_metting_city").change(function(){
		$(".user_metting_space").html('');
		var cityId = $(".user_metting_city option:selected").val()
				$.ajax({
					type:"post",
					url:box_webapp_url+"/space1",
					data:{cityCode:cityId},
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

	});
	
	
	
$(function(){
	$(document).ready(function(){
		meetingList();
	});
	
	
	
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
						'<img src='+data[i].image+' alt="" />'+
						'<div class="long-price">'+
							'<span>'+data[i].boardRoomName+'</span>'+'<span>('+data[i].maxPeopNum+'人)</span>'+
							'<span class="long-price-rg">'+data[i].price+'元</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].spaceAddress+'</span>'+
							'<div class="rent-office-yuding-time">'+data[i].startTime+'-'+data[i].endTime+'</div>'+
							'<button class="long-price-rg met_lisuserBtn" id='+data[i].boardRoomId+'>预定</button>'+
						'</div>'+
						'<div class="rent-office-gongwei meetingoffice-gongwei">'+
							'<span>'+data[i].spaceId+'个工位可预订</span>'+
							'<span>'+data[i].spaceName+'</span>'+		
						'</div>'+					
				'</div>'
			};	
					
				}

//				console.log(str);
				$(".mettingboxfixed").html(str);
				
			}
			
		});	
		
	}
	
	$(".user_metting_space").change(function(){
		var spaceid = $(".user_metting_space option:selected").val();
		
		$.ajax({
			type:"post",
			url:box_webapp_url+"/boardroom/listByPage",
			data:{spaceId:spaceid},
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
							'<span>'+data[i].boardRoomName+'</span>'+'<span>('+data[i].maxPeopNum+'人)</span>'+
							'<span class="long-price-rg">'+data[i].price+'元</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].spaceAddress+'</span>'+
							'<div class="rent-office-yuding-time">'+data[i].startTime+'-'+data[i].endTime+'</div>'+
							'<button class="long-price-rg met_lisuserBtn" id='+data[i].boardRoomId+'>预定</button>'+
						'</div>'+
						'<div class="rent-office-gongwei meetingoffice-gongwei">'+
							'<span>'+data[i].spaceId+'个工位可预订</span>'+
							'<span>'+data[i].spaceName+'</span>'+		
						'</div>'+					
				'</div>'
			};	
				}
			
//				console.log(str);
				
				$(".mettingboxfixed").html(str);
			}
		});	
		
		})


})
		
