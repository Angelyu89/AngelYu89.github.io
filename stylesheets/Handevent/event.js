/**
 * Created by sks on 2016/6/28.
 */

(function(){

    function Main(){
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");

        this.addRect();
        this.render();

        this.addListeners();
    }
    Main.prototype.addRect=function(){
        this._rect=new ucai.Rect(100,100);
        this._rect.color="#0000ff"
    };

    Main.prototype.addListeners=function(){
        this._canvas.onmousedown=function(e){
            //监听拖动位置
            if(this.hitTest(this._rect,e.layerX,e.layerY)) {
                //记录鼠标偏移值 (图形-鼠标的位置=相对偏移位置)
                this._rectOffsetX = this._rect.x - e.layerX;
                this._rectOffsetY = this._rect.y - e.layerY;

                this._canvas.onmousemove = function (event) {
                    this._rect.x = event.layerX + this._rectOffsetX;
                    this._rect.y = event.layerY + this._rectOffsetY;
                }.bind(this);
            }
        }.bind(this);
        window.onmouseup=function(){
            this._canvas.onmousemove=null;
        }.bind(this);

    };

    Main.prototype.render=function(time){
        //清理画布
        this._context2d.clearRect(0,0,this._canvas.width,this._canvas.height);

        this._rect.draw(this._context2d);
        requestAnimationFrame(this.render.bind(this));
    };

    //判读拖动点是否在矩形区域内（只有鼠标点在矩形内才可拖动）
    Main.prototype.hitTest=function(rect,mouseX,mouseY){
        return mouseX>rect.x&&
                mouseX<rect.x+rect.width&&
                mouseY>rect.y&&
                mouseY<rect.y+rect.height;
    };

    new Main();
}());