(function(){
	
	function Main(){		
		this.onclick40();
		this.onclick41();
		this.onclick41();
		this.onclick42();
		this.onclick43();
		this.onclick44();
		this.onclick45();
		this.onclick50();
	}
	
	Main.prototype.onclick40=function(){
		$('#aciv-add-btn').on('click',function(){
			$('.activ-box').css('display','none');
			$('.act-no-sign').css('display','block');			
		});		
	};
	
	
	Main.prototype.onclick41=function(){
		$('.no-sign').on('click',function(){
			$('.no-sign').css('background-color','#0864da');
			$('.no-sign').css('color','#fff');
			
			$('.to-sign').css('border','1px solid #666');
			$('.to-sign').css('background','#fff');
			$('.to-sign').css('color','#666');
			
			$('.go-sign').css('border','1px solid #666');
			$('.go-sign').css('background','#fff');
			$('.go-sign').css('color','#666');
			
			$('.act-no-sign').css('display','block');
			$('.to-sign-box').css('display','none');
			$('.go-sign-box').css('display','none');
		});	
	};
	
	Main.prototype.onclick42=function(){
		$('.to-sign').on('click',function(){
			$('.to-sign').css('background-color','#0864da');
			$('.to-sign').css('color','#fff');
			
			$('.no-sign').css('border','1px solid #666');
			$('.no-sign').css('background','#fff');
			$('.no-sign').css('color','#666');
			
			$('.go-sign').css('border','1px solid #666');
			$('.go-sign').css('background','#fff');
			$('.go-sign').css('color','#666');
			
			$('.to-sign-box').css('display','block');
			$('.act-no-sign').css('display','none');
			$('.go-sign-box').css('display','none');
		});
	};
	
	Main.prototype.onclick43=function(){
		$('.go-sign').on('click',function(){
			$('.go-sign').css('background-color','#0864da');
			$('.go-sign').css('color','#fff');
			
			$('.to-sign').css('border','1px solid #666');
			$('.to-sign').css('background','#fff');
			$('.to-sign').css('color','#666');
						
			$('.no-sign').css('border','1px solid #666');
			$('.no-sign').css('background','#fff');
			$('.no-sign').css('color','#666');
						
			$('.go-sign-box').css('display','block');
			$('.act-no-sign').css('display','none');
			$('.to-sign-box').css('display','none');
		});
	};
	
	Main.prototype.onclick44=function(){
		$('.use-rad').on('click',function(){
			$('.options-box').css('display','block');
		})
	}
	
	Main.prototype.onclick45=function(){
		$('.d-btn').on('click',function(){
			$('.use-iphone-box').append('<div class="add-new"><input type="text" placeholder="单行文本标题" /> <div class="rom-btn"><button>删除</button></div> </div>');
		});			
	};
	
	
//	Main.prototype.onclick47=function(){
//		$('.dx-btn').on('click',function(){
//			$('.use-iphone-box').append('<div class="adb-new"><div class="adb-cen-box"><h4>单选问题标题</h4><p>内容1</p></div><div class="adb-dx-push"><div class="rom-btn"><button>删除</button></div><div class="push-btn"><button>添加</button></div></div></div>');
//		});	
//		
//	};
	
	
	Main.prototype.onclick50=function(){
		$('#cy-btn').on('click',function(){
			$('.act-no-sign').css('display','none');
			$('.activ-box').css('display','none');
			$('.act-cy-box').css('display','block');
		});
	};
	

	
	new Main();
	
}());





