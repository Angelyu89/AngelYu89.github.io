/**
 * Created by sks on 2016/6/15.
 */

(function (){
    function  showTime(){
        var date=new Date();
        var oHours=document.getElementById("hours");
        var oMinutes=document.getElementById("minutes");
        var oSeconds=document.getElementById("seconds");

        var hMove=date.getHours()*30;
        var mMove=date.getMinutes()*6;
        var sMove=date.getSeconds()*6;

        oHours.style.transform="rotate("+hMove+"deg)";
        oMinutes.style.transform="rotate("+mMove+"deg)";
        oSeconds.style.transform="rotate("+sMove+"deg)";

    }
    function init(){

        showTime();
        setInterval(showTime,1000);
    }
    init();

}());

(function () {
    var divClock;

    function formatTime(num) {
        return (num >= 10 ? "" : "0") + num;
    }

    function showTime() {
        var date = new Date();

        divClock.innerHTML = formatTime(date.getHours()) + ":" +
            formatTime(date.getMinutes()) + ":" +
            formatTime(date.getSeconds());
    }


    function init() {
        divClock = document.getElementById("click");

        showTime();
        setInterval(showTime, 1000);
    }

    init();
}());