$(function() {
	$(".feed_a").click(function(e) {
		var userid = localStorage.getItem("userid");
		var content = $(".feed_textarea").val();
		var date = getNowTime();
		var param_val = "{\"userid\":\""+userid+"\",\"content\":\"" + content + "\"}";
		if (!content) {
			alert("请填写内容再提交~");
			return;
		}
		$.ajax({
			url: "http://123.57.174.52:8080/app/UserFeedBack_userFeedBackAdd",
			type: "POST",
			//data: ""{ params: param_val, devices: "app", json_callback: "codeCallback" }"",
			data: "jsonCallback=codeCallback&devices=weixin&params= {\"userid\":\""+userid+"\",\"content\":\"" + content + "\"}",
			dataType: "jsonp",
			//服务端用于接收callback调用的function名的参数
			success: function(data) {
			},
			complete: function(XMLHttpRequest, textStatus) {
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
//				alert(XMLHttpRequest.status);
//				alert(XMLHttpRequest.readyState);
//				alert(textStatus);
			},

		});
	});

	


	function getNowTime() { //取得当前时间 
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		var nowdate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
		return nowdate;
	}
});


function codeCallback(json) {	
	//alert(json);
	var result = json.status;
	if (result == 1) {
		alert("提交成功！");
	 	$(".feed_textarea").val("");//提交成功清空输入框
	} else {
		alert("提交失败，请稍后重试~");
	}
}