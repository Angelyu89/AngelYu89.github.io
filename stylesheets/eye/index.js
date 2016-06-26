/**
 * Created by sks on 2016/6/22.
 */

(function (){
    
    function Main(){
        var eyes=document.getElementsByClassName("eye");
        
        for(var i=0;i<eyes.length;i++){
            eyes[i].appendChild(new ucai.Eyeball().node)
        }
    }
    new Main();
    
}());