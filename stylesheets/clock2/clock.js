/**
 * Created by sks on 2016/6/15.
 */


(function () {

    function showTime() {
        var date = new Date();
        var hours = document.getElementById("clockwise");
        var minutes = document.getElementById("minuteHand");
        var seconds = document.getElementById("secondHand");
        var hMove = date.getHours() * 30-90;
        var mMove = date.getMinutes() * 6-90;
        var sMove = date.getSeconds() * 6-90;
        hours.style.transform = "rotate(" + hMove + "deg)";
        minutes.style.transform = "rotate(" + mMove + "deg)";
        seconds.style.transform = "rotate(" + sMove+ "deg)";
    }

    function init() {
        showTime();
        setInterval(showTime, 1000);
        //setTimeout(showTime, 1000)
    }
    init();
})();






(function () {
    var divClock;

    function formatTime(num) {
        //return num >= 10 ? num + "" : "0" + num;
        return (num >= 10 ? "":"0")+num;
    }

    function showTime() {
        var date = new Date();

        divClock.innerHTML = formatTime(date.getHours()) + ":" +
            formatTime(date.getMinutes()) + ":" +
            formatTime(date.getSeconds());
    }

    function init() {
        divClock = document.getElementById("clock");

        showTime();
        setInterval(showTime, 1000);
    }

    init();
})();