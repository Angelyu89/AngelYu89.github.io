/**
 * Created by sks on 2016/7/7.
 */

(function(){

    function init() {
        $(".card").card({
            width:"300px",height:"200px",onclick:function(event){
            $(this).toggleFace();
            }
        
        });
    }
    init();
}());