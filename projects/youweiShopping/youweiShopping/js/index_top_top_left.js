/**
 * Created by sks on 2016/8/5.
 */
(function () {
    Main.prototype.getElement=function () {
        this.top_top_left=document.querySelector("#top_top_left");
        this.menu_left=document.querySelector("#menu_left");

    };
    Main.prototype.addEventListener=function () {
        var that=this;
        var i=0;
        this.top_top_left.addEventListener("touchstart",function () {
           // console.log(123);
           that.menu_left.style.animation="block 1s 0s forwards";
            that.ready=true;
            that.back();
        })

    };
    Main.prototype.back=function () {
        var that=this;
            if(this.ready){
                window.addEventListener("touchstart",function (event) {
                    //console.log(event);
                    //console.log(event.touches[0].screenX);//event.touches[0] 移动端屏幕上的第一个手指触碰
                    var ets=event.touches[0].screenX-200;
                    var dw= screen.width;
                 // console.log(ets,dw);
                    var i=0;
                    if(ets/dw >0.66){
                       // console.log(">>>");
                        that.menu_left.style.animation="back 1s 0s forwards";
                    }

                })
            }
    };
    function Main() {
        this.ready=false;
        this.getElement();
        this.addEventListener();
    }
    new Main();
    
})();