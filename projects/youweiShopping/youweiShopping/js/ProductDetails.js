/**
 * Created by sks on 2016/8/5.
 */
$(function () {
    var product_shopping_cat = $("#product_shopping_cat");
    var product_num=$("#product_num");
    var bg=$("#bg");
    $.ajax({
        url: "http://datainfo.duapp.com/shopdata/getGoods.php",
        data: {goodsID: getQueryString("goodsID")},
        dataType: "jsonp",
        success: function (data) {

            var product_img_CarouselFigure = $("#a");
            var product_box_CarouselFigure = $("#b");
            var product_name = $("#c");
            var product_price = $("#d");
            var product_discount = $("#e");
            var product_business = $("#f");
            var product_middle_top = $("#g");
            var product_middle_bottom = $("#h");
            var product_box_details_top = $("#i");
            var product_box_details_bottom = $("#j");

            // console.log(data[0]);
            $.each(data, function (i) {

                for (var j = 0; j < JSON.parse(data[i].imgsUrl).length; j++) {

                    product_img_CarouselFigure.append('<div class="swiper-slide" style="background: url(\'' + JSON.parse(data[i].imgsUrl)[j] + '\');background-size: 100% 100%" ></div>');
                }
                product_box_CarouselFigure.append(' <div class="swiper-pagination"></div>');
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    loop: true,
                    autoplay: 1000,
                    watchSlidesProgress: true,
                    watchSlidesVisibility: true,
                    autoplayDisableOnInteraction: false
                });

                product_name.append("<span class='font_product_name'>" + data[i].goodsName + "</span>");
                product_price.append("<span class='font_product_price'>￥" + data[i].price + "</span>");
                product_discount.append("<span class='font_product_discount'>" + data[i].discount + "折</span>");
                product_business.append("<span class='font_product_business'>当前购买数量:" + data[i].buynumber + "</span>");
                product_middle_top.append("<span class='font_product_middle_top'>具体参数：</span>");
                product_middle_bottom.append("<span class='font_product_middle_bottom'>" + data[i].detail + "</span>");
                product_box_details_top.append("<span class='font_product_box_details_top'>图文详情</span>");
                for (var n = 0; n < JSON.parse(data[i].goodsBenUrl).length; n++) {
                    product_box_details_bottom.append("<img class='img_product_box_details_bottom' src=" + JSON.parse(data[i].goodsBenUrl)[n] + " />");

                }
                other(data[i].goodsID);

            });

        }
    });
    function other(goodsID_i) {
        product_shopping_cat.bind("click", function () {
            var userID = window.sessionStorage.getItem("CU");
            var successAdd=document.querySelector("#successAdd");
            successAdd.innerHTML=product_num.val();
            successAdd.style.display="block";
            setTimeout(function () {
                successAdd.style.display="none";
            },1000);
            if(userID){
                $.ajax({
                    url: "http://datainfo.duapp.com/shopdata/updatecar.php",
                    data: {userID: userID, goodsID: goodsID_i, number: product_num.val()},
                    success:function (data) {
                        switch (data){
                            case "1":
                                break;
                        }
                    }
                });
            }else{
                window.location.href="../html/Login.html";
            }

        });
        bg.bind("click",function () {
            var userID = window.sessionStorage.getItem("CU");
            if(userID){
                window.location.href="../html/shoppingcart_none.html";
            }else {
                window.location.href="../html/Login.html";
            }
        })
    }
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    }

});
