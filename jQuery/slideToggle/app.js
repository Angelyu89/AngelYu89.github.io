/**
 * Created by sks on 2016/7/6.
 */

(function(){

    var rect;

    function init(){
        rect=$("#rect");
        /*rect.slideToggle(1000,function(){
            $(this).slideToggle(1000,arguments.callee)
        });*/
        
        rect.click(function(){
            //隐藏
            //$(this).hide();
            
            //淡出
           // $(this).fadeOut(2000);
            
            //划入
            $(this).slideUp();
            
            $(this).slidUP(3000,function(){
                alert("图形消失了")
            });
        });

        $("#btn").click(function(){
            //呈现
             // rect.show();
            
            //淡入淡出相反的
            //rect.fadeToggle();
            
            //划入画出切换
            rect.slideToggle();
            
            //淡入
           // rect.fadeIn(2000);
        });
    }

    init();
}());