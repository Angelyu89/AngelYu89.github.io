jQuery.extend(jQuery.easing,{
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	}
});
(function($){	
	$.fn.xslider=function(settings){
		settings=$.extend({},$.fn.xslider.defaults,settings);
		this.each(function(){
			var scrollobj=settings.scrollobj || $(this).find("ul");
			var maxlength=settings.maxlength || (settings.dir=="H" ? scrollobj.parent().width() : scrollobj.parent().height());//length of the wrapper visible;
			var scrollunits=scrollobj.find("li");//units to move;
			var unitlen=settings.unitlen || (settings.dir=="H" ? scrollunits.eq(0).outerWidth() : scrollunits.eq(0).outerHeight());
			var unitdisplayed=settings.unitdisplayed;//units num displayed;
			var nowlength=settings.nowlength || scrollunits.length*unitlen;//length of the scrollobj;
			var offset=0;
			var sn=0;
			var movelength=unitlen*settings.movelength;
			var moving=false;//moving now?;
			var btnright=$(this).find("a.aright");
			var btnleft=$(this).find("a.aleft");
			
			if(settings.dir=="H"){
				scrollobj.css("left","0px");
			}else{
				scrollobj.css("top","0px");
			}
			if(nowlength>maxlength){
				btnleft.addClass("agrayleft");
				btnright.removeClass("agrayright");
				offset=nowlength-maxlength;
			}else{
				btnleft.addClass("agrayleft");
				btnright.addClass("agrayright");
			}

			btnleft.click(function(){
				if($(this).is("[class*='agrayleft']")){return false;}
				if(!moving){
					moving=true;
					sn-=movelength;
					if(sn>unitlen*unitdisplayed-maxlength){
						jQuery.fn.xslider.scroll(scrollobj,-sn,settings.dir,function(){moving=false;});
					}else{
						jQuery.fn.xslider.scroll(scrollobj,0,settings.dir,function(){moving=false;});
						sn=0;
						$(this).addClass("agrayleft");
					}
					btnright.removeClass("agrayright");
				}
				return false;
			});
			btnright.click(function(){
				if($(this).is("[class*='agrayright']")){return false;}
				if(!moving){
					moving=true;
					sn+=movelength;
					if(sn<offset-(unitlen*unitdisplayed-maxlength)){
						jQuery.fn.xslider.scroll(scrollobj,-sn,settings.dir,function(){moving=false;});
					}else{
						jQuery.fn.xslider.scroll(scrollobj,-offset,settings.dir,function(){moving=false;});//滚动到最后一个位置;
						sn=offset;
						$(this).addClass("agrayright");
					}
					btnleft.removeClass("agrayleft");
				}
				return false;
			});
			
			if(settings.autoscroll){
				jQuery.fn.xslider.autoscroll($(this),settings.autoscroll);
			}
			
		})
	}
})(jQuery);

jQuery.fn.xslider.defaults = {
	maxlength:0,
	scrollobj:null,
	unitlen:0,
	nowlength:0,
	dir:"H",
	autoscroll:null
};
jQuery.fn.xslider.scroll=function(obj,w,dir,callback){
	if(dir=="H"){
		obj.animate({
			left:w
		},500,"easeInSine",callback);
	}else{
		obj.animate({
			top:w
		},500,"easeInSine",callback);	
	}
}
jQuery.fn.xslider.autoscroll=function(obj,time){
	var  vane="right";
	function autoscrolling(){
		if(vane=="right"){
			if(!obj.find("a.agrayright").length){
				obj.find("a.aright").trigger("click");
			}else{
				vane="left";
			}
		}
		if(vane=="left"){
			if(!obj.find("a.agrayleft").length){	
				obj.find("a.aleft").trigger("click");
			}else{
				vane="right";
			}
		}
	}
	var scrollTimmer=setInterval(autoscrolling,time);
	obj.hover(function(){
		clearInterval(scrollTimmer);
	},function(){
		scrollTimmer=setInterval(autoscrolling,time);
	});
}