$(function () {
    fnNav();
    fnStar();
    fnHref();
    fnStar_submit();
    fnRadio();
});
//屏幕尺寸发生变化
$(window).resize(function(){
    fnNav();
})

/*首页关于模块计算*/
function fnNav(){
    var h = $("body").height();//屏幕高度
    var img_h = $(".head_img_wrap").height();//头图的高度
    //盒子高度 = 屏幕高度-头导航高度-头图高度-地文字高度-padding值
    var box_h = (h - 44 - img_h -30 - 20)/2;
    $(".wedding_li").css("height",box_h);
    $(".movies_li").css("height",box_h);
    $(".business_li").css("height",box_h);
    $(".active_li").css("height",box_h);
}
/*function fnService(){
    $(".service_input").click(function(){
        var b = submit_sevice();
        if (b) {
            $(".pop_win").show();
        }
        
    })
    $(".close_a,.pop_enter").click(function(){
        $(".pop_win").hide();
    })
}*/
//星星打分
function fnStar(){
    var stepW = 38;
    var description = new Array("1分","2分","3分","4分","5分");
    var data_val;
    var stars = $("#star > li");
    var descriptionTemp;
    $("#showb").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function(e){
            var n = i+1;
            $("#showb").css({"width":stepW*n});
            descriptionTemp = description[i];
            $(this).find('a').blur();
            //return stopDefault(e);
            return descriptionTemp;
        });
    });
   /* stars.each(function(i){
        $(stars[i]).click(
            function(){
                $(".description").text(description[i]);
            },
            function(){
                if(descriptionTemp != null){
                    //$(".description").text(description[i]);
                    data_val = description[i].substr(0 ,1)
                    $("#start_num").attr("data",data_val);
                }
                    
                else 
                    $(".description").text("请选择分数");
            }
        );
    });*/
}

function fnStar_submit(){
    $(".eva_input").click(function(){
        var showb_w = $("#showb").width();
        if(showb_w == 0){
            $(".eva_tip").text("您还没有打分！");
        }
        else{
            $(".eva_tip").text("您的评价会让我们做的更好！");
        }
    })
}
/*判断进入预约服务的入口*/
function fnHref(){
    var href_val = window.location.href;//地址字符串
    var href_val_l = href_val.length;//地址串长度
    var last_href_val = href_val.substr(href_val_l-1,href_val_l);
    $("#servicetypeid").attr("value", last_href_val);
    //婚礼
    if (last_href_val == 1) {
        $("#ser_txt1").text("送戒指、送捧花、空中拍摄、婚礼跟拍");
        $("#ser_txt2").text("S1000/Inspire 1/Phantom 3");
        $("#ser_txt3").text("5D3/GH4/GOPRO");
        $("#ser_img").attr("src","images/room_head1.jpg");
    }
    //影视航拍
    else if (last_href_val == 2) {
        $("#ser_txt1").text("电视剧、微电影、纪录片");
        $("#ser_txt2").text("Power Copter/The One/S1000/Inspire 1");
        $("#ser_txt3").text("5D3/GH4/GOPRO");
        $("#ser_img").attr("src","images/room_head2.jpg");
    }
    //商业
    else if (last_href_val == 3) {
        $("#ser_txt1").text("楼盘航拍、景区航拍、工厂航拍");
        $("#ser_txt2").text("High One/E1100-V3/S1000/Inspire 1/精灵3");
        $("#ser_txt3").text("5D3/GH4/GOPRO");
        $("#ser_img").attr("src","images/room_head3.jpg");
    }
    //活动
    else if (last_href_val == 4) {
        $("#ser_txt1").text("大型户外活动航拍、鸟瞰图航拍、广告片航拍");
        $("#ser_txt2").text("Power Copter/High One/S1000/Inspire 1");
        $("#ser_txt3").text("5D3/GH4/GOPRO");
        $("#ser_img").attr("src","images/room_head4.jpg");
    }
}

