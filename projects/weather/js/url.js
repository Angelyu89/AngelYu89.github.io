
(function(){
	
	$("#list_Input_bn").bind("click",function(){
		var _city=$("#list_Input");
		
		$.ajax({
		  url:"http://apis.baidu.com/apistore/weatherservice/citylist?cityname="+ _city.val(),
		  headers:{apikey:"42536dbb66fccd81a707640f365077c7"},
		  data:{area_id:getQueryString('area_id')},
		  dataType:"json",
		  
		  success:function(data){
		  	console.log(data);//查看数据
			if(data.errNum==-1){
				
				alert("查询城市不存在");
				
			}else if(data.errNum==0){
				
//				var _ids=[];
				var city_contrainer=$(".city_contrainer");
				city_contrainer.empty();
				$("#wearter").empty();
				
				$.each(data.retData, function(i) {
					var _cityWeather=$("<div class='area' id="+data.retData[i].area_id+" >" +
					"<b>"+data.retData[i].province_cn+"</b>"+
					"<b>"+data.retData[i].district_cn+"</b>"+
					"<span>"+data.retData[i].name_cn+"<span>"+
					"</div>");
					
					
//					
//					_ids.push(data.reData[i].area_id);

					var $a = $("<a href='index.html? area_id=" + encodeURI(data.retData[i].area_id) + "&district_cn="
                    + encodeURI(data.retData[i].district_cn) + "'>" + + "</a>").append(_cityWeather);
					city_contrainer.append($a);
//					var city=document.querySelectorAll('.cityWeater');
					
//					city.append($a)
//					$a.append();
////				
				});
							
				
			}else{
				
				$("#city_contrainer").empty();
				$.ajax({
					url:"http://apis.baidu.com/apistore/weatherservice/cityname",
					headers:{apikey:"42536dbb66fccd81a707640f365077c7"},
					data:{cityid:data.retData[0].area_id},
					dataType:"json",
					success:function(data){
						console.log(data);
					}
										
				})
			}
			
		  }
		    
		})
		
	})
	
//	function wearter(data){
//		$("#wearter").empty();
//		var weaHtml="<p>时间："+data.retData.date+"</p>"+
//		"<p>城市："+data.retData.city+"</p>"+
//		"<p>天气情况："+data.retData.weather+"</p>"+
//		"<p>最高气温："+data.retData.h_tmp+"</p>"+
//		"<p>最低气温："+data.retData.l_tmp+"</p>"+
//		"<p>风向："+data.retData.WD+"</p>"+
//		"<p>风力："+data.retData.WS+"</p>";
//		$("#wearter").append(weaHtml);
//	}
//	
	  function getQueryString(name) {
        //以name解析当前的url(如：http://localhost:63342/app/html/classify.html?classID=3&className=%E6%A3%89%E6%9C%8D)
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
//      console.log(r);
        if (r != null) {
            return decodeURI(r[2]);//获取ClassName的参数

        }
        return null;
    }
}());


















