/**
 * Created by sks on 2016/7/15.
 */

(function(){
    function Main(){
        this.getElementsByName();
        this.onclick();
        this.BTNonclick();
        var timer;
        play();

       // this.addLinsters();
        //this.play();


        function play() {
            timer=setInterval(function () {
                next.onclick();
            },2000);
        }


       function stop() {
           clearInterval(timer);
       }
        var containerList=document.getElementById("list");
        containerList.onmouseout=play;
        containerList.onmousemove=stop;

    }
    
    Main.prototype.getElementsByName=function(){
        var container=document.getElementById("middle-zhong");
        var list=document.getElementById("list");
        var prev=document.getElementById("prev");
        var next=document.getElementById("next");
    };

    Main.prototype.onclick=function(){

        //点击箭头左右切换
        function animate(offset) {
            if(offset==0){
                return;
            }
            var newLeft=parseInt(list.style.left)+offset;
            list.style.left=newLeft+"px";
        }

        function showButton() {
            var Btn=document.getElementsByName("btnSpan");
            var index=parseInt(list.style.left)/(-776);
            // console.log(list.style.left);

            for (i=0;i<Btn.length;i++) {
                if (Btn[i].className == "on") {
                    Btn[i].className ="";
                    break;
                }
            }
            Btn[index].className = "on";
        }

        next.onclick=function (){
            if(list.style.left==-3104+"px"){
                list.style.left=0+"px";
                showButton();
            }
            else {
                animate(-776);
                showButton();
            }
        };

        prev.onclick=function(){
            if(list.style.left==0+"px") {

                list.style.left=-3104+"px";
                showButton();
            }
            else{
                animate(776);
                showButton();
            }
        };

        Main.prototype.BTNonclick=function(){
            var btnbtn=document.getElementsByName("btnSpan");

            //用闭包来获取i的值
            for(var i=0;i<btnbtn.length;i++){
                (function (index) {
                    btnbtn[index].onclick=function () {

                        list.style.left=index*(-776)+"px";
                        // console.log(index);
                        
                        for(j=0;j<btnbtn.length;j++){
                            if(btnbtn[j].className=="on"){
                                btnbtn[j].className="";
                                break;
                            }
                        }
                        btnbtn[index].className="on";
                    };
                    
                })(i);
            }
        };

    };




     new Main();
}());