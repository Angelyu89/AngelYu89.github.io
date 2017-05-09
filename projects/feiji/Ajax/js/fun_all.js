$(function () {
    fnNav();
    fnService();
    fnHref();

    fnMobile_nav();
});
var bool = true;
var sign_phone_val = $("#sign_phone").val();//登录电话值
var sign_ps_val = $("#sign_password").val();//登录密码值

var sign_phone = $("#sign_phone");//登录电话
var sign_ps = $("#sign_password");//登录密码

var reg_phone_val = $("#reg_phone").val();//注册电话值
var reg_name_val = $("#reg_name").val();//注册用户名值
var reg_ps_val = $("#reg_ps").val();//注册密码值
var reg_con_ps_val = $("#reg_con_ps").val();//注册确认密码值
var reg_code_val = $("#reg_code").val();//注册验证码值

var reg_phone = $("#reg_phone");//注册电话
var reg_name = $("#reg_name");//注册用户名
var reg_ps = $("#reg_ps");//注册密码
var reg_con_ps = $("#reg_con_ps");//注册确认密码
var reg_code = $("#reg_code");//注册验证码

/*首页登录注册的交互效果*/
function fnNav(){
    //点击登录 登录弹出出现
    $("#sign").click(function(){
        $(".pop_sign").css("display","block");
        $(".sign_error").css("display","none");
    })
    //点击注册 注册弹出出现
    $("#registered").click(function(){
        $(".pop_registered").css("display","block");
        $(".reg_error").css("display","none");
    })
    //点击关闭登录
    $("#sign_close").click(function(){
        $(".pop_sign").css("display","none");
    })
    //点击关闭注册
    $("#reg_close").click(function(){
        $(".pop_registered").css("display","none");
    })
    //点击登录窗口立即注册
    $(".registered_a").click(function(){
        $(".pop_sign").css("display","none");
        $(".pop_registered").css("display","block");
        $(".reg_error").css("display","none");
    })
    //点击注册窗口立即登录
    $(".sign_a").click(function(){
        $(".pop_sign").css("display","block");
        $(".pop_registered").css("display","none");
        $(".sign_error").css("display","none");
    })
}

/*登录表单验证*/
function submit_sign(){
    var sign_phone_val = $("#sign_phone").val();//登录电话值
    var sign_ps_val = $("#sign_password").val();//登录密码值

    var sign_phone = $("#sign_phone");//登录电话
    var sign_ps = $("#sign_password");//登录密码
    /*如果手机号为空*/
    if (null_check(sign_phone_val) == 0) {
        error_style("手机号码不能为空！");
        bool = false;
    }
    else{
        /*如果手机号格式不正确*/
        if (phone_check(sign_phone_val) == 0) {
            error_style("格式错误，请输入您真实的手机号码！");
            bool = false;
        }
        else{
            /*如果密码为空*/
            if (null_check(sign_ps_val) == 0) {
                error_style("密码不能为空！");
                bool = false;
            }
            /*密码格式判断*/
            else{
                if (ps_check(sign_ps_val) == 0) {
                    error_style("密码长度必须为6~18位！");
                    bool = false;
                }
            }
        }
    }
    
    if (bool == true) {
        return true;
    }
    else{
        return false;
    }
}

