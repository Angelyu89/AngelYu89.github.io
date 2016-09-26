/**
 * Created by sks on 2016/8/8.
 */
(function () {
    var i;
    var left_div_goods = [];
    var del=[];
    var input_num;
    var div_goods=[];
    var howMuch = document.querySelector("#howMuch");
    var money = 0;
    var DT=[];

    function ShoppingCarMain() {
        this.getUser();
    }

    ShoppingCarMain.prototype.getUser = function () {
        var temp = window.sessionStorage.getItem("CU");
        if (temp) {
            this.userID = temp;
            this.init();
        } else {
            window.location.href = "../login/index.html";
        }
    };
    ShoppingCarMain.prototype.init = function () {

        this.getShoppingCarGoods();
    };
    ShoppingCarMain.prototype.getShoppingCarGoods = function () {
        var self = this;
        $.ajax({
            url: "http://datainfo.duapp.com/shopdata/getCar.php",
            data: {userID: this.userID},
            dataType: "jsonp",
            success: function (data) {
                self.createGoodsList.call(self, data);
            }
        });
    };
    ShoppingCarMain.prototype.createGoodsList = function (data) {
        var middle = document.querySelector("#shopping_middle");

        // console.log(data);
        for (i = 0; i < data.length; i++) {
            var A=$("<div></div>");
             div_goods.push(A);
            A.attr("class", "div_goods");
            A.appendTo(middle);

            var a = $("<input/>");
            left_div_goods.push(a);
            a.attr("class", "left_div_goods");
            a.attr("type", "checkbox");
            a.appendTo(A);
            a.attr("checked", "checked");

            var right_div_goods = $("<a ></a>");
            right_div_goods.attr("class", "right_div_goods");
            // box_good.href="ProductDetails.html?goodsID="+encodeURI(data[i].classID)+"&className="
            //    +encodeURI(data[i].className)+"'>"+data[i].goodsName+"";
            right_div_goods.appendTo(A);


            var img = $("<img class='box_img_goods' src=" + data[i][3] + " />");
            img.appendTo(right_div_goods);

            // var right_div_goods_leftTop = $('<div></div>');
            // right_div_goods_leftTop.attr("class", "right_div_goods_leftTop");
            // right_div_goods_leftTop.appendTo(right_div_goods);

            var right_div_goods_leftTop = $('<a></a>');
            right_div_goods_leftTop.attr("class", "right_div_goods_leftTop");
            $("<span class='font_name_good'>" + data[i][2] + "</span>").appendTo(right_div_goods_leftTop);
            right_div_goods_leftTop.appendTo(right_div_goods);


            var right_div_goods_leftBottom = $('<div></div>');
            right_div_goods_leftBottom.attr("class", "right_div_goods_leftBottom");
            right_div_goods_leftBottom.appendTo(right_div_goods);


            var right_div_goods_leftBottom_left = $('<div></div>');
            right_div_goods_leftBottom_left.attr("class", "right_div_goods_leftBottom_left");
            right_div_goods_leftBottom_left.appendTo(right_div_goods_leftBottom);


            var price_right_div_goods_leftBottom_left = $('<div></div>');
            price_right_div_goods_leftBottom_left.attr("class", "price_right_div_goods_leftBottom_left");
            $("<span class='font_price_right_div_goods_leftBottom_left'>￥" + data[i][4] + "</span>").appendTo(price_right_div_goods_leftBottom_left);
            price_right_div_goods_leftBottom_left.appendTo(right_div_goods_leftBottom_left);

            var yuanJia_right_div_goods_leftBottom_left = $('<div></div>');
            yuanJia_right_div_goods_leftBottom_left.attr("class", "yuanJia_right_div_goods_leftBottom_left");
            $("<span class='font_discount'>" + data[i][5] + "折</span>").appendTo(yuanJia_right_div_goods_leftBottom_left);
            yuanJia_right_div_goods_leftBottom_left.appendTo(right_div_goods_leftBottom_left);


            var right_div_goods_leftBottom_right = $('<div></div>');
            right_div_goods_leftBottom_right.attr("class", "right_div_goods_leftBottom_right");
            right_div_goods_leftBottom_right.appendTo(right_div_goods_leftBottom);

            var num_right_div_goods_leftBottom_right = $('<div></div>');
            num_right_div_goods_leftBottom_right.attr("class", "num_right_div_goods_leftBottom_right");
            num_right_div_goods_leftBottom_right.appendTo(right_div_goods_leftBottom_right);

            input_num = $("<input/>");
            input_num.attr("class", "input_num");
            input_num.attr("type", "number");
            input_num.val(data[i][6]);
            input_num.appendTo(num_right_div_goods_leftBottom_right);


            var dont_right_div_goods_leftBottom_right = $('<div></div>');
            dont_right_div_goods_leftBottom_right.attr("class", "dont_right_div_goods_leftBottom_right");
            dont_right_div_goods_leftBottom_right.appendTo(right_div_goods_leftBottom_right);

           var  b = $('<div></div>');
            del.push(b);
            b.attr("class", "del");
            b.appendTo(dont_right_div_goods_leftBottom_right);

            var delS = $('<span></span>');
            delS.attr("class", "font_del");
            delS.html("删除");
            delS.appendTo(b);

           DT.push(data[i]);

            //console.log(DT);
            // console.log(data[i].goodsID);
            // left_div_goods.bind("click",function () {
            //     console.log(">>")
            // });
            this.add(data[i]);
            //  console.log(data[i].goodsID);
            // return data[i]
        }
        // console.log(left_div_goods);
        this.plusMinus(i);
        this.del(i);
        // console.log(data.goodsID);
        //console.log(data[i]);
       //console.log(DT[0][4]);
    };
    ShoppingCarMain.prototype.del = function (n) {
        for (var m = 0; m < n; m++) {
            (function (a) {
                  // console.log(div_goods[a]);
                //console.log(left_div_goods[a][0]);
                $(del[a]).bind("click", function () {
                    div_goods[a].css('display','none');
                    money = money - parseInt(DT[a][4]) * input_num.val();//dui
                    // console.log(money);
                    howMuch.innerHTML = "￥" + money;
                    //window.sessionStorage.setItem("CU","");
                });
            })(m);

        }
    };
    ShoppingCarMain.prototype.plusMinus = function (n) {
        for (var m = 0; m < n; m++) {
            (function (a) {
               //   console.log(DT);
                //console.log(left_div_goods[a][0]);
                $(left_div_goods[a]).bind("change", function () {
                    if ( $(left_div_goods[a])[0].checked) {
                           //console.log(left_div_goods[0][0].checked);
                        money = money + parseInt(DT[a][4]) * input_num.val();
                        howMuch.innerHTML = "￥" + money;

                    } else {

                        money = money - parseInt(DT[a][4]) * input_num.val();//dui
                        // console.log(money);
                        howMuch.innerHTML = "￥" + money;
                        // console.log(left_div_goods[a][0].checked);//cuo
                        // gs[4]=gs[4];
                        // money=money+parseInt(gs[4])*input_num.val();
                        // howMuch.innerHTML="￥"+money;

                    }
                });
            })(m);

        }
    };
    ShoppingCarMain.prototype.add = function (gs) {
        var that = this;

        money = money + parseInt(gs[4]) * input_num.val();
        howMuch.innerHTML = "￥" + money;
        //console.log(left_div_goods.length);
        // left_div_goods.bind("change",function () {
        //     if(left_div_goods.checked){
        //         console.log(left_div_goods.checked);
        //         money=money-parseInt(gs[4])*input_num.val();
        //         console.log(money);
        //         howMuch.innerHTML="￥"+money;
        //
        //     }else {
        //         console.log(left_div_goods.checked);
        //         gs[4]=gs[4];
        //         console.log(12);
        //         money=money+parseInt(gs[4])*input_num.val();
        //         howMuch.innerHTML="￥"+money;
        //
        //     }


        //
        // });

    };
    new ShoppingCarMain();
})();

