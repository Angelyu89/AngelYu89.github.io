/**
 * Created by sks on 2016/7/6.
 */

(function(){
    function init(){
        $("#rect").click(function(){
            $(this).animate({width:"50px"},1000);
        });

        $("#rect").click(function(){
            $(this).animate({width:"500px"},1000);
        });

        $("#rect2").click(function(){
            $(this).animate({width:"400px"},1000);
        });

        $("#rect2").animate({width:"400px"},1000);

        $("#rect2").click(function(){
            $(this).animate({width:"500px"},1000);
        });

        $("#rect3").click(function(){
            $(this).animate({width:"50px"},1000);
        });

        $("#rect3").click(function(){
            $(this).animate({width:"300px"},1000);
        });

        $("#rect4").click(function(){
            $(this).animate({width:0},1000,function(){
                $(this).hide();
                alert("动画结束");
            });
            
        });

        $("#rect5").click(function(){
            $(this).animate({width:0},1000,function(){
                $(this).hide();
            });

        })

    }
    
    init();
}());