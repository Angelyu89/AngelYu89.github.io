
(function(){
	$(".list").html(getQueryString("className"));
	
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		data:{classID:getQueryString("classID")},
		dataType:"jsonp",
		success:function(data){
			console.log(data);
			$.each(data,function(i){
				//var $img=$("<img src='+data[i].goodsListImg+' />");
				
				var package_container=$("#package_container");
				var home_con=$("<div class='home_box'></div>");
				var home_cm1=$("<div class='home_cm1'></div>");
				var home_a=$("<a href='#'></a>")
				var home_cm1Img=$("<a href='http://www.baidu.com'><img src='" + data[i].goodsListImg + "' /></a>");	
				var home_cm2=$("<div class='home_cm2'></div>");
				var Span=$("<span></span>");
				var b=$("<b></b>");
				
				var p=$("<p></p>");
				var Qimg=$("<img class='Qimg'>");
				
				//点击链接转到商品详情页
//				var $a=$("<a href="introduction.html?classID=" + encodeURI(data[i].classID)+"&className=encodeURI(data[i].className)+">"+data[i].className+"</a>");
//				
				
				package_container.append(home_con);
				home_con.append(home_cm1);				
				home_cm1.append(home_a);
				home_cm1.append(home_cm1Img);
				home_con.append(home_cm2);
				home_cm2.append(home_a);				
				home_a.append(Span);
				home_cm2.append(b);
			
				home_cm2.append(p);
				home_a.append(Qimg);
				
				b.append('$'+" "+ data[i].price);
				p.append(data[i].discount + "折")
				Span.append(data[i].goodsName);
				
				
			})
			
			
			
			
			
		}
	
	
	})
	
	
	  function getQueryString(name) {
        //以name解析当前的url(如：http://localhost:63342/app/html/classify.html?classID=3&className=%E6%A3%89%E6%9C%8D)
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        console.log(r);
        if (r != null) {
            return decodeURI(r[2]);//获取ClassName的参数

        }
        return null;
    }
	

}());