/*注册表单验证*/
function submit_reg(){
    var reg_phone_val = $("#reg_phone").val();//注册电话值
    var reg_name_val = $("#reg_name").val();//注册用户名值
    var reg_ps_val = $("#reg_ps").val();//注册密码值
    var reg_con_ps_val = $("#reg_con_ps").val();//注册确认密码值
    var reg_code_val = $("#reg_code").val();//注册验证码值

    var reg_phone = $("#reg_phone");//注册电话
    var reg_name = $("#reg_name");//注册用户名
    var reg_ps = $("#reg_ps");//注册密码
    var reg_con_ps = $("#reg_con_ps");//注册确认密码
    var reg_code = $("#reg_code");//注册验证码
    /*如果手机号为空*/
    if (null_check(reg_phone_val) == 0) {
        error_reg("手机号码不能为空！");
        bool = false;
    }
    else{
        /*如果手机号格式不正确*/
        if (phone_check(reg_phone_val) == 0) {
            error_reg("格式错误，请输入您真实的手机号码！");
            bool = false;
        }
        else{
            /*如果用户名为空*/
            if (null_check(reg_name_val) == 0) {
                error_reg("用户名不能为空！");
                bool = false;
            }
            else{
                 /*用户名格式*/
                if (name_check(reg_name_val) == 0) {
                    error_reg("用户名长度为2~10个字符！");
                    bool = false;
                }
                else{
                    /*如果密码为空*/
                    if (null_check(reg_ps_val) == 0) {
                        error_reg("密码不能为空！");
                        bool = false;
                    }
                    else{
                        /*如果确认密码为空*/
                        if (null_check(reg_con_ps_val) == 0) {
                            error_reg("确认密码不能为空！");
                            bool = false;
                        }
                        /*密码格式判断*/
                        else{
                            if (ps_check(reg_ps) == 0) {
                                error_style("密码长度必须为6~18位！");
                                bool = false;
                            }
                            else{
                                /*俩个输入密码判断*/
                                if (comparison_check(reg_ps_val,reg_con_ps_val) == 0) {
                                    error_reg("密码不匹配，请重新输入!");
                                    bool = false;
                                }
                                else{
                                    /*如果验证码为空*/
                                    if (null_check(reg_code_val) == 0) {
                                        error_reg("验证码不能为空！");
                                        bool = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (bool == true) {
        return true;
    }
    else{
        return false;
    }
}
$(".join_a").click(function(){
    submit_recruit();
})
/*招募飞手表单验证*/
function submit_recruit(){
    bool = true;
    var rec_name_val = $("#name").val();//获取公司名称输入框的值
    var rec_contact_val = $("#contact").val();//获取联系人输入框的值
    var rec_tel_val = $("#tel").val();//获取联系电话输入框的值
    var rec_yanzhen_val = $("#yanzheng").val();//获取验证码输入框的值
    var rec_city_val = $("#city").val();//获取报名城市输入框的值
    
    var rec_name = $("#name");//获取公司名称
    var rec_contact = $("#contact");//获取联系人
    var rec_tel = $("#tel");//获取联系电话
    var rec_yanzhen = $("#yanzheng");//获取验证码
    var rec_city = $("#city");//获取报名城市
    
    //判断公司名称为空
    if (null_check(rec_name_val) == 0) {
        error_recruit("公司名不能为空！");
        bool = false;
    }
    else{
        //判断联系人为空
        if (null_check(rec_contact_val) == 0) {
            error_recruit("联系人不能为空！");
            bool = false;
        }
        else{
            /*如果联系电话为空*/
            if (null_check(rec_tel_val) == 0) {
                error_recruit("联系电话不能为空！");
                bool = false;
            }
            else{
                /*如果手机号格式不正确*/
                if (phone_check(rec_tel_val) == 0) {
                     error_recruit("格式错误，请输入您真实的手机号码！");
                    bool = false;
                }
                else{
                    //判断验证码为空
                    if (null_check(rec_yanzhen_val) == 0) {
                        error_recruit("验证码不能为空！");
                        bool = false;
                    }
                    else{
                        //判断城市为空
                        if (null_check(rec_city_val) == 0) {
                            error_recruit("城市不能为空！");
                            bool = false;
                        }
                    }
                }
            }
        }
    }
    
    if (bool == true) {
        error_recruit("");
        return true;
    }
    else{
        return false;
    }
}

$(".appointment_a").click(function(){
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
        error_service("请选择开始时间！");
        bool = false;
    }
    else{
        //请选择结束时间
        if (null_check(e_time_val) == 0) {
            error_service("请选择结束时间！");
            bool = false;
        }
        else{
            /*联系地址不能为空*/
            if (null_check(address_service_val) == 0) {
                error_service("服务地点不能为空！");
                bool = false;
            }
            else{
                /*联系人不能为空*/
                if (null_check(people_service_val) == 0) {
                    error_service("联系人不能为空！");
                    bool = false;
                }
                else{
                    if (null_check(phone_service_val) == 0) {
                        error_service("手机号码不能为空！");
                        bool = false;
                    }
                    else{
                        if (phone_check(phone_service_val) == 0) {
                            error_service("格式错误，请输入您真实的手机号码！");
                            bool = false;
                        }
                        else{
                            if (null_check(code_service_val) == 0) {
                                error_service("验证码不能为空！");
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
/*错误提示样式*/
function error_style(str){
    $(".sign_error").show();
    $(".sign_error").text(str);
}
function error_reg(str){
    $(".reg_error").show();
    $(".reg_error").text(str);
}
function error_recruit(str){
    $(".recruit_error").show();
    $(".recruit_error").text(str);
}
function error_service(str){
    $(".service_error").show();
    $(".service_error").text(str);
}

/*预约服务交互*/
function fnService(){
    /*商业*/
    $(".city_a").click(function(){
        $("#infro1").text("楼盘航拍、景区航拍、工厂航拍");
        $("#infro2").text("High One/E1100-V3/S1000/Inspire 1/精灵3");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".container").css("background","#f4f4f4 url(images/service_bg.jpg) no-repeat center");
        se_go();
        $(".city_a").addClass("city_a_active");
        $(".film_a").removeClass("film_a_active");
        $(".wedding_a").removeClass("wedding_a_active");
        $(".active_a").removeClass("active_a_active");
        $("#servicetypename").attr("value", "商业广告");
    })
    /*影视*/
    $(".film_a").click(function(){
        $("#infro1").text("电视剧、微电影、纪录片");
        $("#infro2").text("Power Copter/The One/S1000/Inspire 1");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".container").css("background","#d3d3d3 url(images/service_bg4.jpg) no-repeat center");
        se_go();
        $(".film_a").addClass("film_a_active");
        $(".city_a").removeClass("city_a_active");
        $(".wedding_a").removeClass("wedding_a_active");
        $(".active_a").removeClass("active_a_active");
        $("#servicetypename").attr("value", "影视航拍");
    })
    /*婚礼*/
    $(".wedding_a").click(function(){
        $("#infro1").text("送戒指、送捧花、空中拍摄、婚礼跟拍");
        $("#infro2").text("S1000/Inspire 1/Phantom 3");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".container").css("background","#fff url(images/service_bg2.jpg) no-repeat center");
        se_go();
        $(".wedding_a").addClass("wedding_a_active");
        $(".city_a").removeClass("city_a_active");
        $(".film_a").removeClass("film_a_active");
        $(".active_a").removeClass("active_a_active");
        $("#servicetypename").attr("value", "婚礼航拍");
    })
    /*活动*/
    $(".active_a").click(function(){
        $("#infro1").text("大型户外活动航拍、鸟瞰图航拍、广告片航拍");
        $("#infro2").text("Power Copter/High One/S1000/Inspire 1");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".container").css("background","#f4f4f4 url(images/service_bg3.jpg) no-repeat center");
        se_go();
        $(".active_a").addClass("active_a_active");
        $(".city_a").removeClass("city_a_active");
        $(".film_a").removeClass("film_a_active");
        $(".wedding_a").removeClass("wedding_a_active");
        $("#servicetypename").attr("value", "活动航拍");
    })
    /*返回*/
    $(".se_back").click(function(){
        $(".form_box").hide();
        $(".service_box_middle").show();
        $(".service_tit").show();
        $(".se_back").hide()
    })
    //选择模块方法
    function se_go(){
        $(".form_box").show();
        $(".service_box_middle").hide();
        $(".service_tit").hide();
        $(".se_back").show();
    }    
}
/*判断进入预约服务的入口*/
function fnHref(){
    var href_val = window.location.href;//地址字符串
    var href_val_l = href_val.length;//地址串长度
    var last_href_val = href_val.substr(href_val_l-1,href_val_l);
    //alert(lasr_href_val);
    //商业
    if (last_href_val == 1) {
        $("#infro1").text("楼盘航拍、景区航拍、工厂航拍");
        $("#infro2").text("The One/S1000/Inspire 1/精灵3S1000");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".city_a").addClass("city_a_active");
    }
    //影视航拍
    else if (last_href_val == 2) {
        $("#infro1").text("电视剧、微电影、纪录片");
        $("#infro2").text("Power Copter/The One/S1000/Inspire 1/精灵3/S1000");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".film_a").addClass("film_a_active");
    }
    //婚礼
    else if (last_href_val == 3) {
       $("#infro1").text("送戒指、送捧花、空中拍摄婚礼跟拍");
        $("#infro2").text("nspire 1/精灵3/S1000");
        $("#infro3").text("GOPRO");
        $(".wedding_a").addClass("wedding_a_active");
    }
    //活动
    else if (last_href_val == 4) {
        $("#infro1").text("大型户外活动航拍、鸟瞰图航拍广告片航拍");
        $("#infro2").text("Power Copter/The One/S1000Inspire 1/精灵3/S1000");
        $("#infro3").text("5D3/GH4/GOPRO");
        $(".active_a").addClass("active_a_active");
    }
}   
/*$(window).resize(function(){
    fnMobile_nav()
})*/
//手机导航交互
function fnMobile_nav(){
    $(".menu-icon").click(function(){
        if ($(".mobile_nav_ul").css('display') == 'none') {
            $(".mobile_nav_ul").slideDown();
        }
        else{
            $(".mobile_nav_ul").slideUp();
        }
    })
}