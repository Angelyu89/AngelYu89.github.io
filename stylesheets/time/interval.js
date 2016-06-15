/**
 * Created by sks on 2016/6/15.
 */

(function(){
    var intervalId;
    function init(){
        var count=0;
        intervalId=setInterval(function(){
            count++;
            console.log(count);
            if(count>=10){
                clearInterval(intervalId);
            }
        },1000);
    }
    init();
}());