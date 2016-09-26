/**
 * Created by sks on 2016/8/5.
 */
$(function () {
    var img;
    var Arr;
    // $("#CarouselFigure").html(getQueryString("className"));
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getGoods.php",
        //data:{className:className)},
        dataType:"jsonp",
        success:function (data) {
          var box_goods=$("#box_goods");

            //console.log(box_good);
            $.each(data,function (i) {
                
                var box_good=$("<a href='ProductDetails.html?goodsID="+encodeURI(data[i].goodsID)+"&className="
                    +encodeURI(data[i].className)+"'></a>");
                box_good.attr("class","box_good");//attr() 方法设置或返回被选元素的属性值。

                //console.log(JSON.parse(data[0].goodsBenUrl)[0]);
                box_good.appendTo(box_goods);
                
                $("<img class='img_box_good'  src='"+data[i].goodsListImg+"' />").appendTo(box_good);
                
                var name_good=$('<div></div>');
                name_good.attr("class","name_good");
                $("<span class='font_name_good'>"+data[i].goodsName+"</span>").appendTo(name_good);
                name_good.appendTo(box_good);
                
                var price=$('<div></div>');
                price.attr("class","price");
                $("<span class='font_price'>￥"+data[i].price+"</span>").appendTo(price);
                price.appendTo(box_good);
                
                var discount=$('<div></div>');
                discount.attr("class","discount");
                $("<span class='font_discount'>"+data[i].discount+"折</span>").appendTo(discount);
                discount.appendTo(box_good);
                 Arr=data[i].goodsListImg;
              //  console.log(Arr);
            });

        }
    });

    function getQueryString(name) {
        var reg=new RegExp('(^|&)'+name+"=([^&]*)(&|$)","i");
        var r=window.location.search.substr(1).match(reg);
       // console.log(r);
        if(r != null){
            return decodeURI(r[2]);
        }
        return null
    }
    
});