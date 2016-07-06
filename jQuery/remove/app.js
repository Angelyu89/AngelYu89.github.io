/**
 * Created by sks on 2016/7/6.
 */

(function(){
       var btnAddClass,div;

       function init(){
            btnAddClass=$("#btnaddclass");
            div=$("#oDiv");
    
           btnAddClass.click(function(event){
               div.addClass("rect");
                
               //移除类
               // div.toggleClass("rect");
               
               //移除类
                div.click(function(event){
                    $(this).removeClass("rect");
                });

           });
       }
    init();
}());