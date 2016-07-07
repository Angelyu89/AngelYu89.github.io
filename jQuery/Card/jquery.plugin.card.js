/**
 * Created by sks on 2016/7/7.
 */

(function(){
    $.fn.card=function(args){

        var jqSelf=$(this);

        var width="200px";
        var height="200px";

        var onclickHandler=null;

        function initArgs(){
            if(args){
                if(args.width){
                    width=args.width;
                }
                if(args.height){
                    height=args.height;
                }
                if(args.onclick){
                    onclickHandler=args.onclick;
                }
            }
        }

        function initStyles(){
            jqSelf.css({
                width:width,
                height:height
            });
            //find子代选择器
            var faceA=jqSelf.find(".face-a");
            faceA.css({width:"100%",height:"100%",margin:"0 auto"});

            var faceB=jqSelf.find(".face-b");
            faceB.css({width:"100%",height:"100%",margin:"0 auto"});

            faceB.hide();
            jqSelf[0].faceAVisible=true;
        }

        function addListeners(){
            if(onclickHandler){
                jqSelf.click(onclickHandler);
            }
        }
        function init(){
            initArgs();
            initStyles();
            addListeners();
        }
        init();
    };

    $.fn.showFaceB=function(){
        var elementSelf=this[0];

        if(!elementSelf.animating&& elementSelf.faceAVisible){
            elementSelf.animating=true;

            var faceA=this.find(".face-a");
            var faceB=this.find(".face-b");

            faceA.animate({width:"0"},1000,function(){
                faceA.hide();

                elementSelf.faceAVisible=false;

                faceB.show();
                faceB.css("width","0");
                faceB.animate({width:"100%"},1000,function(){
                    elementSelf.animating=false;
                });
            });
        }
    };
    $.fn.showFaceA=function(){
        var elementSelf=this[0];

        if(!elementSelf.animating&&!elementSelf.faceAVisible){
            elementSelf.animating=true;

            var faceA=this.find(".face-a");
            var faceB=this.find(".face-b");

            faceB.animate({width:"0"},1000,function(){
                faceB.hide();
                faceA.show();
                elementSelf.faceAVisible=true;

                faceA.css("width","0");
                faceA.animate({width:"100%"},1000,function(){
                    elementSelf.animating=false;
                })
            });
        }
    };
    $.fn.toggleFace=function(){
        var elementSelf=this[0];
        if(!elementSelf.animating){
            if(elementSelf.faceAVisible){
                this.showFaceB();
            }else{
                this.showFaceA();
            }
        }
    }
}());