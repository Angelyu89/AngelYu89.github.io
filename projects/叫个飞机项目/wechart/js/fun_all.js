$(function () {
});

/*登录触发验证事件*/
$(".sign_a").click(function(){
    sign_sevice();
})
/*登录表单验证*/
function sign_sevice(){
    var bool = true;
    var sign_phone_val = $("#sign_phone").val();//获取手机号
    var sign_code_val = $("#sign_code").val();//获取验证码
    
    //手机号的空值验证
    if (null_check(sign_phone_val) == 0) {
        error_sign("请输入手机号！");
        bool = false;
    }
    else{
        //手机号格式验证
        if (phone_check(sign_phone_val) == 0) {
            error_sign("手机号码格式错误！");
            bool = false;
        }
        else{
            //验证码空值验证
            if (null_check(sign_code_val) == 0) {
                error_sign("验证码不能为空！");
                bool = false;
            }
        }
    }
    
    if (bool == true) {
        error_sign("");
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
/*登录表单验证错误提示*/
function error_sign(str){
    $(".error_sign").show();
    $(".error_sign").text(str);
}

/*确认下单 选择交互*/
$(".app_choose_li").bind("click",function(){
    var class_str = $(this).attr("class");
    if (class_str == "app_choose_li choose") {
        $(this).removeClass("choose");
    }
    else{
        $(this).addClass("choose");
    }
})

/*function app_choose_li(obj){
    var class_str = $(obj).attr("class");
    if (class_str == "app_choose_li choose") {
        $(obj).removeClass("choose");
    }
    else{
        $(obj).addClass("choose");
    }
    var ordertypeid_sub = "";//子类id
    ordertypename = obj.innerHTML;
    if(ordertypename == "楼盘航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001014|";
    }
    else if(ordertypename == "广告航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001015|";
    }
    else if(ordertypename == "活动航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001016|";
    }
    else if(ordertypename == "户外运动")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001017|";
    }
    else if(ordertypename == "赛事直播")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001018|";
    }
    else if(ordertypename == "新闻现场")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001019|";
    }
    else if(ordertypename == "电视剧")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001020|";
    }
    else if(ordertypename == "纪录片")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001021|";
    }
    else if(ordertypename == "微电影")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001022|";
    }
    else if(ordertypename == "电影")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001023|";
    }
    else if(ordertypename == "婚礼航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001028|";
    }
    else if(ordertypename == "VCR")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001027|";
    }
    else if(ordertypename == "拉烟")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001026|";
    }
    else if(ordertypename == "送捧花")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001025|";
    }
    else if(ordertypename == "送戒指")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001024|";
    }
    else if(ordertypename == "景区飞行体验")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001033|";
    }
    else if(ordertypename == "蜜月游航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001032|";
    }
    else if(ordertypename == "亲子游航拍")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001031|";
    }
    else if(ordertypename == "随团空中摄影")
    {
        ordertypeid_sub=ordertypeid_sub+"1000001030|";
    }
    ordertypeid_sub = ordertypeid_sub.substring(0,ordertypeid_sub.length - 1);
    if (ordertypeid_sub>=10) {
        ordertypeid_sub = ordertypeid_sub.split("|");
    }

    //储存userid
    localStorage.setItem("ordertypeid_sub","");
    alert(ordertypeid_sub);
}*/
// $(".app_choose_li").click(function(){
//     var class_str = $(this).attr("class");
//     if (class_str == "app_choose_li choose") {
//         $(this).removeClass("choose");
//     }
//     else{
//         $(this).addClass("choose");
//     }
// })
//取消订单弹出
function show_order(){
    $(".cancel_order_wrap").show();
}
//取消关闭
$("#cancle_no,#cancle_yes").click(function(){
    $(".cancel_order_wrap").hide();
})