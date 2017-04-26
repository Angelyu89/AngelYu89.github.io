
(function(){
	
	function Main(){		
		this.onclick80();
	}
	
	Main.prototype.onclick80=function(){
		$('.user-btn-bj').on('click',function(){
			var userId =$(this).attr("data-number");
			console.log(userId);
			$('.user-metbox').css('display','none');
			$('.user-regbox').css('display','block');
			
		})
		
	}
	
	new Main();
}());
