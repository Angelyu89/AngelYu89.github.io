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
	
	longList();
})


	function longList(){
		$.ajax({
			type:"post",
			url:box_webapp_url+"/longStation/list",
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
					str+='<div class="long-rent-nav-img-box">'+
					'<a href="Long-rent-xq.html">'+
						'<img src='+data[i].img+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].spaceName+'</span>'+
							'<div class="long-price-rg">'+
								'<span >'+data[i].longPrice+'</span>'+
								'<span>元</span>'+
							'</div>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].spaceAddress+'</span>'+
								'<button class="long-price-rg makeBtn" id='+data[i].spaceId+'>预约入驻</button>'+
						'</div>'+
				'</div>'
				}
				$(".longmgBox").html(str);
			}		
			}
			
		});	
		
	}
	
	
	$(".user_rent_city").change(function(){
		
		var cityId =$(".user_rent_city option").val();
			$.ajax({
			type:"post",
			url:box_webapp_url+"/longStation/list",
			data:{
				province:"",
				cityCode:cityId,
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
					str += '<div class="long-rent-nav-img-box">'+
					'<a href="Long-rent-xq.html">'+
						'<img src='+data[i].img+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].spaceName+'</span>'+
							'<div class="long-price-rg">'+
								'<span >'+data[i].longPrice+'</span>'+
								'<span>元</span>'+
							'</div>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].spaceAddress+'</span>'+
								'<button class="long-price-rg makeBtn" id='+data[i].spaceId+'>预约入驻</button>'+
						'</div>'+
				'</div>'
				}
				$(".longmgBox").html(str);
			}		
			}
			
		});	
		
		
		
	})
	
	
	
	
	
	
	$(function () {
	    var winHeight = $(window).height();
	    var headerHeight = $(".long-rent-nav-box").height();
	    var mainHeight = $(".long-rent-nav-img-box").height();
	    var footerHeight = $(".footer").height();
	    var mainHeight = winHeight - headerHeight - footerHeight; // 浏览器窗口高度 - 头部高度 - 底部高度（注意div有边框等的情况）
	});
	
