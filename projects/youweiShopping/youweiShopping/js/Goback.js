/**
 * Created by sks on 2016/8/6.
 */
(function () {
    // Main.prototype.getElement=function () {
    //     this.back = document.querySelector("#back");
    //     // this.screenw = document.documentElement.clientWidth || document.body.clientWidth;
    //     // this.screenh = document.documentElement.clientHeight || document.body.clientHeight;
    // };
    // Main.prototype.change=function () {
    //     if(){
    //
    //     }
    // };
    // Main.prototype.addEventListener=function () {
    //
    // };
    // function Main() {
    //     this.ready=false;
    //     this.getElement();
    //     this.change();
    // }
    // new Main();

$("div").scroll( function () {
    var back=document.querySelector("#back");
    back.style.display="block";
    $(this).scrollTop()<720?$("#back").removeClass("back"):$("#back").addClass("back")
});

    $("#back").click(function(){
        console.log(12);
        $('#middle').animate({scrollTop:0},800);
    });

})();