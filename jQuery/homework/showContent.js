/**
 * Created by sks on 2016/7/6.
 */

(function(){
    $.fn.showContent1=function(){
            $("#Image1").animate({width:0,marginLeft:"150"},1000,function () {

                $("#Image2").animate({width:"300px",marginLeft:"0"},1000);

            });

    };
    
    $.fn.showContent2=function() {
        $("#Image2").animate({width:0,marginLeft:"150px"}, 1000,function () {
            $("#Image1").animate({width: "300px",marginLeft:"0px"}, 1000);

        });

    }
    
}());