/**
 * Created by sks on 2016/6/18.
 */

//事件监听器

(function(){
    var link;
    
    function init(){

        //事件监听器的添加（只能添加一种）
        link=document.getElementById("link");
        
         /* link.onclick=function(event){
         console.log("我是监听器")
         }*/

        //添加事件监听器（可以添加多种）
        link.addEventListener("click",function(event){
            console.log("设计模式");
        })
        link.addEventListener("click",function(event){
            console.log("观察者模式");
        });
        
    }
    init();
}());