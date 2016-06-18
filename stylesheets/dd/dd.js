/**
 * Created by sks on 2016/6/18.
 */

(function(){
    document.onmousemove=function(e){
        var left=document.getElementById("left");
        var right=document.getElementById("right");
        var left_yuan=document.getElementById("left_yuan");
        var right_yuan=document.getElementById("right_yuan");

        var left_pageX=left.getBoundingClientRect().left+40;
        var left_pageY=left.getBoundingClientRect().bottom-40;
        var right_pageX=right.getBoundingClientRect().left+40;
        var right_pageY=right.getBoundingClientRect().bottom-40;
        e=e? e:window.event;
        var x=e.pageX;
        var y=e.pageY;
        var a=Math.atan2(x-left_pageX,y-left_pageY);
        var anglea=-180*a/Math.PI-180;
        var b=Math.atan2(x-right_pageX,y-right_pageY);
        var angleb=-180*b/Math.PI+180;

        left.style.transform="rotate("+anglea+"deg)"
        right.style.transform="rotate("+angleb+"deg)"
    }
}());