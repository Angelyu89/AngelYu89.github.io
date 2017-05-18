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
			data:{id:getQueryString("id")},
			dataType:"json",
			success:function(res){
				console.log(res);
				
			if(res.code==200){
				var data = res.data.activity;
				
					var c = new Date();
		              c.setTime(data.createTime);
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
				
				
				if(data.canSignup == "off"){
					$(".activityXq img").attr("src","data.image3");
					$(".activityXq h4").text(data.name);
					$(".adrss").text(data.address);
					$(".activityXqtime").text(newendTime + '-'+newendTime);
					$('.activityXqpicr').text(data.price);
					$('.activityXqNumber').text(data.maxNumber);	
					$('.activityXqorganizers').text(data.updateName);
					$(".act_offBtn").hide();
				}else{
					
				var data = res.data.activity;
				
				var acc = res.data.activity.activityTicketsList[0];
				var a = new Date();
		              a.setTime(data.createTime);
		              var year = a.getFullYear();
		              var month = a.getMonth()+1;
		              var strDate = a.getDate();
		              var hour = a.getHours();
		              var minute  = a.getMinutes();
		              var second = a.getSeconds();
		                if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second; 
		              var startdate =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
				
					var b = new Date();
				              b.setTime(data[i].endTime);
				              var year = b.getFullYear();
				              var month = b.getMonth()+1;
				              var strDate = b.getDate();
				              var hour = b.getHours();
				              var minute  = b.getMinutes();
				              var second = b.getSeconds();
				                if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second; 
				              var enddate =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
				
				
				
				
				
				$(".activityXq img").attr("src","data.image3");
				$(".activityXq h4").text(data.name);
				$(".adrss").text(data.address);
				$(".activityXqtime").text(startdate + '-'+enddate);
				$('.activityXqpicr').text(data.price);
				$('.activityXqNumber').text(data.maxNumber);	
				$('.activityXqorganizers').text(data.updateName);
				$(".act_offBtn").attr('canSignup',data.canSignup);
				$(".act_offBtn").attr('id',data.id);
				$(".usertickbox").attr('id',acc.ticketId);
				$(".act_offBtn").show();
				}
				
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
	
});
	