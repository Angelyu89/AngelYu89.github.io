
(function(){
    function Main(){

        this.readData();
    }
//
    Main.prototype.readData=function(){
	
	//注册--获取验证码
		$("#user_hqyz").on("tap",function(){
			
			var tel = $("#rg_tel").val();
			console.log(tel);
			
	            if(tel!=="") 
	            { 
	                    localStorage.setItem("手机号",tel); 
//	                    alert("信息已保存到data字段中"); 
	            } 
	            else 
	            { 
	                    alert("信息不能为空"); 
	            } 
	    });
            
    };

    new Main();
}());