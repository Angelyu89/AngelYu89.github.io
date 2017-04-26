(function(){
	
	function Main(){
		
		this.onclick80();
		
	}
	
	Main.prototype.onclick80=function(){		
		$('.he-xq-btn').on('click',function(){
			$('.order-zz-qx').css('display','none');
			$('.order-he-box').css('display','block');
		});
	};
	
	Main.prototype.onclick81=function(){
		$('.he-zongz-btn').on('click',function(){
			
			
			
		})
		
		
	}
	
	
	
	new Main();
	
}());
