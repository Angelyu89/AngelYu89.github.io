$(function(){
	$(document).ready(function(){
		cityShow();
	});

//返回空间
	$(".user_metting_city").change(function(){
		$(".user_metting_space").html('');
		var provinceID = $(".user_metting_city option:selected").val()
				$.ajax({
					type:"post",
					url:box_webapp_url+"/space1",
					data:{cityCode:provinceID},
					dataType:"json",
					success:function(data){
//						console.log(data)
						var str = '';	
						for(var i=0;i<data.length;i++){							
							str += '<option value = "'+data[i].id+'">'+data[i].spaceName+'</option>'
						}
						$(".user_metting_space").html('<option value="">所在空间</option>'+str);						
					}
				});
	})
	
	
	//返回城市（会议室列表）
	function cityShow(){
			$.ajax({
					type:"post",
					url:box_webapp_url+"/citiesOpen",
					dataType:"json",
					success:function(data){
//						console.log(data)
						var str = '';	
						for(var i=0;i<data.length;i++){							
		
							str += '<option value = "'+data[i].geoCode+'">'+data[i].geoName+'</option>'							
						}
						$(".user_metting_city").html('<option value="">所在城市</option>'+str);						
					}
				});
	}

});

$(function(){
	$(document).ready(function(){
		activityHomeList();
		activityList();
	});


	//首页--精彩活动
	function activityHomeList(){
		var usercity = $(".user_metting_city option").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activity/list",
//			data:{name:"活动名称",spaceId :"空间id",cityCode:"城市代码"},
			dataType:"json",
			success:function(res){
				console.log(res);
				
				if(res.code==200){
					var str = '';
					var data = res.data.result;
					
					var d = new Date();
		              d.setTime(data.startTime);
		              var year = d.getFullYear();
		              var month = d.getMonth()+1;
		              var strDate = d.getDate();
		              var hour = d.getHours();
		              var minute  = d.getMinutes();
		              var second = d.getSeconds();
					    if (month >= 1 && month <= 9) {
					        month = "0" + month;
					    }
					    if (strDate >= 0 && strDate <= 9) {
					        strDate = "0" + strDate;
					    }
					    if(hour<10) hour = '0' + hour; 
					    if(minute<10) minute = '0' + minute; 
					    if(second<10) second = '0' + second;
		              var newsetTime =(year+"-"+month+"-"+strDate);

				//精彩活动
			
				for(var i=0; i<1; i++){	
						var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(year+"-"+month+"-"+strDate);
					str +='<div class="home-cion-img">'+
							'<a href="">'+
								'<div class="act_Img01">'+
									'<img src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="home-cion-news">'+data[i].name+'</div>'+
								'<div class="home-cion-jc-ip">'+
									'<span class="">'+data[i].activityAddress+'</span>'+
									'<span class="home-icon-time">'+newsetTime+'</span>'+
								'</div>'+
							'</a>'+
						'</div>'
						
							for(var j=0; j<2; j++){	
							var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(year+"-"+month+"-"+strDate);
								str +='<div class="home-cion-ip">'+
							'<div class="home-cion-list">'+
								'<ul>'+
									'<li>'+
										'<a href="">'+
											'<div class="li-lf">'+
												'<img src="'+data[i].image3+'" alt=""/>'+
											'</div>'+
											'<div class="li-rg">'+
												'<div class="li-h5">'+data[i].name+'</div>'+
												'<div class="li-ip">'+data[i].activityAddress+'</div>'+
												'<div class="li-ip">2017-2-6</div>'+
											'</div>'+
										'</a>'+
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>'
							}
					};	
				}
//				console.log(str);
				
				$(".lists").html(str);
				
			}
			
		});	
		
		
	}
	

	
	
	
	
	
