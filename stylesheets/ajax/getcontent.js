/**
 * Created by sks on 2016/6/20.
 */

//ajax异步加载

(function(){
    function init(){
        //获取歌词
        $.get("sy.lrc").done(function(data){
            console.log(data);
        }).fail(function(){
            console.error("加载失败");
        });
    }
    init();
})();

