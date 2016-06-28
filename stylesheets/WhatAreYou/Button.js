/**
 * Created by sks on 2016/6/28.
 */

window.ucai=window.ucai||{};

(function(){

    function Button(label,bgColor,textColor){
        
        this._text=new ucai.Text(label,20);
        //继承父级
        ucai.Rect.call(this,100,30);
        
        this.color=bgColor?bgColor:"#ff0000";
        this._textColor=textColor?textColor:"#fff";
        //字号
        this._text.x=20;
    }
    
    Button.prototype=new ucai.Rect();
    
    Button.prototype.protected_onDraw=function(g){
        //重写
        ucai.Rect.prototype.protected_onDraw.call(this,g);
        
        g.fillStyle=this._textColor;
        this._text.draw(g);
    };
    
    ucai.Button=Button;

}());