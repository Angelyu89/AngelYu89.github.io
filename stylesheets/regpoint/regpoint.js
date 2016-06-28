/**
 * Created by sks on 2016/6/28.
 */

(function(){

   function Main(){
       this._context2d=document.getElementById("canvas").getContext("2d");

       this._infoDiv=document.getElementById("info");
       this._currentTime=0;


       this._r=new ucai.Rect(100,100);
       this._r.x=200;
       this._r.y=200;
       this._r.regX=50;
       this._r.regY=50;
       this.render(this._currentTime); //渲染
   }
    Main.prototype.render=function(time){
        var deltaTime=time-this._currentTime;
        //计算一秒多少针
        this._infoDiv.innerHTML=Math.round(1000/deltaTime)+"fps";
        this._currentTime=time;


        //clear canvas
        this._context2d.clearRect(0,0,550,400);
        //旋转角度
        this._r.rotation+=.01;

        this._r.draw(this._context2d);
        //刷新当前速度
        requestAnimationFrame(this.render.bind(this));
    };

    new Main();
}());





