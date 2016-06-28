/**
 * Created by xiaoyu on 2016/6/28.
 */

//案例见新浪微博，头像更换


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
        g.drawImage(img,0,0);

        g.save();
        g.fillStyle="#0000ff";
        //设置透明
        g.globalAlpha=0.3;
        // g.fillRect(0,0,600,380);
        g.beginPath();
        g.rect(0,0,400,300);
        //绘制圆形
        g.arc(200,150,80,0,Math.PI*2);
        g.closePath();
         //奇偶环绕（取相交的）
        g.fill("evenodd");
        g.restore();
    };
    
    new Main();
}());