/**
 * Created by sks on 2016/7/10.
 */

//Home page
//$(".pageHome").tap(function(){
// $(".pageHome").hide();
//  var swiper=new Swiper('.container',{
//      pagination:'.pagination',
//      paginatiionClickable:true,
//      direction:'vertical',
//      onInit:function(swiper){
//          swiperAnimateCache(swiper);
//          swiperAnimate(swiper);
//      },
//      onSlideChangeEnd:function(swiper){
//          swiperAnimate(swiper);
//          if($('.slide.slide-active').hasClass('slide8')){
//              $('.goBtn').hide();
//          }else{
//              $('.goBtn').show();
//          }
//      }
//  });
//});

//音乐播放停止
var audioOn=true;
var audio=$("#auDio")[0];
$(".myAudio").on("tap",function(){
    if(audioOn){
        audio.pause();
        $(this).addClass("stop");
    }else{
        audio.play();
        $(this).removeClass("stop");
    }
    audioOn=!audioOn;
});

myVid=document.getElementById("auDio");
function hasVidEnded(){
    if(myVid.ended==true){
        audio.play();
    }else{
        audio.play();
    }
}
hasVidEnded();

function autoPlay(){
    if(audioOn){
        audio.play();
        $(".myAudio").removeClass("stop");
    }
    $("body").off("touchstart",autoPlay);
}
autoPlay();

$("body").on("touchstart",autoPlay);


(function(){
	
	function Main(){
		
		this.callme();		
	}	
	
	Main.prototype.callme=function(){
		
		var _Off=document.getElementById("off");
		var _Out=document.getElementById("open");
		
		_Off.onclick=function(){
			_Out.style="display:block";
		}
		
		
	}
	
	
	
	new Main();
}());










