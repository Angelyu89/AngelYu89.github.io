/**
 * Created by sks on 2016/8/6.
 */

/*头部下拉*/
// $("#header_rg").on("click",function () {
//     $("#header_tk").toggle();
// });


//头部下拉
(function(){
   function Main(){
       this.header();
   }
   Main.prototype.header=function(){
      var i=true;
      var a=document.getElementById("header_rg");
      var b=document.getElementById("header_tk");
      a.onclick=function (){
           if(i){
               b.style.display="block";
               i=false;
           }else{
               b.style.display="none";
               i=true;
           }
       }
    };
    new Main();
}());


/*点击注册弹出注册框*/
$("#registered_a").click(function(){
    $("#pop_sing").css("dispaly:none");
    $("#pop_registered").css("display:block");
    $("#re_error").css("display:none");
});

