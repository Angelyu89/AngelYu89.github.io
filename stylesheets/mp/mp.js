/**
 * Created by sks on 2016/6/18.
 */
//子集容器冒泡，根容器也冒泡

(function(){
    var a,b,c;
    function findDiv(){
        a=document.getElementById("a");
        b=document.getElementById("b");
        c=document.getElementById("c");
    }
    function addListeners(){
        a.addEventListener("click",function(event){
            console.log("a clicked");
        });
        b.addEventListener("click",function(event){
            console.log("b clicked");
            //阻止事件冒泡(阻止当前b)
          // event.stopPropagation();

            //事件立即停止冒泡
            event.stopImmediatePropagation();

        });
        b.addEventListener("click",function(event){
            console.log("b click 1");
        });


        c.addEventListener("click",function(event){
            console.log("c clicked");
        });
    }
    
    function init(){
        findDiv();
        addListeners();
    }
    
    init();
}());