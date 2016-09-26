/**
 * Created by sks on 2016/8/5.
 */
// $(function () {
//     $.get("http://datainfo.duapp.com/shopdata/getclass.php",{},function (data) {
//         if(data){
//             data=JSON.parse(data);
//             //console.log(data);
//             $.each(data,function (i) {
//                 var $a=$("<a href='shirt.html?classID="+encodeURI(data[i].classID)+"&className="
//                     +encodeURI(data[i].className)+"'>"+data[i].classID+"</a>"
//                 );
//                 console.log(data[i].imgsUrl);
//                 $("#try"+i).append($a);
//             })
//         }
//     });
//
// });
$(function () {
    // $("#sht1").html(getQueryString("className"));
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
        data:{selectText:getQueryString("selectText")},
        dataType:"jsonp",
        success:function (data) {
            var middle=$("#middle");
            $.each(data,function (i) {
                var box_goods=$("<div></div>");
                box_goods.attr("class","box_goods");
                box_goods.appendTo(middle);

                var box_good=$("<a href='ProductDetails.html?goodsID="+encodeURI(data[i].goodsID)+"&className="
                    +encodeURI(data[i].className)+"'></a>");
                box_good.attr("class","box_good");
                // box_good.href="ProductDetails.html?goodsID="+encodeURI(data[i].classID)+"&className="
                //    +encodeURI(data[i].className)+"'>"+data[i].goodsName+"";
                box_good.appendTo(box_goods);


                var img=$("<img class='img_box_good' src="+data[i].goodsListImg+" />");
                img.appendTo(box_good);

                var box_good_right=$('<div></div>');
                box_good_right.attr("class","box_good_right");
                box_good_right.appendTo(box_goods);

                var name_good=$('<div></div>');
                name_good.attr("class","name_good");
                $("<span class='font_name_good'>"+data[i].goodsName+"</span>").appendTo(name_good);
                name_good.appendTo(box_good_right);

                var box_good_right_left=$('<div></div>');
                box_good_right_left.attr("class","box_good_right_left");
                box_good_right_left.appendTo(box_good_right);


                var price=$('<div></div>');
                price.attr("class","price");
                $("<span class='font_price'>￥"+data[i].price+"</span>").appendTo(price);
                price.appendTo(box_good_right);

                var discount=$('<div></div>');
                discount.attr("class","discount");
                $("<span class='font_discount'>"+data[i].discount+"折</span>").appendTo(discount);
                discount.appendTo(box_good_right);


                // var $spans =$("<span></span>");
                // var $spanp =$("<span>"+data[i].price+"</span>");
                // var $img=$("<img src="+data[i].goodsListImg+" />");
                // var $discounts=$("<span>&nbsp;" +data[i].discount+"折</span>");
                // var $a=$("<a href='goodxiangqing.html?goodsID="+encodeURI(data[i].classID)+"&className="
                //     +encodeURI(data[i].className)+"'>"+data[i].goodsName+"</a>"
                // );
                // $spans.append($a);
                // var $swiper=$("#swiper");
                // // for(var j=0;j<JSON.parse(data[i].imgsUrl).length;j++){
                // //
                // $swiper.append('<div class="swiper-slide" id="slide'+i+'" ></div>');
                // // }


            });
        }
    });
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    }
});
