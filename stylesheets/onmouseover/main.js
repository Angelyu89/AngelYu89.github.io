/**
 * Created by sks on 2016/7/17.
 */

(function(){

    function change(){
        var span=document.getElementsByClassName("oDivSp");
        var IMG=document.getElementsByClassName("Imagbox");

        for(var i=0;i<span.length;i++){

            (function (b){
                span[b].onmouseover=function(){
                    for(var j=0;j<span.length;j++){
                        span[j].classList.remove("bColr");
                        IMG[j].classList.remove("visible");
                    }
                    span[b].classList.add("bColr");
                    IMG[b].classList.add("visible");

                }
            })(i)
        }

    }


    
    change();
}());