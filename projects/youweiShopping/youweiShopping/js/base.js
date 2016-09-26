/*获取URL参数方法

decodeURI()地址栏解码
encodeURI()地址栏编码
*/
function GetQueryString(name){
	/*定义正则，用于获取相应参数*/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 /*字符串截取，获取匹配参数值*/
     var r = window.location.search.substr(1).match(reg);
	 /*返回参数值*/
     if(r!=null)return  decodeURI(r[2]); return null;
}
/*购物车更新函数，参数为{userID:"",goodsID:"",number:"",callback:function}*/
function updataCar(opt){
	$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
			userID:opt.userID,
			goodsID:opt.goodsID,
			number:opt.number
		},function(data){
			
			var thisData=data;
			ajax_getCar({userID:opt.userID,callback:function(data){
				window.localStorage["car"]=JSON.stringify(data);
				if(opt.callback&&typeof(opt.callback)=="function"){
					opt.callback(thisData);
				}
			}});
			
		})
}

/*获取购物车的AJAX方法，参数{userID:"",callback:function}*/
function ajax_getCar(opt){
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		data:{userID:opt.userID},
		dataType:"jsonp",
		success:function(data){
			if(opt.callback&&typeof(opt.callback)=="function"){
				opt.callback(data);
			}
		}
		});
}
/*从本地获取购物车函数*/
function storage_getCar(){
		return window.localStorage["car"]?JSON.parse(window.localStorage["car"]):0;
}