$(function(){
	$(document).ready(function(){
		activityXq();
	});

	
	//活动详情
	function activityXq(){
		console.log(getQueryString("id"))
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activity/detail",
			data:{
				activityId:getQueryString("id"),
				spaceId:getQueryString("spaceId")
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				var data = res.data;
				var data_ticket =res.data.tickets;
				
					var c = new Date();
		       			var c = new Date();
		              c.setTime(data.startTime);
		              var year = c.getFullYear();
		              var month = c.getMonth()+1;
		              var strDate = c.getDate();
		              var hour = c.getHours();
		              var minute  = c.getMinutes();
		              var second = c.getSeconds();
		                if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second; 
		              var newstartTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
						
						var c = new Date();
		              c.setTime(data.endTime);
		              var year = c.getFullYear();
		              var month = c.getMonth()+1;
		              var strDate = c.getDate();
		              var hour = c.getHours();
		              var minute  = c.getMinutes();
		              var second = c.getSeconds();
		                if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second; 
		              var newendTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
				              
					
				
				if(data.canSignup == "off"){$(".activityXq img").attr("src",data.image3);
					$(".activityXq h4").text(data.name);
					$(".adrss").text(data.activityAddress);
					$(".activityXqtime").text(newstartTime + '-'+newendTime);
					$('.activityXqpicr').text('免费');
					$('.activityXqNumber').text(data.restEnrollNum);	
					$('.activityXqorganizers').text(data.userName);
					
					$(".act_offBtn").hide();
				}else if(data.canSignup == "on"){
					$(".activityXq img").attr("src",data.image3);
					$(".activityXq h4").text(data.name);
					$(".adrss").text(data.activityAddress);
					$(".activityXqtime").text(newstartTime + '-'+newendTime);
					$('.activityXqpicr').text(0);
					$('.activityXqNumber').text(data.restEnrollNum);	
					$('.activityXqorganizers').text(data.userName);
					$(".act_offBtn").attr("spaceId",data.spaceId);
					$(".act_offBtn").attr("activityId",data.activityId);
					
					$(".act_offBtn").show();
				}else if(data.canSignup == "buy"){
					$(".activityXq img").attr("src",data.image3);
					$(".activityXq h4").text(data.name);
					$(".adrss").text(data.activityAddress);
					$(".activityXqtime").text(newstartTime + '-'+newendTime);
					$('.activityXqpicr').text(data_ticket[0].price);
					$('.activityXqNumber').text(data.restEnrollNum);	
					$('.activityXqorganizers').text(data.userName);
					$(".act_offBtn").attr("spaceId",data.spaceId);
					$(".act_offBtn").attr("activityId",data.activityId);
					$(".act_offBtn").attr("ticketId",data_ticket[0].ticketId);
					$(".act_offBtn").show();
				}
			}else if(res.code==600){
//									alert("未登录，请您先登录！")
//									window.location.href="login.html";
								}		
			}
			
		});
	}
	
	
	  function getQueryString(id) {
        //以id解析当前的url(如：http://127.0.0.1:8020/mobile/activity-order-xq.html?id=%2014)
        var reg = new RegExp('(^|&)' + id + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
//      console.log(r);
        if (r != null) {
            return decodeURI(r[2]);//获取ClassName的参数

        }
        return null;
    }
	  
		
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


	
});
	