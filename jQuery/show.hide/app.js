/**
 * Created by sks on 2016/7/6.
 */

(function(){
    
    var rect;
    
    function init(){
        rect=$("#rect");
        rect.hide();
        rect.click(function(){

            //点击div隐藏
         // $(this).hide(1000);
        });
        
        $("#btn").click(function(){

            //呈现
            rect.show(1000);

            //切换
            rect.toggle(1000);
        });
    }
  
    init();
}());