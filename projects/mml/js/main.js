/**
 * Created by sks on 2016/7/14.
 */

(function(){
    /*面包屑导航*/
    function Main(){
       this.mouseover();
        this.mouseout();
    }
    
    Main.prototype.mouseover=function(){
        $("#icon1").on("mouseover",function(){

            $("#icon1").css({backgroundColor:"#000"});
            $("#middle_left_dynamic1").css({display:"block"});

        });

        $("#middle_left_dynamic1").on("mouseover",function(){

            $("#icon1").css({backgroundColor:"#000"});
            $("#middle_left_dynamic1").css({display:"block"});

        });


        $("#icon2").on("mouseover",function(){

            $("#icon2").css({backgroundColor:"#000"});
            $("#middle_left_dynamic2").css({display:"block"});

        });

        $("#middle_left_dynamic2").on("mouseover",function(){

            $("#icon2").css({backgroundColor:"#000"});
            $("#middle_left_dynamic2").css({display:"block"});

        });


        $("#icon3").on("mouseover",function(){
            $("#icon3").css({backgroundColor:"#000"});
            $("#middle_left_dynamic3").css({display:"block"});
        });

        $("#middle_left_dynamic3").on("movseover",function(){
            $("#icon3").css({backgroundColor:"#555"});
            $("#middle_left_dynamic3").css({dispaly:"block"});
        });


        $("#icon4").on("mouseover",function(){
            $("#icon4").css({backgroundColor:"#000"});
            $("#middle_left_dynamic4").css({display:"block"});
        });
        $("#middle_left_dynamic4").on("mouseover",function(){
            $("#icon4").css({backgroundColor:"#555"});
            $("#middle_left_dynamic4").css({display:"block"});
        });

        $("#icon5").on("mouseover",function(){
            $("#icon5").css({backgroundColor:"#000"});
            $("#middle_left_dynamic5").css({display:"block"});
        });
        $("#middle_left_dynamic5").on("mouseover",function(){
            $("#icon5").css({backgroundColor:"#555"});
            $("#middle_left_dynamic5").css({display:"block"});
        })
    };

    
    Main.prototype.mouseout=function(){
        $("#icon1").on("mouseout",function(){

            $("#icon1").css({backgroundColor:"#555"});
            $("#middle_left_dynamic1").css({display:"none"});
        });

        $("#middle_left_dynamic1").on("mouseout",function(){

            $("#icon1").css({backgroundColor:"#555"});
            $("#middle_left_dynamic1").css({display:"none"});
        });


        $("#icon2").on("mouseout",function(){

            $("#icon2").css({backgroundColor:"#555"});
            $("#middle_left_dynamic2").css({display:"none"});
        });

        $("#middle_left_dynamic2").on("mouseout",function(){

            $("#icon2").css({backgroundColor:"#555"});
            $("#middle_left_dynamic2").css({display:"none"});
        });

        $("#icon3").on("mouseout",function(){

            $("#icon3").css({backgroundColor:"#555"});
            $("#middle_left_dynamic3").css({display:"none"});
        });

        $("#middle_left_dynamic3").on("mouseout",function(){

            $("#icon3").css({backgroundColor:"#555"});
            $("#middle_left_dynamic3").css({display:"none"});
        });

        $("#icon4").on("mouseout",function(){

            $("#icon4").css({backgroundColor:"#555"});
            $("#middle_left_dynamic4").css({display:"none"});
        });

        $("#middle_left_dynamic4").on("mouseout",function(){

            $("#icon4").css({backgroundColor:"#555"});
            $("#middle_left_dynamic4").css({display:"none"});
        });

        $("#icon5").on("mouseout",function(){

            $("#icon5").css({backgroundColor:"#555"});
            $("#middle_left_dynamic5").css({display:"none"});
        });

        $("#middle_left_dynamic5").on("mouseout",function(){

            $("#icon5").css({backgroundColor:"#555"});
            $("#middle_left_dynamic5").css({display:"none"});
        });
    };

    
   new Main();
}());