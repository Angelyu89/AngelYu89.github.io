$(function(){
	$(document).ready(function(){
		showProvince();

	})
	
	//返回所在城市
	$('.user_rent_provinces').change(function(){
		$('.user_rent_city').html('');
		var provinceId = $('.user_rent_provinces option:selected').val();
		$.ajax({
					type:"post",
					url:box_webapp_url+"/cities",
					data:{province:provinceId},
					dataType:"json",
					success:function(data){
//						console.log(data)
						
						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'
							
						}
						$(".user_rent_city").html(str);						
					}
				});
	})
		
	
	//所在省份 
	function showProvince(){
		$.ajax({
					type:"post",
					url:box_webapp_url+"/provinces",
					dataType:"json",
					success:function(data){
//						console.log(data)
//						if(data.code == 200){
//							
//						}
						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'							
						}
						$(".user_rent_provinces").html('<option value="">所在省份</option>'+str);						
					}
				});
	}
	
	});





$(function(){
	
	setList();
})

//场地列表
function setList(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/place/placeList",
			data:{
				province:"",
				cityCode:"",
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				
				var str = '';
				var showme1 = '';
				var showme2 = '';
				var showme3 = '';
				var showme4 = '';
				var showme5 = '';
				var showme6 = '';
				var showme7 = '';
				var showme8 = '';
				var showme9 = '';
				
				for(var i=0;i<data.length;i++){
					
				var datadeviceList = res.data.result[i].deviceList;
				
					if(datadeviceList!=null){
						
						for(var j=0;j<datadeviceList.length;j++){
						
						if(datadeviceList[j]==1){
							$(".set-wifi").show();//wifi
						 	 showme1= 'block';
						}else if(datadeviceList[j]==3){
							$(".set-chair").show();//座椅
							 showme3= 'block';
						}else if(datadeviceList[j]==4){
							$(".set-platform").show();//讲台
							 showme4= 'block';
						}else if(datadeviceList[j]==5){
							$(".set-projection").show();//投影
							 showme5= 'block';
						}else if(datadeviceList[j]==6){
							$(".set-Tv").show();//电视
							 showme6= 'block';
						}else if(datadeviceList[j]==7){
							$(".set-mike").show();//话筒
							 showme7= 'block';
							
						}else if(datadeviceList[j]==8){
							$(".set-whiteboard").show();//白板
							 showme8= 'block';
						}else if(datadeviceList[j]==9){
							$(".set-stereo").show();//音响
							 showme9= 'block';
						}
				}
						
					}else if(datadeviceList==null){
						
					}
					
				
				str += '<div class="long-rent-nav-img-box set_listbox">'+
					'<a href="site-xq.html">'+
						'<img src='+data[i].placeImg+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].placeName+'</span>'+
							'<span class="long-price-rg">'+data[i].placePrice+'元/小时</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].placeAddress+'</span>'+
									'<button class="long-price-rg set_placeId" id='+data[i].placeId+'>预约入驻</button>'+
						'</div>'+
						'<div class="set_activity">'+
							'<ul class="set_equipment">'+
								'<li class="set-mike">'+
									'<img src="images/img2331123_13.png" style="display:'+showme7+'"  alt="" />'+
								'</li>'+
								'<li class="set-stereo">'+
									'<img src="images/img2331123_11.png" style="display:'+showme9+'" alt="" />'+
								'</li>'+
								'<li class="set-projection">'+
									'<img src="images/img2331123_09.png" style="display:'+showme5+'" alt="" />'+
								'</li>'+
								'<li class="set-wifi">'+
									'<img src="images/img2331123_07.png" style="display:'+showme1+'" alt="" />'+
								'</li>'+
								'<li class="set-whiteboard">'+
									'<img src="images/img2331123_16.png" style="display:'+showme8+'" alt="" />'+
								'</li>'+
								'<li class="set-platform">'+
									'<img src="images/img2331123_19.png" style="display:'+showme4+'" alt="" />'+
								'</li>'+
								'<li class="set-chair">'+
									'<img src="images/img1_07.png" style="display:'+showme3+'" alt="" />'+
								'</li>'+
								'<li class="set-Tv">'+
									'<img src="images/img1_05.png" style="display:'+showme6+'" alt="" />'+
								'</li>'+
							'</ul>'+
						'</div>'+
				'</div>';
				
				}
//				console.log(str);
				$(".setboxfixed").html(str);
			}		
			}
			
		});	
	
	
}

