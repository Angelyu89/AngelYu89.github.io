$(function(){
	
	$(document).ready(function(){
		longXQ();
		theLocation();
	})
	
		
	//长租详情
	function longXQ(){
			$.ajax({
				type:"post",
				url:box_webapp_url+"/longStation/detail",
				data:{spaceId:getQueryString('id')},
				dataType:"json",
				success:function(res){
					console.log(res);
					
				if(res.code==200){
					
					var data=res.data;
					var str="";
					
					$(".user_longXq img").attr("src",data.img);
					$(".user_longXq h4").text(data.spaceName);
					$(".user_longXqadrss").text(data.spaceAddress);
					$(".user_longXqtel").text(data.spacePhone);
					$(".long-rent-xq-mapbox p").text(data.spaceDetail);
					$("#longXqPrice").text(data.longPrice);
					$(".xqlongBtn").attr('id',data.spaceId);
					$(".xqlongBtn").attr('city',data.cityName);
					$(".xqlongBtn").attr('space',data.spaceName);
					$("#longitude").text(data.longitude);
					$("#latitude").text(data.latitude);
					var dataspace = res.data.spaceAndActivityList;//本空间活动
					
					for(var i=0;i<dataspace.length;i++){
					var activityStatus=res.data.spaceAndActivityList[i].activityStatus;
					
					if(activityStatus==3){
						activityStatus="即将开始"
					}else if(activityStatus==4){
						activityStatus="正在进行"
					}else if(activityStatus==5){
						activityStatus="活动结束"
					}else if(activityStatus==0){
						activityStatus="活动取消"
					}
						
						str +='<div class="long-rent-xq-lunbotuImg longSpaceActivity">'+
								'<div class="long_xq_spaceBox">'+
									'<div class="long_xq_spaceBox_name01">'+dataspace[i].activityName+'</div>'+
									'<div class="long_xq_spaceBox_state">'+dataspace[i].activityStatus+'</div>'+
								'</div>'+
								'<div class="longMoibal"></div>'+
								'<div class="long_xqUserImg">'+
									'<img src="'+dataspace[i].image3+'" alt="" />'+
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
		
		
			// 百度地图API功能
			var map = new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
			map.enableScrollWheelZoom(true);
			
			// 用经纬度设置地图中心点
			function theLocation(){
				if(document.getElementById("longitude").text != "" && document.getElementById("latitude").text != ""){
					map.clearOverlays(); 
					var new_point = new BMap.Point(document.getElementById("longitude").text,document.getElementById("latitude").text);
					var marker = new BMap.Marker(new_point);  // 创建标注
					map.addOverlay(marker);              // 将标注添加到地图中
					map.panTo(new_point);   
				}
			}
	
})
