/**
 * Created by sks on 2016/8/4.
 */
(function () {
    Main.prototype.getElements=function () {
        this.delPhoneNum1=document.querySelector("#delPhoneNum1");
        this.delPhoneNum2=document.querySelector("#delPhoneNum2");
        this.telNum=document.querySelector("#telNum");
        this.pass=document.querySelector("#pass");
        //console.log(this.delPhoneNum[0]);
    };
    Main.prototype.addEventListeners=function () {
        var that=this;
        this.delPhoneNum1.addEventListener("touchstart",function () {
            that.telNum.value="";
        });
        this.delPhoneNum2.addEventListener("touchstart",function () {
            that.pass.value="";
        })
    };
    function Main() {
        this.getElements();
        this.addEventListeners()
    }
    new Main();
})();