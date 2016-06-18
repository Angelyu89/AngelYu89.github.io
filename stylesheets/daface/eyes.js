/**
 * Created by sks on 2016/6/18.
 */



(function () {
    document.onmousemove = function (e) {
        var e = window.event;
        var x = e.pageX;
        var y = e.pageY;
        var  location = document.getElementById('lcircle');
        var right  =document.getElementById('rcircle');
        var a = location.getBoundingClientRect().left;
        var b = location.getBoundingClientRect().top;
        var c = right.getBoundingClientRect().left;
        var d = right.getBoundingClientRect().top;
        var ldeg = Math.atan2(y-b,x-a)/Math.PI*180+90;
        var rdeg = Math.atan2(y-d,x-c)/Math.PI*180+180;
        location.style.transform = "rotate("+ldeg+"deg)";
        right.style.transform = "rotate("+rdeg+"deg)";
    }



})();