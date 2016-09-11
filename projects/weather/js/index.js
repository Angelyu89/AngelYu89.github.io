(function(){
	
//					window.location.href="index.html";
//						var incontrainer=$(".contrainer");
	var swiper=new Swiper(".swiper-container",{
				pagination:".swiper-pagination",
				paginationClickable:true,
				direction:"vertical"
	})				
	$.ajax({
		url:"http://apis.baidu.com/apistore/weatherservice/cityid?cityid=" +/.+area_id=([^&]+)/g.exec(window.location.href)[1],
		headers:{apikey:"42536dbb66fccd81a707640f365077c7"},
//		data:{area_id:},
		dataType:"json",
		success:function(temp){
			console.log(temp);
			console.log(/.+area_id=([^&]+)/g.exec(window.location.href)[1]);
			wearter(temp);
		}
								
	})						
						
		
	function wearter(data){
		$("#wearter").empty();
		var weaHtml="<p>时间："+data.retData.date+"</p>"+
		"<p>城市："+data.retData.city+"</p>"+
		"<p>天气情况："+data.retData.weather+"</p>"+
		"<p>最高气温："+data.retData.h_tmp+"</p>"+
		"<p>最低气温："+data.retData.l_tmp+"</p>"+
		"<p>风向："+data.retData.WD+"</p>"+
		"<p>风力："+data.retData.WS+"</p>";
		$("#wearter").append(weaHtml);
	}
	
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
