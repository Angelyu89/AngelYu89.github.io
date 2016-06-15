/**
 * Created by sks on 2016/6/15.
 */
(function(){
    var count=0;
    function timer(){
        count++;
        console.log(count);
        if(count<10){
            setTimeout(timer,1000);
        }
    }
    function init(){
        timer();
    }
    init();
}());