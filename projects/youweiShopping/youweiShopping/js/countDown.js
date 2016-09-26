/**
 * Created by sks on 2016/8/4.
 */
(function () {
    Main.prototype.getElements = function () {
        this.countDown = document.querySelector("#countDown");

    };
    Main.prototype.change = function () {
        var that = this;

        this.countDown.innerHTML = that.i;

        t = setInterval(function () {
            that.i--;
            that.countDown.innerHTML = "";
            that.countDown.innerHTML = that.i;
           // console.log(that.i);
            if (that.i == -1) {
                that.again();
                clearInterval(t);
                that.countDown.innerHTML = "";
                that.countDown.innerHTML = "重新注册";
                that.countDown.style.width = "30%";
                that.countDown.style.fontSize = "1.5rem";
                that.countDown.style.lineHeight = "300%";

            }
        }, 1000);

    };
    Main.prototype.again = function () {
        var that = this;

        this.countDown.addEventListener("click", function () {
            that.i = 100;
           // console.log(12);
            that.countDown.style.width = "15%";
            that.change();
        })

    };
    function Main() {
        this.i = 100;
        this.getElements();
        this.change();

    }

    new Main();
})();