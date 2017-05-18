//(function(){
//	$(document).ready(function(){
//		functionUrl();
//	})
//	
//	functionUrl (obj){
//		url=obj;
//	}
//	
//})

//首页 --跳转到长租
$(".list-01").on("tap",function(){
	
	window.location.href="long-rent.html";
	
})

//跳转到短租
$(".list-02").on("tap",function(){
	
	window.location.href="rent-office.html";
	
})

//跳转到会议室
$(".list-03").on("tap",function(){
	
	window.location.href="meeting-room.html";
	
})

//跳转到场地
$(".list-04").on("tap",function(){
	
	window.location.href="site.html";
	
})

//长租列表--跳转长租详情
$(".long-rent-container").on("tap",".makeBtn",function(){
	var longListId = $(this).attr("id");
	
	console.log(longListId);
	
	window.location.href="long-rent-xq.html?id=" + longListId;
})




//会议室列表--预定跳转到会议室详情
$(".huiyiBtn").on("tap",function(){
	
	window.location.href="meeting-room-xq.html";
})

$(".home-gengduo01 a").on("tap",function(){
	window.location.href="activity-order.html";
	
})

//会议室详情--预定跳转会议室订单页
function changeDateK() {
	var dateK = $(".rent-xq-date").val();
	$("#myModalLabel").text(dateK);
	$('#myModal').show();
}

$(function(){
	
	$(document).ready(function(){
		timeBtn();
	})	
	
//首页空间推荐---跳转长租详情
$(".homeSpaceRecommended").on("tap",function(){
	
	window.location.href="long-rent-xq.html"
})


//首页空间推荐更多---跳转长租列表页
$(".homeSpaceMoreBtn").on("tap",function(){
	
	window.location.href="long-rent.html"
})


//首页精彩活动更多--跳转活动列表
$(".homeSpaceActivityMore").on("tap",function(){
	window.location.href="activity-order.html"
})


	//选择时间段
	function timeBtn(){
		
		//选择年月日
		$("#myModal").on("tap",function(){
			var data = $("#newdate").val();
//			var time = $("#time-range-input").val();
//			var attribute =$("#time-range-input").attr('evaluation');
//		
//			
//			attribute = data + "" +time.slice(0,5) +data+ "" +time.slice(6,11);
//				console.log(attribute);
			$('#myModalLabel').html(data);
			
		})
		

		
		//选择时间段 隐藏显示模板框
		$('#time-range-btn').on("tap",function(){
				$('#myModal').show();
			});
		
			//给每个span绑定事件
			$('.time-item-area span').on("tap",function(){
				var that = $(this);//当前点击的这个span
				//获取所有激活状态的
				var activeItems = $('.time-item-area span.active');
				
				//判断是否有已激活的。
				if(activeItems.length>0){
					//已经有一个，则再给点击的这个加active,
					if(activeItems.length == 1){
						that.addClass('active');
						//获取激活状态的两个元素
						var activeDoms = $('.time-item-area span.active');
						
						//计算时间段
						var date1 = $(activeDoms[0]).attr('dateNumber').split(':'),
							date2 = $(activeDoms[1]).attr('dateNumber').split(':');
						console.log(date1,date2)
						var date3 = new Date().setHours(date2[0], date2[1])- new Date().setHours(date1[0],date1[1]);
						console.log(date3);
						
						
//						 //计算出相差天数  
					    var days=Math.floor(date3/(24*3600*1000))  
					  
					    //计算出小时数 				    
					    var hours=Math.floor((date3%(24*3600*1000))/(3600*1000))  
					    //计算相差分钟数  
					    var minutes=Math.floor((date3%(24*3600*1000)%(3600*1000))/(60*1000))
						 //计算相差秒数  
					    var seconds=Math.floor((date3%(24*3600*1000)%(3600*1000))%(60*1000)/1000)  
					    
						$('#result-show').html(hours+"小时 "+minutes+"分"+seconds+" 秒");
					
//						$('#result-show').html('您选择的是' +$(activeDoms[0]).attr('datetime') + '-'+$(activeDoms[1]).attr('datetime') );
//						将两个的值放入输入框中
						$('#time-range-input').val($(activeDoms[0]).attr('dateNumber') + '-'+$(activeDoms[1]).attr('dateNumber') )
						$('#time-range-input').attr('data-time',$(activeDoms[0]).attr('dateNumber') + '-'+$(activeDoms[1]).attr('dateNumber') )
						$(".modal-backdrop").remove();
						$(".modal-open").removeClass();
						$('#myModal').hide();
						
					}else if(activeItems.length == 2){
						$('.time-item-area span').removeClass('active');
						that.addClass('active');
					}
				}else{//没有激活的，则加active。
					that.addClass('active');
				}
			});	
			
		}
})


//活动详情跳转活动报名

$(".act-ord-baombtn a").on("tap",function(){
	window.location.href="signPage.html";
	
})

//场地预定--场地详情
$(".siteXq_yuding a").on("tap",function(){
	
	window.location.href="site-xq.html";
	
})

//短租列表跳转短租详情
$(".renlistboxy").on("tap",".ren_yueUserB",function(){
	
	var renlistId = $(this).attr("id");
	
	console.log(renlistId);
	
	window.location.href ="rent-office-xq.html?id=" + renlistId;
})

//会议室列表页跳转到详情页(直接获取不到id,用了继承法来查找的)
$(".met_ListboxB").on("tap",".met_lisuserBtn",function(){
	//box                        //button
	var id =$(this).attr("id");
	
	console.log(id);
	
	window.location.href = "meeting-room-xq.html?id="+id;
})


//返回上一页
$(".returnBtn img").on("tap",function(){
	
	window.history.back();
	
})
//
////判断支付方式
//$(document).ready(function(){
//	
//	if(is_weixin()==true){
//		
//		$(".wechatBox_user").show();
//		$(".payBox_user").hide();
//	}else{
//		
//		$(".wechatBox_user").hide();
//		$(".payBox_user").show();
//	}
//	
//})
//
//	//判断是否在微信内部
//	function is_weixin(){
//
//  var ua = navigator.userAgent.toLowerCase();
//
//  if(ua.match(/MicroMessenger/i)=="micromessenger") {
//
//      return true;
//
//   } else {
//
//      return false;
//
//  }
//
//}
