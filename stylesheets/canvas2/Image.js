/**
 * Created by sks on 2016/6/27.
 */

(function(){
    function Main(){

        this._context2d=document.getElementById("MyCanvas").getContext("2d");

       new Promise(function(resolve,reject){
           //resolve(1);
           
           var img=document.createElement("img");
           img.onload=function(){
               resolve(img);
           };
           img.onerror=reject;
           img.src="02.png";

       }).then(function(result){
           this._context2d.drawImage(result,0,0);
           var imageWidth=Math.round(result.width);
           var imageHeight=Math.round(result.height);

           var originImageDate=this._context2d.getImageData(0,0,result.width,result.height);

           var i=0;
           
           //red image data
           var redChannelDate=this._context2d.createImageData(imageWidth,imageHeight);
           for(i=0;i<originImageDate.data.length;i+=4){
               redChannelDate.data[i]=originImageDate.data[i];
               redChannelDate.data[i+3]=255;
           }
           this._context2d.putImageData(redChannelDate,0,400);

           //green image data
           var greenChannelDate=this._context2d.createImageData(imageWidth,imageHeight);
           for(i=0;i<originImageDate.data.length;i+=4){
               greenChannelDate.data[i+1]=originImageDate.data[i+1];
               greenChannelDate.data[i+3]=255;
           }
           this._context2d.putImageData(greenChannelDate,0,800);

           //blue image data
           var blueChannelDate=this._context2d.createImageData(imageWidth,imageHeight);
           for(i=0;i<originImageDate.data.length;i+=4){
               blueChannelDate.data[i+2]=originImageDate.data[i+2];
               blueChannelDate.data[i+3]=255;
           }
            this._context2d.putImageData(blueChannelDate,0,1200);

           //reverse color
           var reversedImageDate=this._context2d.createImageData(imageWidth,imageHeight);
           for(i=0;i<originImageDate.data.length;i+=4){
               reversedImageDate.data[i]=255-originImageDate.data[i];
               reversedImageDate.data[i+1]=255-originImageDate.data[i+1];
               reversedImageDate.data[i+2]=255-originImageDate.data[i+2];
               reversedImageDate.data[i+3]=255;
           }
           this._context2d.putImageData(reversedImageDate,0,1600);

            //black and white image data
           var blackAndWhiteImageDate=this._context2d.createImageData(imageWidth,imageHeight);
           for(i=0;i<originImageDate.data.length;i+=4){
               var color=(originImageDate.data[i]+originImageDate.data[i+1]+originImageDate.data[i+2])/3;

               blackAndWhiteImageDate.data[i]=color;
               blackAndWhiteImageDate.data[i+1]=color;
               blackAndWhiteImageDate.data[i+2]=color;
               blackAndWhiteImageDate.data[i+3]=255;
           }
            this._context2d.putImageData(blackAndWhiteImageDate,0,1600);

       }.bind(this)).catch(function(error){
           console.log(error);
       });
    
    }

    new Main();
}());