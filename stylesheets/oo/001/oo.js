/**
 * Created by sks on 2016/6/15.
 */

(function(){
    function init(){
        var h=Human("ucai");
        h.sayhello();


        //s是实例，继承上级
        var s=Student("ZhangSan");
        s.sayhello();
        s.learn();
    }
    init();
}());
