
(function(){
	
	function Main(){
		this.onclickI();
		this.onclickII();
	}
	
	Main.prototype.onclickI=function(){
		$('#enter-push-btn').on('click',function(){
			$('.order-zz-qx').css('display','none');
			$('.enter-push-box').css('display','block');
			
			
		});
	};
	
	Main.prototype.onclickII=function(){
		$('#enter-add-btn').on('click',function(){
			$('.enter-push-box').css('display','none');
			$('.enter-hetong-box').css('display','block');
		});
	};
	
	new Main();
}());
