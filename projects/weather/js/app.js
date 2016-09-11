/**
 * Created by sks on 2016/8/19.
 */
(function () {
    function bt() {
        var cityList = "http://apis.baidu.com/apistore/weatherservice/citylist";
        var cityRecentWeathers = "http://apis.baidu.com/apistore/weatherservice/recentweathers";
        var cityWeather = "http://apis.baidu.com/apistore/weatherservice/weather";
        var cityName = "http://apis.baidu.com/apistore/weatherservice/cityname";
        var cityInfo = "http://apis.baidu.com/apistore/weatherservice/cityinfo";
        var cityId = "http://apis.baidu.com/apistore/weatherservice/cityid";



        $("#btCn").bind("click",function () {
            $("#weather").empty();
            $("#aera").empty();
            var val = $("#ctnm").val();
            var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");

            if(reg.test(val)){
                $.ajax({
                url:cityList,
                headers:{apikey:"e3962802cc92e10cb665c3263459139a"},
                data:{cityname:val},
                success:function (data) {
                    if(data.errNum == -1){
                        alert("查询城市不存在")

                    }else {
                        if(data.retData.length>1){
                            $("#aera").empty();
                            var html = "";
                            for (var i=0;i<data.retData.length;i++){
                                html+="<button class = 'area' id="+
                                    data.retData[i].area_id+
                                    ">"+data.retData[i].province_cn+" "+
                                    data.retData[i].district_cn+" "+
                                    data.retData[i].name_cn+"</button>";
                            }
                            $("#aera").append(html);
                            $('.area').bind("click",function () {
                                $.ajax({
                                    url:cityId,
                                    headers:{apikey:"e3962802cc92e10cb665c3263459139a"},
                                    data:{cityid:this.id},
                                    dataType: "json",
                                    success:function (data) {
                                          console.log(data);
                                        weather(data)
                                    }

                                })

                            });

                        }else {
                            $("#aera").empty();
                            $.ajax({
                                url:cityId,
                                headers:{apikey:"e3962802cc92e10cb665c3263459139a"},
                                data:{cityid:data.retData[0].area_id},
                                dataType: "json",
                                success:function (data) {
                                    console.log(data);
                                    weather(data)
                                }

                            })
                        }
                    }
                },
                dataType: "json"
                })
            }else {
                $.ajax({
                url:cityWeather,
                headers:{apikey:"e3962802cc92e10cb665c3263459139a"},
                data:{citypinyin:$("#ctnm").val()},
                success:function (data) {
                    if(data.errNum == -1){
                        alert("查询城市不存在")
                    }else{
                        $("#aera").empty();
                        //console.log(data);
                        weather(data)
                    }

                },
                dataType: "json"
            })}
        });

   
    }

    function weather(data) {
        $("#weather").empty();
        var weaHtml = "<p>城市："+data.retData.city+"</p>" +
            "<p>天气情况: "+data.retData.weather+"</p>" +
            "<p>气温: "+data.retData.temp+" " +
            "最低气温: "+data.retData.l_tmp+" " +
            "最高气温: "+data.retData.h_tmp+"</p>" +
            "<p>风力: "+data.retData.WS+" " +
            "风向："+data.retData.WD+"</p>" +
            "<p>日出时间: "+data.retData.sunrise+" " +
            "日落时间："+data.retData.sunset+"</p>" ;
        $("#weather").append(weaHtml);
    }
    
    bt();
})();