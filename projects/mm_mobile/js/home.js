/**
 * Created by sks on 2016/8/9.
 */

$.ajax({
    url:"http://datainfo.duapp.com/shopdata/getBanner.php",
    type:"GET",
    dataType:"JSONP",
    success:function(data){
        // console.log(data);
        $.each(data,function(i){
            // console.log(i);
            /*添加图片*/
            var slideID=$("#slide"+i);
            var url=JSON.parse(data[i].goodsBenUrl)[0];
            // console.log(url);
            slideID.css({
                background:"url("+url+") 50% 50% no-repeat",
                backgroundSize:"100% 100%"
            })
        });

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: ".swiper-pagination",
            autoplay:2000,
            autoplayDisableOnInteraction:false,
            loop:true
        });
    }
});



(function(){
	 $.ajax({
        url: "http://datainfo.duapp.com/shopdata/getGoods.php",
        data: {classID: getQueryString("classID")},
        
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            $.each(data, function (i){
            	
                var img = $("<img src='" + data[i].goodsListImg + "' />");
                
                //classID.className都是后台获取到的
				var $a = $("<a href='package.html?classID=" + encodeURI(data[i].classID) + "&className="
                    + encodeURI(data[i].className) + "'>" + + "</a>");
//                  console.log(classID)
                    
				var list=$(".list");
				
				list.append($a);
				$a.append(img);
//				console.log($img);
            });
        }
    });

	
	
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













