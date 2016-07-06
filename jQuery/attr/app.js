/**
 * Created by sks on 2016/7/6.
 */

(function(){
    var form;
    
    function init(){
        form=$("#form");
        
        form.on("submit",function(enevt){
            
            console.log($("#blank").val());
            
           //console.log($("#blank")).attr("value");//1.9版后获取不到
            event.preventDefault();
        });
        //验证输入数字
        //$("#blank").attr("type","number");

        //获取input值
        $("#blank").val("Hello JQuery");
        
    }
    
    init();
}());