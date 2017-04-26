$(function() {
	$(document).ready(function() {

		siteXq();
		theLocation();
	})

	console.log(getQueryString('placeId'))

	function siteXq() {

		$.ajax({
			type: "post",
			url: box_webapp_url + "/place/detail",
			data: {
				placeId: getQueryString('placeId')
			},
			//			data:{placeId:126},
			dataType: "json",
			success: function(res) {
				console.log(res);

				if(res.code == 200) {

					var data = res.data;
					var datadeviceList = res.data.deviceList;
					$(".site-xqbox img").attr("src", "data.placeImg");
					$(".site-xqbox h4").text(data.placeName);
					$('.setXqsapce').text(data.spaceName);
					$(".site_xqadress").text(data.placeAddress);
					$(".user_peoNumber").text(data.maxPeop);
					$(".setXqPrice").text(data.placePrice);

					$(".user_creaTime input").val(data.openTime + '-' + data.closeTime);
					$(".contacts input").val(data.placeContacts);
					$(".user_tel input").val(data.placePhone);
					$(".set_placeSummary").text(data.placeSummary);
					$(".setnotice").text(data.placeItem);
					
					$("#longitude").text(data.longitude);//经度
					$("#latitude").text(data.latitude);//纬度

					if(datadeviceList[0]== 1) {
						$(".fac01").css("display","inline-block"); //wifi
					}if(datadeviceList[1]== 3) {
						$(".fac02").css("display","inline-block"); //座椅
					}if(datadeviceList[2] == 4) {
						$(".fac03").css("display","inline-block"); //讲台
					}if(datadeviceList[3] == 5) {
						$(".fac04").css("display","inline-block"); //投影
					}if(datadeviceList[4] == 6) {
						$(".fac05").css("display","inline-block"); //电视
					}if(datadeviceList[5] == 7) {
						$(".fac06").css("display","inline-block"); //话筒
					}if(datadeviceList[6] == 8) {
						$(".fac07").css("display","inline-block");//白板
					}if(datadeviceList[7] == 9) {
						$(".fac08").css("display","inline-block"); //音响
					}if(datadeviceList == null || datadeviceList == "") {}
					
				};

			}

		})

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
	
	
	

});

function getQueryString(placeId) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + placeId + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}