/**
 * Created by sks on 2016/8/5.
 */
(function () {
    Main.prototype.getElements = function () {
        //this.CarouselFigure=document.querySelector("#CarouselFigure");
        this.img_CarouselFigure = document.querySelector("#img_CarouselFigure");
        this.num = document.querySelectorAll(".num");
        this.imgWIDTH = 100;
        this.img = [
            "https://img.alicdn.com/imgextra/i3/119579859/TB2W761fpXXXXXpXpXXXXXXXXXX_!!119579859.jpg",

            "https://img.alicdn.com/bao/uploaded/i3/TB1eqMyIVXXXXXIaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
            "http://img30.360buyimg.com/popWaterMark/jfs/t2011/4/612174753/231399/8309087b/561cbdb9N3ce22bf7.jpg",
            "https://img.alicdn.com/imgextra/i2/2625587648/TB20VACfpXXXXcFXXXXXXXXXXXX_!!2625587648.jpg",
            "https://img.alicdn.com/imgextra/i3/119579859/TB2W761fpXXXXXpXpXXXXXXXXXX_!!119579859.jpg",

            "https://img.alicdn.com/bao/uploaded/i3/TB1eqMyIVXXXXXIaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
        ];
    };
    Main.prototype.add = function () {
        for (var i = 0; i < this.img.length; i++) {
            var div = document.createElement("div");
            div.className = "img";
            div.style.backgroundImage = "url('" + this.img[i] + "')";
            console.log(this.img[i]);
            $("#img_" + i + "").append(div);

        }
        this.img_CarouselFigure.style.width = this.imgWIDTH * this.img.length + "%";
        this.img_CarouselFigure.style.left = -this.imgWIDTH + "%";
        this.pointers = $(".num");
        this.pointers[this.currentTime - 1].style.background = "#fff";
    };

    Main.prototype.create = function () {
        var that = this;
        this.t = setInterval(function () {
            that.change();
            that.currentTime++;
        }, 1000)
    };

    Main.prototype.change = function () {
        var that = this;

        this.img_CarouselFigure.style.transition = "left 0.5s";
        this.img_CarouselFigure.style.left = -this.currentTime * this.imgWIDTH + "%";
        this.pointers.css({
            background: "rgba(187,178,156,0.8)"
        });

        if(this.currentTime==0){

            this.currentTime=this.img.length-2;
            this.img_CarouselFigure.style.left="0%";
            this.pointers[this.currentTime-1].style.background="#fff";
            setTimeout(function () {
                that.img_CarouselFigure.style.transition="0s";
                that.img_CarouselFigure.style.left=-(that.img.length-2)*that.imgWIDTH+"%";
            },300);
        }
        if (this.currentTime == this.img.length - 1) {
            this.currentTime = 1;
            this.img_CarouselFigure.style.left = -(this.img.length - 1) * this.imgWIDTH + "%";
            this.pointers[this.currentTime-1].style.background="#fff";
            setTimeout(function() {
                that.img_CarouselFigure.style.transition = "0s";
                that.img_CarouselFigure.style.left = -that.imgWIDTH + "%";
            }, 300)
        }
        //	console.log(this.currentTime-2);
        this.pointers[this.currentTime-1].style.background="#fff";
    };
    function Main() {
        this.currentTime = 1;
        this.getElements();
        this.add();
        this.create();
    }

    new Main();


})();