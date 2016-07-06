/**
 * Created by sks on 2016/7/6.
 */

(function(){
    
    function init(){
        $("div").click(function(){
            console.log($(this));
            
            $(this).showContent();
        });
        
    }
    
    init();
}());