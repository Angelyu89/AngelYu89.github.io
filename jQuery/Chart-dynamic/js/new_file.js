/**
 * Created by sks on 2016/6/29.
 */

(function(){
    
    var Config={CIRCLE_X:200,CIRCLE_Y:200,CIRCLE_R:100};

    function Main(){
        this._data=[{name:"UI",value:"0.5",fillColor:"#ff0000"},
                    {name:"Java",value:"0.4",fillColor:"#00ff00"},
                    {name:"H5",value:"0.4",fillColor:"#ff00ff"}
                      ];
        this._context2d=document.getElementById("canvas").getContext("2d");
        this.drawDate();
    }
    
    
    Main.prototype.drawDate=function(){
        var lastValue=0;
        
        for(var i=0;i<this._data.length;i++){
            var item=this._data[i];
            var value=item.value*Math.PI*2;
            
            var currentValue=lastValue+value;
            
            this._context2d.beginPath();
            this._context2d.moveTo(Config.CIRCLE_X,Config.CIRCLE_Y,Config.CIRCLE_R);
            this._context2d.arc(Config.CIRCLE_X,Config.CIRCLE_Y,Config.CIRCLE_R,lastValue,currentValue);
            this._context2d.closePath();
            this._context2d.fillStyle=item.fillColor;
            this._context2d.fill(); 
            
            lastValue=currentValue;
        }
    };
    
    new Main();
}());



for(var i=1;i<=3;i++){
	setTimeout(function(){
		console.log(i);
	},0);
	
};









