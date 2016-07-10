/**
 * Created by sks on 2016/7/9.
 */

(function(){
    var videoDialog;
    function init(){
        $("#btnopenvideo").button().click(function(){
            videoDialog.dialog("open");
            
        });
        
        videoDialog=$("#videodialog").dialog({
            autoOpen:false,
            width:1300,
            height:600,
            close:function(event,ui){
                var videoPlayer=$(this).find(".videoplayer");
                var vpElement=videoPlayer[0];
                vpElement.pause();
            }
        });
    }
    init();
}());