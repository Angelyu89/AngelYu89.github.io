/**
 * Created by sks on 2016/6/29.
 */

(function(){
    function Main(){
        this._MAX_VALUE=100;
        this._data=[10,11,13,60,30,18,23,30,56,43,20,36];

        this._context2d=document.getElementById("canvas").getContext("2d");

        this.drawData();
    }
    
    Main.prototype.drawData=function(){
        //视图与人眼方向相反
        //var y=800*(1-this._data[0]/this._MAX_VALUE);
        var p=this.getPositionByIndex(0);
        this._context2d.moveTo(p.x,p.y);
        
        for(var i=1;i<this._data.length;i++){
            p=this.getPositionByIndex(i);
            this._context2d.lineTo(p.x,p.y);
        }
        this._context2d.stroke();
    };
    
    Main.prototype.getPositionByIndex=function(index){
        var y=500*(1-this._data[index]/this._MAX_VALUE);
        
        var x=(800/12)*index+20;
        return{x:x,y:y};
    };

    new Main();
}());