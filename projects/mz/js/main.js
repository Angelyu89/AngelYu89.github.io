
(function(){
	
	function Main(){
			
		this.top();
		
	}
	
	Main.prototype.top=function(){
		
		window.onscroll=function(){
			
			var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var _oDivTop=document.getElementsByClassName("fdys")[0];
			
			if(_scrollTop>100){
				_oDivTop.style.height="328px";
				_oDivTop.style.transition="height 0.7s";
			}
			else{
				_oDivTop.style.height="0";
				_oDivTop.style.transition="height 0.1s";
			}
		}
		
	}
	

	new Main();
}());
