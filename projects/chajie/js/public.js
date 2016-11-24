
/*****************nav******************/

/*下拉导航*/
jQuery(document).ready(function () {
    $(".nav li").hover(function () {
        $(this).find(".subnav").stop(true, true).slideDown('500');
    }, function () {
        $(this).find(".subnav").stop(true, true).slideUp('fast');
    })

})



$(document).ready(function (e) {
    (function () {
     
        play($(".huo_list li"), 4000, $(".huo_list div span"));

        function play(img, time, btn) {
            var l = img.length - 1;
            var n = 0;

            var timer = setInterval(auo, time);

            if (btn.length >= 1) {
                btn.eq(0).addClass("cho");
                btn.click(function () {
                    clearInterval(timer);
                    n = $(this).index();
                    img.eq(n).fadeIn(600).siblings().fadeOut(900);
                    btn.eq(n).addClass("cho").siblings().removeClass("cho");
                    timer = setInterval(auo, time);
                })
            }

            img.hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(auo, time);
            })

            function auo() {
                n = n + 1 > l ? 0 : n + 1;
                img.eq(n).fadeIn(600).siblings().fadeOut(900);
                if (btn.length >= 1) {
                    btn.eq(n).addClass("cho").siblings().removeClass("cho");
                }
            }
        }
    })();
});


jQuery(document).ready(function () {
    (function () {
        var lnav = jQuery("#inlnav>li").has("div");
        var lnavnow = jQuery("#inlnav>li.curr");
        lnavnow.children("div").stop(true, true).slideDown();
        var timer = null;
        lnav.mouseenter(function () {
            jQuery(this).addClass("curr").children("div").stop(true, true).slideDown().end().siblings().removeClass("curr").children("div").stop(true, true).slideUp();
        });

        lnav.hover(function () {
            clearTimeout(timer);
        }, function () {
            timer = setTimeout(function () {
                lnavnow.addClass("curr").siblings().removeClass("curr");
                lnavnow.addClass("curr").children("div").stop(true, true).slideDown().end().siblings().removeClass("curr").children("div").stop(true, true).slideUp();
            }, 4000)
        })
    })();

});



$(document).ready(function (e) {
    $(".news li:odd").addClass('newstwo');
});



jQuery(document).ready(function () {

    var tebcase = ".huan li";
    $(tebcase).click(function () {
        $(this).attr("id", "thp").siblings("li").removeAttr("id", "thp");
        var index = $(this).index();
        $(".showlist").eq(index).show().siblings().hide();
    })

    var tebcase = ".huan2 li";
    $(tebcase).mouseenter(function () {
        $(this).attr("id", "thp2").siblings("li").removeAttr("id", "thp2");
        var index = $(this).index();
        $(".caselist").eq(index).show().siblings().hide();
    })

    $('.look').click(function (e) {
        $('.videoBox_bg').show();
    });

    $('.close').click(function (e) {
        $('.videoBox_bg').hide();

    });
})



$(function() {
    // Magnifier--切换
    (function() {
        var oView = $('.magnifierView');
        var oBigImg = $('.hobig img');
        var oBox = $('.magnifierImg > ul');
        var tit = $(".zhengshu span");
        var txt = $(".zhengshu p");
        var aEle = oBox.children();
        var oPrev = $('.arrows a:eq(0)');
        var oNext = $('.arrows a:eq(1)');
        var num = 4;
        var now = 0;

        aEle.click(function() {
            $(this).addClass('vCur').siblings().removeClass('vCur');
            oBigImg.attr('src', $(this).find('img').attr('src'));
            tit.text($(this).find('img').data('tit'));
            txt.text($(this).find('img').data('txt'));
            $("#ljxq").attr("href", $(this).find("img").attr("lianjie"));
            $(".ddimg").LoadImage(true, 410, 228, "/UpLoadFile/loading.gif");
            if (oBigImg.attr("src") == "/UpLoadFile/zanwu.png") {
                oBigImg.removeAttr("style");
            }
        });

        if (aEle.length < num) return false;

        function next() {
            if (now < 0) {
                now = 0;
            }
            else if (now > aEle.length - num) {
                now = aEle.length - num;
            }
            oBox.animate({ left: -now * 106 }, 400);
        }

        oPrev.click(function() {
            now--;
            next();
        });

        oNext.click(function() {
            now++;
            next();
        });
    })();
});




$(function () {
    $('.consult li').click(function () {
        $(this).stop().animate({ width: 357 }, 500).siblings("li").animate({ width: 157 }, 600);
        $('.heading', $(this)).stop(true, true).fadeOut();
        $(this).siblings("li").find(".heading").stop(true, true).fadeIn();
    });
});




/*banner*/
if (($(".banner img:eq(0)").width() - $(window).width()) > 0) {
    $(".banner li").each(function () {
        $(this).css("margin-left", "-" + ($(".banner img:eq(0)").width() - $(window).width()) / 2 + "px")
    });
}

var nowindex = 0;
var speed = "slow";
var time = 7000;
var bottoncurrentclass = "current";
var imagesivclass = "banner";
var bottondivclass = "ban_btn";

function AutoPlay() {
    var nextindex = nowindex + 1;
    if (nextindex > $("." + imagesivclass + " li").length - 1) nextindex = 0;
    $("." + imagesivclass + " li").eq(nowindex).fadeOut(1000);
    $("." + bottoncurrentclass).removeClass(bottoncurrentclass);
    $("." + imagesivclass + " li").eq(nextindex).fadeIn(600);
    $("." + bottondivclass + " span").eq(nextindex).addClass(bottoncurrentclass);
    nowindex = nextindex;
}

$(function () {
    $("." + imagesivclass + " li").hide();
    $("." + imagesivclass + " li").eq(nowindex).show();
    $("." + bottondivclass + " span").click(function () {
        var index = $("." + bottondivclass + " span").index($(this));
        var cindex = $("." + bottondivclass + " span").index($("." + bottoncurrentclass));
        $("." + imagesivclass + " li").eq(cindex).fadeOut(1000);
        $("." + bottoncurrentclass).removeClass(bottoncurrentclass);
        $("." + imagesivclass + " li").eq(index).fadeIn(600);
        $("." + bottondivclass + " span").eq(index).addClass(bottoncurrentclass);
        clearInterval(autoplay);
        nowindex = index;
        autoplay = setInterval(AutoPlay, time);
    });

    autoplay = setInterval(AutoPlay, time);

});



$(function() {
    $(".nav ul li").eq(3).find("div").eq(0).find("a").each(function() {
        $(this).attr("href", $.trim($(this).next("span").html()))
    });
    $(".cpb").addClass("gaoliang");
    $(".search_btn").click(function() {
        if ($.trim($(".search_txt").val()) == "" || $.trim($(".search_txt").val()) == "根据关键字搜索") {
            alert("请输入产品关键词");
            return false;
        } else {
            window.location.href = "/prolistsearch.shtml?title=" + escape($.trim($(".search_txt").val()));
        }
    });
    $(".search_txt").keydown(function(event) {
        if (event.keyCode == 13) {
            $(".search_btn").click();
            return false;
        }
    });

});



