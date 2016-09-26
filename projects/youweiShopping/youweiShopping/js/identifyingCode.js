/**
 * Created by sks on 2016/8/4.
 */
(function () {
    Main.prototype.getElements = function () {
        this.identifyingCodeA = document.querySelector("#identifyingCodeA");
    };
    Main.prototype.oneTime = function () {
        // this.result = [];
        // var that = this;
        // var ranNum;
        // for (var i = 0; i < 4; i++) {
        //     ranNum = Math.ceil(Math.random() * 25);
        //     Num = String.fromCharCode(65 + ranNum);
        //
        //     that.result.push(Num);
        // }
        // //console.log(that.result);
        // //  console.log(that.result.join(" "));
        // this.identifyingCodeA.innerHTML = that.result.join(" ");

        var code = "";
        var codeLength = 4;//验证码的长度
        //var checkCode = document.getElementById("code");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        this.identifyingCodeA.innerHTML=code;
       // checkCode.value = code;//把code值赋给验证码
    };
    Main.prototype.addEventListeners = function () {
        var that = this;
        this.identifyingCodeA.addEventListener("click",function () {
           // console.log(">>>");
            $("#identifyingCodeA").empty();

            that.oneTime();
        });
    };
    function Main() {
        this.getElements();
        this.addEventListeners();
        this.oneTime();

    }

    new Main();
})();