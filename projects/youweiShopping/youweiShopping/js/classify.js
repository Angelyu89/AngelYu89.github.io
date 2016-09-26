/**
 * Created by sks on 2016/8/6.
 */
$(function () {
    $.get("http://datainfo.duapp.com/shopdata/getclass.php", function (data) {

        if (data) {
            data = JSON.parse(data);
            
            $.each(data, function (i) {
                var a=$("<a class='font_index_classify' href='clothes.html?classID="+encodeURI(data[i].classID)+"&className="
                    +encodeURI(data[i].className)+"'>"+data[i].className+"</a>"
                );

                // console.log(i);
                // $("#menu_goods_" + i + "").html(a);
                $("#index_classify_" + i + "").html(a);
                // $("#quit").onclick=function () {
                //     localStorage.removeItem(localStorage.key(0));
                //     localStorage.removeItem(localStorage.getItem(localStorage.key(0)));
                // }
            });

        }
    })
});