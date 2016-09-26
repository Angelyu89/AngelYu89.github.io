/**
 * Created by sks on 2016/8/4.
 */
(function () {
    Main.prototype.getElements=function () {
        this.acceptPolicyChk=document.querySelector("#acceptPolicyChk");
    };
    Main.prototype.addEventListeners=function () {
        var that=this;
        this.acceptPolicyChk.addEventListener("touchstart",function () {
            
            if(that.gou){
                that.acceptPolicyChk.style.backgroundPosition="-319px 0";
                that.gou=false;
            }
            else {
                that.acceptPolicyChk.style.backgroundPosition="-287px 0";
                that.gou=true;
            }

        })
    };

    function Main() {
        this.gou=true;
        this.getElements();
        this.addEventListeners();
    }
    new Main()

})();