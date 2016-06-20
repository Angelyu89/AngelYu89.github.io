/**
 * Created by sks on 2016/6/20.
 */

(function(){
    function Main(){
        //获取canvas
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");
        
        //创建新的函数
        this._rect=new Rect(this._context2d);
        this._rect.draw();
        
        //2秒变绿颜色
        setTimeout(function(){
            //this._rect.setColor("#00ff00");
            this._rect.color="#00ff00";
            
            //bind用于绑定当前要执行的事件
        }.bind(this),2000);
        
    }

    new Main();
}());