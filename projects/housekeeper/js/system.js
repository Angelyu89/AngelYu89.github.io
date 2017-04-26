
(function(){
	
	function Main(){
		
		this.onclick88();
		this.onclick89();
	}
	
	Main.prototype.onclick88=function(){
		
		$('.yongbtn1').on('click',function(){
			$('.yonghubox').css('display','block');
			$('.xitongbox').css('display','none');
			
		})
		
	}
	
	Main.prototype.onclick89=function(){
		
		$('.xitongbtn1').on('click',function(){
			$('.yonghubox').css('display','none');
			$('.xitongbox').css('display','block');
			
		})
		
	}
	
	new Main();
}());
