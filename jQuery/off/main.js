/**
 * Created by sks on 2016/7/6.
 */

(function(){

    function init(){
        
        //获取标签输出内容
       //$("div").html("我是jQuery");
        
        //输出第一个div
        console.log($("div").html());
        
        //通过ID输出内容
        //$("#oDiv").html("Hello World");
        
        //添加事件
        
       /* $("div").click({name:"xiaoyu",age:19},function(event){
            console.log(event);
            
        });*/
        
        //bind绑定事件
        /*$("div").bind("click",function(event){
            console.log(event);
            
            //解除绑定
           // $(this).unbind("click");
           
          // console.log($(this).unbind("click"));
            
        });*/
        
        //no添加事件监听器（只兼容IE7以上）
       /* $("div").on("click",function(event){
            console.log(event);
            
        //移除事件监听器（只兼容IE7以上）
            $(this).off("click");
        });*/
        
        
        
    }
    init();
}());