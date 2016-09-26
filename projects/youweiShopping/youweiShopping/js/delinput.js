/**
 * Created by sks on 2016/8/8.
 */
(function () {
    Main.prototype.getElements=function () {

        this.search_X=document.querySelector("#search_X");

        this.search_input=document.querySelector("#search_input");
        //console.log(this.delPhoneNum[0]);
    };
    Main.prototype.addEventListeners=function () {
        var that=this;

        this.search_X.addEventListener("touchstart",function () {
            that.search_input.value="";
        })
    };
    function Main() {
        this.getElements();
        this.addEventListeners()
    }
    new Main();
})();