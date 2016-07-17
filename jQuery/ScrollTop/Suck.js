
(function(){
    function Main() {
        // this.top();
        this.top2();
    }
    /*js版*/
   /* Main.prototype.top = function () {
        //执行鼠标滚动事件window.onscroll
        window.onscroll = function () {
    
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var divtop = document.getElementsByClassName("oDivTop")[0];
    
            if (scrolltop >500) {
                divtop.style.height = "80px";
                divtop.style.transition = "height 0.7s";
    
            } else {
                divtop.style.height = "0";
                divtop.style.transition = "height 0.1s"
            }
        }
    };*/


    /*jquery版*/
    Main.prototype.top2=function(){
        $(document).scroll(function(){

            var scrollTop=$(document).scrollTop();
            if(scrollTop>100){
                /*淡入淡出效果*/
                $(".oDivTop").fadeIn(1000)
            }
            else{
                $(".oDivTop").fadeOut(0)
            }

        });
    };


    
    new Main();
}());