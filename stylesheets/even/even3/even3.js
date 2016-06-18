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
    function link_clickedHandler(event){
        console.log("爱上javascript");
        //removeEventListener移除事件监听(添加后只执行一次)
        link.removeEventListener("click",link_clickedHandler);
    }


    function init(){

        //事件监听器的添加（只能添加一种）
        link=document.getElementById("link");

        //执行link.null;
        // link.onclick=linkClickedHander;

        //执行removeEventListener
        link.addEventListener("click",link_clickedHandler);
        
    }
    init();
}());