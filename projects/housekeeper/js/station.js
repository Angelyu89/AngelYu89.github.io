
(function(){
	
	function Main(){
		this.onclick2();
		this.onclick3();
		this.onclick4();
		this.onclick5();
		this.onclick6();
		this.onclick7();
		this.onclick8();
//		this.onclick9();
//		this.onclick10();
	}
	
	/*不同状态的颜色*/
	Main.prototype.onclick2=function(){
		
		/*未使用*/
		$('#sta-use').on('click',function(){
			$('.wsy').css('background-color','#666');
			$('.sta-zt-box-centen').css('border','1px solid #666');
			$('.sta-zt-box-centen').css('color','#666');
					
		});
		
		/*已分配*/
		$('#sta-huse').on('click',function(){
			$('.ysy').css('background-color','#0965dd');
			$('.sta-zt-box-centen').css('border','1px solid #0965dd');
			$('.sta-zt-box-centen').css('color','#0965dd');		
		});
		
		/*维修中*/
		$('#maintenance').on('click',function(){
			$('.wxz').css('background-color','#FDC700');
			$('.sta-zt-box-centen').css('border','1px solid #FDC700');
			$('.sta-zt-box-centen').css('color','#FDC700');	
					
		});
		
		/*快到期*/	
		$('#expiring').on('click',function(){
			$('.kdq').css('background-color','#FE4227');
			$('.sta-zt-box-centen').css('border','1px solid #FE4227');
			$('.sta-zt-box-centen').css('color','#FE4227');					
		});
		
			
	};
	
	
	/*选择加对勾*/
	Main.prototype.onclick3=function(){
		$('.sta-zt-box-centen').on('click',function(){
			$('.xuanh').css('display','block');
//			$('.sjx').css('border-bottom','20px solid #fe4277')
		});
	};
	
	Main.prototype.onclick4=function(){
		$('.information-box').on('click',function(){
			$('.sta-700').css('display','block');
		});
	};
	
	Main.prototype.onclick5=function(){
		$('.sta-zt-box-centen-qx').on('click',function(){
			$('.sta-700').css('display','none');
		});
	};
	
	/*订单管理-详情*/
	Main.prototype.onclick6=function(){
		$('#order-details').on('click',function(){
			$('.cen-hd-order').css('display','none');
			$(".order-center").css('display','block');			
		});
	};
	
	
	/*会议室详情*/
	Main.prototype.onclick7=function(){
		$('#activity-details').on('click',function(){
			$('.order-hy-xq').css('display','none');
			$('.order-hy-cen').css('display','block');
		});
	};
	
	/*短租详情*/
	Main.prototype.onclick8=function(){
		$('#order-dz-qx').on('click',function(){
			$('.order-dz-xq').css('display','none');
			$('.order-dz-cen').css('display','block');
		});
	};
	
	/*查看合同*/
//	Main.prototype.onclick9=function(){
//		$('#order-ck-xq').on('click',function(){
//			$('.order-zz-qx').css('display','none');
//			$('.order-ck-cen').css('display','block');
//		});
//	};
	
	/* 终止合同*/
//	Main.prototype.onclick10=function(){
//		$('#order-zz-xq').on('click',function(){
//			$('.order-zz-qx').css('display','none');
//			$('.order-dz-cen').css('display','block');
//		});
//	};
	
	new Main();
}());