//新活动翻页
	
	$(function(){
    // 页数
    var page = 0;
    // 每页展示10个
//  var size = 10;

    // dropload
    $('.activityListcationbox').dropload({
        scrollArea : window,
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多-自定义内容</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据-自定义内容</div>'
        },
        loadUpFn : function(me){
            $.ajax({
                type: 'post',
                url:'http://115.28.40.198:8080/activity/list',
                dataType: 'json',
                success: function(res){
                	console.log(res);
                	if(res.code==200){
                		
                		var data = res.data.result;
						var str = '';
							//精彩活动
						for(var i=0;i<data.length;i++){
							
							var dateIsEnd = data[i].isEnd;
							
							if(dateIsEnd==1){
								dateIsEnd="活动结束"
							}else{
								dateIsEnd="活动进行中"
							}
							
							var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
//								console.log(newsetTime);
							
								var c = new Date();
				              c.setTime(data[i].endTime);
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
//								console.log(newendTime);
							
							
							if(data[i].canSignup=="off"){
								str += '<div class="activityListbox">'+
								'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
									'<div class="acXqBtn">'+
										'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
									'</div>'+
									'<div class="long-price">'+
										'<span>'+data[i].name+'</span>'+
										'<span class="long-price-rg">不需要报名</span>'+
									'</div>'+
									'<div class="long-ip">'+
										'<span>'+data[i].activityAddress+'</span>'+
										'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
									'</div>'+
									'<div class="rent-office-gongwei">'+
										'<span>'+newsetTime+'</span>'+
										'<span> — </span>'+
										'<span>'+newendTime+'</span>'+
									'</div>'+
								'</div>'+
							'</div>'
							}
							
							else if(data[i].canSignup=="on"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要报名</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'	
							}
							else if(data[i].canSignup=="buy"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要买票</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'
						}
							
					}	
							
//					  $('.lists').html(str);
                	}
                	
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').html(str);
                        // 每次数据加载完，必须重置
                        me.resetload();
                        // 重置页数，重新获取loadDownFn的数据
                        page = 0;
                        // 解锁loadDownFn里锁定的情况
                        me.unlock();
                        me.noData(false);
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var result = '';
            $.ajax({
                type: 'GET',
                url:'http://115.28.40.198:8080/longStation/partitionList?',
                data:{pno:page},
//              url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
                dataType: 'json',
                success: function(res){
                	console.log(res);
//                  var arrLen = res.data.length;
                    if(res.code==200){
                		
                		var str = '';
					
						var data = res.page.result;
							//精彩活动
										for(var i=0;i<data.length;i++){
							
							var dateIsEnd = data[i].isEnd;
							
							if(dateIsEnd==1){
								dateIsEnd="活动结束"
							}else{
								dateIsEnd="活动进行中"
							}
							
							var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
//								console.log(newsetTime);
							
								var c = new Date();
				              c.setTime(data[i].endTime);
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
//								console.log(newendTime);
							
							
							if(data[i].canSignup=="off"){
								str += '<div class="activityListbox">'+
								'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
									'<div class="acXqBtn">'+
										'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
									'</div>'+
									'<div class="long-price">'+
										'<span>'+data[i].name+'</span>'+
										'<span class="long-price-rg">不需要报名</span>'+
									'</div>'+
									'<div class="long-ip">'+
										'<span>'+data[i].activityAddress+'</span>'+
										'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
									'</div>'+
									'<div class="rent-office-gongwei">'+
										'<span>'+newsetTime+'</span>'+
										'<span> — </span>'+
										'<span>'+newendTime+'</span>'+
									'</div>'+
								'</div>'+
							'</div>'
							}
							
							else if(data[i].canSignup=="on"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要报名</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'	
							}
							else if(data[i].canSignup=="buy"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要买票</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'
						}
					};	
                    // 如果没有数据
                    }else{
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                   
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        // 插入数据到页面，放到最后面
                        $('.lists').append(str);
                        // 每次数据插入，必须重置
//                      console.log( $('.lists'));
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        threshold : 50
    });
});
	
	
	//精彩活动列表
	function activityList(){	
		var userspace = $(".user_metting_space option").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activity/list",
			dataType:"json",
			success:function(res){
				console.log(res);
					if(res.code==200){
					var data = res.data.result;
					var str = '';
					
						for(var i=0;i<data.length;i++){
							
							var dateIsEnd = data[i].isEnd;
							
							if(dateIsEnd==1){
								dateIsEnd="活动结束"
							}else{
								dateIsEnd="活动进行中"
							}
							
							var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
//								console.log(newsetTime);
							
								var c = new Date();
				              c.setTime(data[i].endTime);
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
//								console.log(newendTime);
							
							
							if(data[i].canSignup=="off"){
								str += '<div class="activityListbox">'+
								'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
									'<div class="acXqBtn">'+
										'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
									'</div>'+
									'<div class="long-price">'+
										'<span>'+data[i].name+'</span>'+
										'<span class="long-price-rg">不需要报名</span>'+
									'</div>'+
									'<div class="long-ip">'+
										'<span>'+data[i].activityAddress+'</span>'+
										'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
									'</div>'+
									'<div class="rent-office-gongwei">'+
										'<span>'+newsetTime+'</span>'+
										'<span> — </span>'+
										'<span>'+newendTime+'</span>'+
									'</div>'+
								'</div>'+
							'</div>'
							}
							
							else if(data[i].canSignup=="on"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要报名</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'	
							}
							else if(data[i].canSignup=="buy"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要买票</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'
						}
							
					}
//					console.log(str);
					$(".activityListcationbox").html(str);
				};	
						
			}
		
		});
			
	};	

	});	
	
	
	//选择空间--刷新列表
	$(".user_metting_space").change(function(){
		
		var spaceid = $(".user_metting_space option:selected").val();
		$.ajax({
			type:"post",
			url:box_webapp_url+"/activity/list",
			data:{
				spaceId:spaceid,
				cityCode:"",
			},
			dataType:"json",
			success:function(res){
				console.log(res);
					if(res.code==200){
					var data = res.data.result;
					var str = '';
					
						for(var i=0;i<data.length;i++){
							
							var dateIsEnd = data[i].isEnd;
							
							if(dateIsEnd==1){
								dateIsEnd="活动结束"
							}else{
								dateIsEnd="活动进行中"
							}
							
							var d = new Date();
				              d.setTime(data[i].startTime);
				              var year = d.getFullYear();
				              var month = d.getMonth()+1;
				              var strDate = d.getDate();
				              var hour = d.getHours();
				              var minute  = d.getMinutes();
				              var second = d.getSeconds();
							    if (month >= 1 && month <= 9) {
							        month = "0" + month;
							    }
							    if (strDate >= 0 && strDate <= 9) {
							        strDate = "0" + strDate;
							    }
							    if(hour<10) hour = '0' + hour; 
							    if(minute<10) minute = '0' + minute; 
							    if(second<10) second = '0' + second;
				              var newsetTime =(month+"/"+strDate+"/"+hour+":"+minute+":"+second);
//								console.log(newsetTime);
							
								var c = new Date();
				              c.setTime(data[i].endTime);
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
//								console.log(newendTime);
							
							
							if(data[i].canSignup=="off"){
								str += '<div class="activityListbox">'+
								'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
									'<div class="acXqBtn">'+
										'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
									'</div>'+
									'<div class="long-price">'+
										'<span>'+data[i].name+'</span>'+
										'<span class="long-price-rg">不需要报名</span>'+
									'</div>'+
									'<div class="long-ip">'+
										'<span>'+data[i].activityAddress+'</span>'+
										'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
									'</div>'+
									'<div class="rent-office-gongwei">'+
										'<span>'+newsetTime+'</span>'+
										'<span> — </span>'+
										'<span>'+newendTime+'</span>'+
									'</div>'+
								'</div>'+
							'</div>'
							}
							else if(data[i].canSignup=="on"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要报名</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'	
							}
							else if(data[i].canSignup=="buy"){
								str += '<div class="activityListbox">'+
							'<div class="long-rent-nav-img-box rent-office-yuyuanbox">'+
								'<div class="acXqBtn">'+
									'<img id='+data[i].activityId+' spaceId='+data[i].spaceId+' canSignup='+data[i].canSignup+' src='+data[i].image3+' alt="" />'+
								'</div>'+
								'<div class="long-price">'+
									'<span>'+data[i].name+'</span>'+
									'<span class="long-price-rg">需要买票</span>'+
								'</div>'+
								'<div class="long-ip">'+
									'<span>'+data[i].activityAddress+'</span>'+
									'<button class="long-price-rg act-or-btn">'+dateIsEnd+'</button>'+
								'</div>'+
								'<div class="rent-office-gongwei">'+
									'<span>'+newsetTime+'</span>'+
									'<span> — </span>'+
									'<span>'+newendTime+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'
						}
							
					}
//					console.log(str);
					$(".activityListcationbox").html(str);
				};	
						
			}
		
		});
		
	});

//
//$(".act-ord-baombtn a").on("tap",function(){
//	
//	if(canSignup=="buy"){
//		window.location.href="signPage.html";
////		console.log(canSignup);
//	}
//	
//	var name =$("#userset_name").val();//姓名
//	var tel = $("#userset_tel").val();//联系电话
//	var space = $("#userset_space").val();//公司名称
//	
////	var position= $("").val();//职务
////	var email = $("").val(data.contacts);//email
//	
//	$.ajax({
//			type:"get",
////			url:"http://115.28.40.198:8080/activityTickets/ confirmTickets?",
//			data:{
//				name:name,
//				userPhone:tel,
//				companyName:space,
//				
//			},
//			dataType:"json",
//			success:function(res){
//				console.log(res);
//				
//			if(res.code==200){
//				
//				var data=res.place;
//				
//				window.location.href="activity.html";
//				
//			
//			}		
//			}
//			
//		});	
//	
//})
//	
	