$(function(){
	
	setList();
	siteXq();
})

//场地列表
function setList(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/place/placeList",
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
				str += '<div class="long-rent-nav-img-box set_listbox">'+
					'<a href="site-xq.html">'+
						'<img src='+data[i].mainPic+' alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].placeName+'</span>'+
							'<span class="long-price-rg">'+data[i].price+'元</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].address+'</span>'+
								'<a href="site-xq.html">'+
									'<button class="long-price-rg">预约入驻</button>'+
								'</a>'+
						'</div>'+
						'<div class="set_activity">'+
							'<span>'+data.indexOf.purposeList+'</span>'+
							'<span>企业年会</span>'+
							'<span>论坛</span>'+
						'</div>'+
				'</div>';
				
				}
//				console.log(str);
				$(".set_listbox").html(str);
			}		
			}
			
		});	
	
	
}


$(".user_rent_city").change(function(){
	
		$.ajax({
			type:"post",
			url:box_webapp_url+"/place/placeList",
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data.result;
				
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
				str += '<div class="long-rent-nav-img-box set_listbox">'+
					'<a href="site-xq.html">'+
						'<img src="images/img_11.png" alt="" />'+
					'</a>'+
						'<div class="long-price">'+
							'<span>'+data[i].placeName+'</span>'+
							'<span class="long-price-rg">'+data[i].price+'元</span>'+
						'</div>'+
						'<div class="long-ip">'+
							'<span>'+data[i].address+'</span>'+
							'<a href="site-xq.html">'+
								'<button class="long-price-rg">预约入驻</button>'+
							'</a>'+
						'</div>'+
						'<div class="set_activity">'+
							'<span>演讲沙龙</span>'+
							'<span>企业年会</span>'+
							'<span>论坛</span>'+
						'</div>'+
				'</div>';
				
				}
//				console.log(str);
				$(".set_listbox").html(str);
			}		
			}
			
		});	
	
	
	
})

//场地详情
function siteXq(){

		$.ajax({
			type:"post",
			url:box_webapp_url+"/place/detail",
			data:{id:"107"},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.data;
				
				$(".site-xqbox img").attr("src","data.mainPic");
				$(".site-xqbox h4").text(data.placeName);
				$(".site_xqadress").text(data.address);
				$(".user_peoNumber").text(data.number);
				
				$(".user_creaTime input").val(data.createTime+'-'+data.endTime);
				$(".contacts input").val(data.contacts);
				$(".user_tel input").val(data.tel);	
				
			
			}		
			}
			
		});	
	
}




