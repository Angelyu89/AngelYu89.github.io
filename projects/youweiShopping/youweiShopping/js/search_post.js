/**
 * Created by sks on 2016/8/8.
 */
(function () {
    Main.prototype.getElements=function () {
        this.div_search=document.querySelector("#div_search");
        this.search_input=document.querySelector("#search_input");
    };
    Main.prototype.addEventListeners=function () {
        var that=this;
        this.div_search.addEventListener("click",function () {
            console.log(12);
            window.location.href="../html/search_display.html?selectText="+that.search_input.value+"#";
        });
    };
   function Main() {
       this.getElements();
       this.addEventListeners()
   }
    new Main();
})();