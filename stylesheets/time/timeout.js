/**
 * Created by sks on 2016/6/15.
 */

(function(){
    var btnStopTimer,currentTimerId=-1;
    function findTags(){
        btnStopTimer=document.getElementById("btnStopTimer");
        //点击按钮，时间停止执行，内容将不被显示
        btnStopTimer.onclick=function(){
            if(currentTimerId!= -1){
                clearTimeout(currentTimerId);
            }
        }
    }

    function timeOutHander(name){
        console.log("Hello"+name);
    }

    //初始化函数
    function init(){
        findTags();

        timeOutHander("ucai");

        //延迟执行(方法名，时间，)
        currentTimerId=setTimeout(timeOutHander,3000,"zhangsan");
    }
    init();
}());