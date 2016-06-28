/**
 * Created by sks on 2016/6/28.
 */

(function(){
    
    function Main(){
       
        this._context2d=document.getElementById("canvas").getContext("2d");
        
        var img=new Image();
        img.onload=function(){
            this.draw(img);
        }.bind(this);
        img.src="02.png";
    }
    
    Main.prototype.draw=function(img){
        var g=this._context2d;
        g.beginPath();
        g.arc(200,200,150,0,Math.PI*2);
        g.fill();//填充
        g.closePath();
        g.clip();
        
        g.drawImage(img,0,0);
    };
    
    
    
    new Main();
}());

//用于QQ音乐等