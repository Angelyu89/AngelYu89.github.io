/**
 * Created by sks on 2016/6/20.
 */

(function(){
    function Rect(context){
        this._color="#ff000";
        this._context2d=context;
    }
    //绘制一个矩形
    Rect.prototype.draw=function(){
        this._context2d.fillStyle=this._color;
        this._context2d.fillRect(0,0,100,100);
    };
    
    /*Rect.prototype.setColor=function(color){
        this._color=color;
        this.draw()
    };*/
    
    //用get set方法改变矩形颜色
    Object.defineProperty(Rect.prototype,"color",{
        get:function(){
            return this._color;
        },
        set:function(value){
            this._color=value;
            this.draw();
        }
    });
    
    window.Rect=Rect;
}());