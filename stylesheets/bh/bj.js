/**
 * Created by sks on 2016/6/18.
 */

//捕获事件
//事件捕获阶段：事件从最上一级标签开始往下查找，直到捕获到事件目标(target)。
//事件冒泡阶段：事件从事件目标(target)开始，往上冒泡直到页面的最上一级标签。

(function (){
    var a,b,c;
    function findDiv(){
        a=document.getElementById("a");
        b=document.getElementById("b");
        c=document.getElementById("c");
    }
    function addListeners(){
        /*a.addEventListener("click",function(event){
            console.log("a clicked");
        });
        b.addEventListener("click",function(event){
            console.log("b clicked");
            //阻止事件冒泡
            // event.stopPropagation();

            //
        });


        c.addEventListener("click",function(event){
            console.log("c clicked");
        });*/


        //事件的捕获
        a.addEventListener("click",function(event){
            console.log("捕获阶段 a clicked");

            //此操作可以屏蔽了级对象的事件响应
            //event.stopImmediatePropagation();

        },true);


        b.addEventListener("click",function(event){
            console.log("捕获阶段 b clicked");
        },true);
        c.addEventListener("click",function(event){
            console.log("捕获阶段 c clicked");
        },true);

        a.addEventListener("click",function(event){
            console.log("冒泡阶段 a clicked");
        });
        b.addEventListener("click",function(event){
            console.log("冒泡阶段 b clicked");
        });
        c.addEventListener("click",function(event){
            console.log("冒泡阶段 c clicked");
        });
        
        a.addEventListener("contextmenu",function(event){
            console.log("将要呈现右键菜单");

            //取消右键功能事件
            //event.preventDefault();
        });

    }
    function init(){
        findDiv();
        addListeners();
    }

    init();
})();