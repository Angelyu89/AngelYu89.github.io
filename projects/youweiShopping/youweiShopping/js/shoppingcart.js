/**
 * Created by sks on 2016/8/8.
 */
(function () {
    Main.prototype.getElement = function () {
        this.btm_logo_5 = document.querySelector("#btm_logo_5");
        this.btm_logo_4 = document.querySelector("#btm_logo_4");
    };
    Main.prototype.addEventListeners = function () {
        var that = this;
        var val = window.sessionStorage.getItem("CU");
        // console.log(val);
        this.btm_logo_5.addEventListener("touchstart", function () {
            if (val) {
                window.location.href = "../html/self.html";
            } else {
                window.location.href = "../html/Login.html";
            }
        });
        this.btm_logo_4.addEventListener("touchstart", function () {
            if (val) {
                window.location.href = "../html/shoppingcart_none.html";
            } else {
                window.location.href = "../html/Login.html";
            }
        });
    };
    function Main() {
        this.getElement();
        this.addEventListeners();
    }

    new Main();
})();