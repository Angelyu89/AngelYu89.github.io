/**
 * Created by sks on 2016/6/18.
 */

//事件监听器

(function(){
    var link;
    //事件移除方法1
        /*function linkClickedHander(event){
            console.log("设计模式");
            
            //移动事件监听器(只执行一次)
            link.onclick=null;
        }*/
    
    //事件移除方法2
       /* function link_clickedHandler(event){
            console.log("爱上javascript");
            //remove移除事件监听
            link.removeEventListener("click",link_clickedHandler);
        }*/


    function init(){

        //事件监听器的添加（只能添加一种）
        link=document.getElementById("link");
        
        //执行link.null;
      // link.onclick=linkClickedHander;

       
       /*  link.onclick=function(event){
            console.log("我是监听器")
        }*/

        //添加事件监听器（可以添加多种）
        link.addEventListener("click",function(event){
            console.log("设计模式");
        })
        link.addEventListener("click",function(event){
            console.log("观察者模式");
        });
        
        //执行removeEventListener
       // link.addEventListener("click",link_clickedHandler);

        //移动的事件
        link.addEventListener("mousemove",function(event){
           // console.log("HAHHAHA");
            console.log(event);
        })
    }
    init();
}());