$(".service_input").click(function(){
    submit_sevice();
})
/*预约服务表单验证*/
function submit_sevice(){
    bool = true;
    var s_time_val = $("#s_time").val();//获取开始时间
    var e_time_val = $("#e_time").val();//获取结束时间
    var address_service_val = $("#address_service").val();//获取地址
    var people_service_val = $("#people_service").val();//获取联系人
    var phone_service_val = $("#phone_service").val();//获取电话
    var code_service_val = $("#code_service").val();//获取二维码
    var txt_service_val = $("#txt_service").val();//获取备注
    
    
    
    //请选择开始时间
    if (null_check(s_time_val) == 0) {
        error_service("请选择开始时间");
        bool = false;
    }
    else{
        //请选择结束时间
        if (null_check(e_time_val) == 0) {
            error_service("请选择结束时间");
            bool = false;
        }
        else{
            /*联系地址不能为空*/
            if (null_check(address_service_val) == 0) {
                error_service("联系地址不能为空");
                bool = false;
            }
            else{
                /*联系人不能为空*/
                if (null_check(people_service_val) == 0) {
                    error_service("联系人不能为空");
                    bool = false;
                }
                else{
                    if (null_check(phone_service_val) == 0) {
                        error_service("手机号不能为空");
                        bool = false;
                    }
                    else{
                        if (phone_check(phone_service_val) == 0) {
                            error_service("格式错误，请输入您真实的手机号码！");
                            bool = false;
                        }
                        else{
                            //判断验证码为空
                            if (null_check(code_service_val) == 0) {
                                error_service("验证码不能为空");
                                bool = false;
                            }
                            else {
                                if (null_check(txt_service_val) == 0) {
                                    error_service("订单要求不能为空");
                                    bool = false;
                                }
                           }
                        }
                    }
                }
            }
        }
    }
    
    if (bool == true) {
        error_service("");
        return true;
    }
    else{
        return false;
    }
}

$(".bang_button").click(function(){
    submit_bang();
})
/*绑定手机号表单校验*/
function submit_bang(){
    bool = true;
    var phone_bang_val = $("#phone_bang").val();//获取开始时间
    var code_bang_val = $("#code_bang").val();//获取结束时间

    //手机号码为空
    if (null_check(phone_bang_val) == 0) {
        error_service("手机号码不能为空！");
        bool = false;
    }
    else{
        //手机号码格式
        if (phone_check(phone_bang_val) == 0) {
            error_service("格式错误，请输入您真实的手机号码！");
            bool = false;
        }
        else{
            /*验证码*/
            if (null_check(code_bang_val) == 0) {
                error_service("验证码不能为空");
                bool = false;
            }
        }
    }
    
    if (bool == true) {
        error_service("");
        return true;
    }
    else{
        return false;
    }
}
/*手机格式验证*/
function phone_check(phone_val){
    if(!phone_val.match(/^1\d{10}$/)){
       return 0;
    }
    else{
        return 1;
    }
}
/*密码格式验证*/
function ps_check(ps_val){
    if(!ps_val.match(/^.{6,18}$/)){
       return 0;
    }
    else{
        return 1;
    }
}
/*空值判断*/
function null_check(str){
    if(str == ""){
       return 0;
    }
    else{
        return 1;
    }
}
/*两个密码比较*/
function comparison_check(str1,str2){
    if(str1 != str2){
       return 0;
    }
    else{
        return 1;
    }
}
/*用户名格式验证*/
function name_check(ps_val){
    if(!ps_val.match(/^.{2,10}$/)){
       return 0;
    }
    else{
        return 1;
    }
}

function error_service(str){
    $(".service_error").show();
    $(".service_error").text(str);
}
//取消订单 单选样式
function fnRadio(){
    $(".cancel_label").click(function(){
        $(".cancel_label").removeClass("cancel_label_check");
        $(this).addClass("cancel_label_check");
        $(".cancel_label").attr("check","");
        $(this).attr("check","ture");
    });
}