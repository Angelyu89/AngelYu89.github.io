/**
 * Created by sks on 2016/6/24.
 */

(function(){
    var p,targetContainer,currentDragged;

    function getElements(){
        p=document.getElementById("p");
        targetContainer=document.getElementById("target-container");
    }

    function implement1(){
        p.ondragstart=function(event){
            currentDragged=p;
        };

        targetContainer.ondragover=function(event){
            event.preventDefault();
        }


        targetContainer.ondrop=function(event){
            targetContainer.appendChild(currentDragged);
         }
    };
    function init(){
        getElements();
        
        p.ondragstart=function(event){
            event.dataTransfer.setData("domId",this.id);
        };
        
        document.querySelectorAll(".container").forEach(function(item){
            item.acceptDrop=true;
        });
        
       /* console.log(document.querySelectorAll(".container"));
        document.querySelectorAll(".container").forEach(function(item){
            item.acceptDrop=true;
        });*/
        
        //兼容多浏览器
        var result=document.querySelectorAll(".container");
        for(var i=0;i<result.length;i++){
            result[i].acceptDrop=true;
        }


    }

init();
}());