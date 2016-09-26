/**
 * Created by sks on 2016/8/8.
 */
(function () {
    Main.prototype.getElement=function () {
        this.minus=document.querySelector("#minus");
        this.plus=document.querySelector("#plus");
        this.product_num=document.querySelector("#product_num");

    };
    Main.prototype.change=function () {
        this.product_num.value= this.num;
    };
    Main.prototype.addEventListeners=function () {
            var that=this;
        this.plus.addEventListener("touchstart",function () {
            that.num++;
            that.change();
        });
        this.minus.addEventListener("touchstart",function () {
            that.num--;
            that.num=Math.max(1,that.num);
            that.change();
        })
    };

    function Main() {
        this.num=1;
        this.getElement();
        this.change();
        this.addEventListeners();
    }
    new  Main();
})();