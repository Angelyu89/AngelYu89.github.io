/**
 * Created by sks on 2016/7/6.
 */

(function(){
    function init(){
        $("#Image1").click(function () {
            $(this).showContent1();
        });

        $("#Image2").click(function () {
            $(this).showContent2();
        })
    }

    init();
}());