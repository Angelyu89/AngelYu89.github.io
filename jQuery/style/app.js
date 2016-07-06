/**
 * Created by sks on 2016/7/6.
 */

(function(){
    var div;
    
    function init(){
        div=$("#div");
  
    /*div.css("width","100px");
    div.css("height","200px");
    div.css("background-color","blue");*/
        
     div.css({
         width:"50px",
         height:"50",
         backgroundColor:"red"
     });
    }
    
    init();
}());