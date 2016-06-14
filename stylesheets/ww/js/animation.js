/*
author      :   DK
email       :   derek.qin@yomeier.com
date        :   2011.10.12
description :   仿google首页动画
*/
/*
options参数说明:
element:string,动画容器的id
url:string,用于播放动画的图片地址
speed:int,每秒帧数
hover:function,鼠标移动到element上时调用
blur:function,鼠标离开element时调用
*/
function animation(options) {
    var defaultOptions = { element: "", url: "", speed: 11, hover: function () { }, blur: function () { } };
    this.init(options, defaultOptions);
};

animation.prototype = {
    init: function (o1, o2) {
        var me = this;
        for (var p in o2) {
            me[p] = o1[p] || o2[p];
        }
        me.element = document.getElementById(me.element);
        me.delay = 1000 / me.speed;
        me.step = 0;
        me.defaultBackground = me.element.style.background;
        me.defalutUrl = me.element.style.backgroundImage;
        me.url = me.url || me.defalutUrl;
        me.width = me.element.clientWidth;
        me.height = me.element.clientHeight;
        var img = new Image();
        img.onload = function () {
            me.cols = parseInt(img.width / me.width);
            me.rows = parseInt(img.height / me.height);
            me.frames = me.cols * me.rows;
            me.element.onclick = function () {
                me.play();
            };
            me.element.onmouseover = function () {
                me.onhover();
            };
            me.element.onmouseout = function () {
                me.onblur();
            };
        };
        img.src = me.url;
    }

, play: function () {
    if (this.playing) {
        return;
    }
    this.playing = true;
    this.next();
},
    onhover: function () {
        if (!this.playing) {
            this.hover();
        }
    },
    onblur: function () {
        if (!this.playing) {
            this.blur();
        }
    },
    next: function () {
        var me = this;
        me.step++;
        if (me.step > me.frames) {
            me.stop();
            return;
        }
        var x = me.step % me.cols;
        var y = parseInt(me.step / me.rows);
        if (me.step % me.rows > 0) {
            y++;
        }
        var position = "-" + (x - 1) * me.width + "px -" + (y - 1) * me.height + "px";
        me.element.style.background = "url(" + me.url + ") " + position;
        setTimeout(function () { me.next(); }, me.delay);
    },
    stop: function () {
        var me = this;
        me.step = 0;
        me.playing = false;
        me.element.style.background = me.defaultBackground;
    } 
};