$(".user_rent_city").change(function(){
	var usercity = $(".user_rent_city option").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/place/placeList",
			data:{
				province:"",
				cityCode:usercity,
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				
				var str = '';
				var showme1 = '';
				var showme2 = '';
				var showme3 = '';
				var showme4 = '';
				var showme5 = '';
				var showme6 = '';
				var showme7 = '';
				var showme8 = '';
				var showme9 = '';
				
				for(var i=0;i<data.length;i++){
						var datadeviceList = res.data.result[i].deviceList;
				
					if(datadeviceList!=null){
						
						for(var j=0;j<datadeviceList.length;j++){
						
						if(datadeviceList[j]==1){
							$(".set-wifi").show();//wifi
						 	 showme1= 'block';
						}else if(datadeviceList[j]==3){
							$(".set-chair").show();//座椅
							 showme3= 'block';
						}else if(datadeviceList[j]==4){
							$(".set-platform").show();//讲台
							 showme4= 'block';
						}else if(datadeviceList[j]==5){
							$(".set-projection").show();//投影
							 showme5= 'block';
						}else if(datadeviceList[j]==6){
							$(".set-Tv").show();//电视
							 showme6= 'block';
						}else if(datadeviceList[j]==7){
							$(".set-mike").show();//话筒
							 showme7= 'block';
							
						}else if(datadeviceList[j]==8){
							$(".set-whiteboard").show();//白板
							 showme8= 'block';
						}else if(datadeviceList[j]==9){
							$(".set-stereo").show();//音响
							 showme9= 'block';
						}
				}
						
					}else if(datadeviceList==null){
						
					}
				str += '<div class="long-rent-nav-img-box set_listbox">'+
					'<a href="site-xq.html">'+
						'<img src="'+data[i].placeImg+'" alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].placeName+'</span>'+
							'<span class="long-price-rg">'+data[i].placePrice+'元</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].placeAddress+'</span>'+
								'<button class="long-price-rg set_placeId" id='+data[i].placeId+'>预约入驻</button>'+
						'</div>'+
						'<div class="set_activity">'+
							'<ul class="set_equipment">'+
								'<li class="set-mike">'+
									'<img src="images/img2331123_13.png" style="display:'+showme7+'"  alt="" />'+
								'</li>'+
								'<li class="set-stereo">'+
									'<img src="images/img2331123_11.png" style="display:'+showme9+'" alt="" />'+
								'</li>'+
								'<li class="set-projection">'+
									'<img src="images/img2331123_09.png" style="display:'+showme5+'" alt="" />'+
								'</li>'+
								'<li class="set-wifi">'+
									'<img src="images/img2331123_07.png" style="display:'+showme1+'" alt="" />'+
								'</li>'+
								'<li class="set-whiteboard">'+
									'<img src="images/img2331123_16.png" style="display:'+showme8+'" alt="" />'+
								'</li>'+
								'<li class="set-platform">'+
									'<img src="images/img2331123_19.png" style="display:'+showme4+'" alt="" />'+
								'</li>'+
								'<li class="set-chair">'+
									'<img src="images/img1_07.png" style="display:'+showme3+'" alt="" />'+
								'</li>'+
								'<li class="set-Tv">'+
									'<img src="images/img1_05.png" style="display:'+showme6+'" alt="" />'+
								'</li>'+
							'</ul>'+
						'</div>'+
				'</div>';
				
				}
//				console.log(str);
				$(".setboxfixed").html(str);
			}		
			}
			
		});	
	
	
	
})

//场地详情




