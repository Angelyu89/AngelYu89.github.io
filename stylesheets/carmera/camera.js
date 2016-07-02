/**
 * Created by sks on 2016/7/1.
 */

(function(){

    window.Config={VIDEO_WIDTH:400,VIDEO_HEIGHT:300};

    function Main(){
        this.getComponents();
        this.createCanvasInMemory();

        this.addListeners();
        this.showCamera();
    }

    Main.prototype.createCanvasInMemory=function(){
        this._memoryCanvas=document.createElement("canvas");
        this._memorycontext2d=this._memoryCanvas.getContext("2d");
    };

    Main.prototype.getComponents=function(){
        this._video=document.getElementById("video");
        this._btnSnap=document.getElementById("btnsnap");
        this._phototContainer=document.getElementById("photocontainer");
    };

    Main.prototype.addListeners=function(){
        this._btnSnap.onclick=function(){
            this._memoryCanvas.width=this._video.videoWidth;
            this._memoryCanvas.height=this._video.videoHeight;

            this._memorycontext2d.clearRect(0,0,Config.VIDEO_WIDTH,Config.VIDEO_HEIGHT);
            this._memorycontext2d.drawImage(this._video,0,0);

            var newImg=new Image();
            newImg.src=this._memoryCanvas.toDataURL();
            newImg.width=120;
            this._phototContainer.appendChild(newImg);
        }.bind(this);
    };

    Main.prototype.showCamera=function(){
        navigator.getUserMedia=navigator.getUserMedia||
        navigator.webkitGetUserMedia||navigator.mozGetUserMedia;

        navigator.getUserMedia({video:true},function(stream){
            var url=URL.createObjectURL(stream);
            this._video.src=url;
            this._video.play();
            
        }.bind(this),function(error){
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });

    };

    new Main();
}());