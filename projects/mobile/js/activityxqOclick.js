	
// 点击活动列表  通过获取ID，并添加到跳转页面的后边，(以备下一个页面可以找到)
$('.activityListcationbox').on("tap",".acXqBtn img",function(){ //动态生成的，必须用事件委托来查找
//		alert(111);

		var user_Id=$(this).attr("id");//获取属性的id(当前是img)
		var userSpaceId =$(this).attr("spaceId");
		var signup =$(this).attr("canSignup");
		window.location="activityXQ.html?id="+user_Id+"&spaceId="+userSpaceId+"&canSignup="+signup;
	})

	//判断是跳转免费报名，还是需要买票
	$('.act_offBtn').on("tap",function(){
		
		var canSignup =	getQueryString('canSignup') ;
//			console.log(canSignup);
			
		var user_activityId = $(".act_offBtn").attr('activityId');//活动id
		
		var user_spaceId = $(".act_offBtn").attr("spaceId");//空间id
		
		var usertickbox = $(".act_offBtn").attr('ticketId');//取票id
			console.log(usertickbox);
//			
		if(canSignup=="on"){
			
			window.location.href="signPage.html?canSignup="+canSignup+"&activityId="+user_activityId+"&spaceId="+user_spaceId;
			
		}else if(canSignup=="buy"){
			
			window.location.href="signPageBuy.html?canSignup=" + canSignup+'&activityId='+ user_activityId+"&spaceId="+user_spaceId+'&ticketId=' + usertickbox;
		}
		
	})


function getQueryString(spaceId) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + spaceId + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}	

function getQueryString(activityId) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + activityId + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}	

function getQueryString(canSignup) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + canSignup + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}	

function getQueryString(ticketId) {
	//以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
	var reg = new RegExp('(^|&)' + ticketId + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	//      console.log(r);
	if(r != null) {
		return decodeURI(r[2]); //获取ClassName的参数

	}
	return null;
}	

