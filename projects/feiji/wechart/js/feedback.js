$(function() {
	$(".feed_a").click(function(e) {
		var userid = localStorage.getItem("userid");
		var content = $(".feed_textarea").val();
		var date = getNowTime();
		var param_val = "{\"userid\":\""+userid+"\",\"content\":\"" + content + "\"}";
		if (!content) {
			alert("����д�������ύ~");
			return;
		}
		$.ajax({
			url: "http://123.57.174.52:8080/app/UserFeedBack_userFeedBackAdd",
			type: "POST",
			//data: ""{ params: param_val, devices: "app", json_callback: "codeCallback" }"",
			data: "jsonCallback=codeCallback&devices=weixin&params= {\"userid\":\""+userid+"\",\"content\":\"" + content + "\"}",
			dataType: "jsonp",
			//��������ڽ���callback���õ�function���Ĳ���
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

	


	function getNowTime() { //ȡ�õ�ǰʱ�� 
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
		alert("�ύ�ɹ���");
	 	$(".feed_textarea").val("");//�ύ�ɹ���������
	} else {
		alert("�ύʧ�ܣ����Ժ�����~");
	}
}