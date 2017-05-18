$(function(){
	
	homeSpace();
})


	function homeSpace(){
		$.ajax({
			type:"get",
			url:box_webapp_url+"/longStation/partitionList",
			data:'',
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				
				var data=res.page.result;
				var str = '';
				
				for(var i=0;i<data.length;i++){
					
					str +='<div class="home_longSpace">'+
								'<div class="home_longSpaceImg">'+
									'<img src="images/img1_18.png" alt="" />'+
								'</div>'+
								'<div class="home_spacebox">'+
									'<div class="home_space_name">'+data[i].spanceName+'</div>'+
									'<div class="home_space_drass">'+data[i].address+'</div>'+
									'<div class="home_space_prce">2000元/月</div>'+
								'</div>'+
							'</div>'
				}
//				console.log(str);
				$(".home-cion-img").html(str);
			}		
			}
			
		});	
			
	}
	