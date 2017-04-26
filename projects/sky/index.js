/**
 * Created by sks on 2016/8/19.
 */
(function () {
    Main.prototype.getElements = function () {
        this.input = document.querySelector("#input");
        this.btn = document.querySelector("#btn");
        this.box_div = document.querySelector("#box_div");
        this.lh_temp = document.querySelector("#lh_temp");
        this.dialog = document.querySelector("#dialog");
        this.box_show = document.querySelector("#box_show");
        this.div = [];
        this.i = 0;
        this.img = {
            "晴": "d00.jpg", '多云': 'd01.jpg', '阴': 'd02.jpg', '阵雨': 'd03.jpg', '雷阵雨': 'd04.jpg',
            '雷阵雨伴有冰雹': 'd05.jpg', '雨夹雪': 'd06.jpg', '小雨': 'd07.jpg', '中雨': 'd08.jpg', '大雨': 'd09.jpg',
            '暴雨': 'd10.jpg', '大暴雨': 'd11.jpg', '特大暴雨': 'd12.jpg', '阵雪': 'd13.jpg', '小雪': 'd14.jpg',
            '中雪': 'd15.jpg', '大雪': 'd16.jpg', '暴雪': 'd17.jpg', '雾': 'd18.jpg', '冻雨': 'd19.jpg', '沙尘暴': 'd20.jpg',
            '小到中雨': 'd21.jpg', '中到大雨': 'd22.jpg', '大到暴雨': 'd23.jpg', '暴到大暴雨': 'd24.jpg',
            '大到特大暴雨': 'd25.jpg', '小到中雪': 'd26.jpg', '中到大雪': 'd27.jpg', '大到暴雪': 'd28.jpg',
            '浮沉': 'd29.jpg', '强沙尘暴': 'd30.jpg', '霾': 'd31.jpg'
        };
        this.IMG = {
            "晴": 'qingtian.jpg', '阴': 'yintian.jpg', '多云': 'duoyun.jpg', '雷阵雨': 'leizhenyu.jpg', '暴雨': 'baoyu.jpg',
            '暴雪': 'baoxue.jpg', '霾': 'mai.jpg', '雾': 'wu.jpg', '小雨': 'xiaoyu.jpg', '阵雪': 'xue.jpg', '小雪': 'xue.jpg',
            '中雨': 'zhongyu.jpg', '小到中雨': 'zhongyu.jpg', '中到大雨': 'baoyu.jpg', '大到暴雨': 'baoyu.jpg',
            '暴到大暴雨': 'baoyu.jpg', '大到特大暴雨': 'baoyu.jpg', "沙尘暴": 'sha.jpg', '强沙尘暴': 'sha.jpg',
            '小到中雪': 'xue.jpg.jpg', '中到大雪': 'baoxue.jpg.jpg', '大到暴雪': 'baoxue.jpg.jpg','阵雨':'xiaoyu.jpg'
        };
        // console.log( this.img.晴天)
    };
    Main.prototype.add = function () {
        var that = this;

        this.btn.onclick = function () {
            that.box_show.innerHTML = '';
            that.lh_temp.innerHTML = '';
            that.box_div.innerHTML = '';
            // var input_val=encodeURIComponent(that.input.value);
            var input_val = that.input.value;

            // console.log(input_val);
            $.ajax({
                url: "http://apis.baidu.com/apistore/weatherservice/citylist",
                type: "GET",
                beforeSend: function (request) {
                    request.setRequestHeader("apikey", "7f1f3529b532f1869a07e56a2a06fad0");
                },
                data: {cityname: input_val},
                dataType: 'json',
                success: function (data) {
                    // console.log(data.retData);
                    if (data.errNum == 0) {
                        // console.log(data);
                        that.div.push(data.retData[0].area_id);
                        // console.log(data.errNum);
                        // for(var i=0;i<data.retData.length;i++){
                        //     //console.log(data.retData[i])
                        //     that.div.push(data.retData[i].area_id);
                        //    // console.log(that.div)
                        // }
                        //  console.log(that.div);
                        that.show();
                        that.future() 
                    }
                    else {
                        that.dialog.style.animation = "block 1.5s linear 0s"
                    }

                }


            })

        }

    };
    Main.prototype.future = function () {
        var that = this;
        $.ajax({
            url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
            type: 'GET',
            beforeSend: function (request) {
                request.setRequestHeader('apikey', "7f1f3529b532f1869a07e56a2a06fad0")
            },
            dataType: 'json',
            data: {cityid: that.div[that.i]},
            success: function (data) {
                //  console.log(data.retData.forecast);
                for (var i = 0; i < data.retData.forecast.length; i++) {
                  //  console.log(data.retData.forecast[i]);
                    var div = $('<div></div>', {
                        class: 'box_1'
                    }).appendTo(that.box_div);
                    var div1 = $('<div></div>', {
                        class: 'left_box_1'
                    }).appendTo(div);
                    var div2 = $('<div></div>', {
                        class: 'left_box_1'
                    }).appendTo(div);
                    var div2_a = $('<div></div>', {
                        class: 'top_bottom_a'
                    }).appendTo(div2);
                    var div2_b = $('<div></div>', {
                        class: 'top_bottom_b'
                    }).appendTo(div2);
                    var div3 = $('<div></div>', {
                        class: 'left_box_1'
                    }).appendTo(div);
                    var div4 = $('<div></div>', {
                        class: 'left_box_2'
                    }).appendTo(div);
                    
                    var img = data.retData.forecast[i].type;
                    var imgURL = that.img[img];
                   // console.log(imgURL);

                    div1.css("background", "url('weather/" + imgURL + "') no-repeat 8px 12px ");
                    div2_a.html(data.retData.forecast[i].date);
                    div2_b.html(data.retData.forecast[i].week);
                    div3.html(data.retData.forecast[i].lowtemp + '/' + data.retData.forecast[i].hightemp);
                    div4.html(data.retData.forecast[i].type);
                    //console.log(data.retData.forecast[i].type);
                }
            }
        })
    };
    Main.prototype.show = function () {
        var that = this;

//        console.log(this.div.length);

        $.ajax({
            url: "http://apis.baidu.com/apistore/weatherservice/cityid",
            type: "GET",
            beforeSend: function (request) {
                request.setRequestHeader("apikey", "7f1f3529b532f1869a07e56a2a06fad0");
            },
            data: {cityid: that.div[that.i]},
            dataType: 'json',
            success: function (data) {
             //   console.log(data);
                that.box_show.appendChild(that.lh_temp);
                var div2 = $('<div></div>', {
                    class: 'temp'
                }).appendTo(that.box_show);
                var div0 = $('<div></div>', {
                    class: 'city'
                }).appendTo(that.box_show);
                var div4 = $('<div></div>', {
                    class: 'lh_temp'
                }).appendTo(that.box_show);

                var div6 = $('<div></div>', {
                    class: 'weather'
                }).appendTo(that.box_show);
                var box = $("#box");
                var img = data.retData.weather;
               // console.log(img);
                var imgURL = that.IMG[img];
                box.css("background", "url('weather/" + imgURL + "') no-repeat");
                box.css('background-size','100% 100%');
                div0.html(data.retData.city);
                div2.html(data.retData.temp + '°');
                div4.html(data.retData.l_tmp + '°'+'/'+data.retData.h_tmp + '°');
                div6.html(data.retData.weather);
               
                // console.log(data.retData);
                that.i++;
            }

        })


    };
    function Main() {
        this.getElements();
        this.add();
    }

    new Main();


})();