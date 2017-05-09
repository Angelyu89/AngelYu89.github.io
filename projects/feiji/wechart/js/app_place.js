//获取服务类型
var obj_lis = document.getElementById("order_type_list").getElementsByTagName("li");
var ordertypeid = localStorage.getItem("ordertype"); //父级id
var ordertypename = "";//子类
var ordertypeid_sub = "";//子类id
var bool = true;
var userid = localStorage.getItem("userid");
var userphone = localStorage.getItem("userphone");
/*for(i=0;i<obj_lis.length;i++)
{
    obj_lis[i].onclick = function(){

    ordertypename = this.innerHTML;
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
    };
}*/
function app_choose_li(obj){
    var class_str = $(obj).attr("class");
    if (class_str == "choose") {
        $(obj).removeClass("choose");
    }
    else{
        $(obj).addClass("choose");
    }

    ordertypename = obj.innerHTML;
    if(ordertypename == "楼盘航拍")
    {
        if (ordertypeid_sub.indexOf("1000001014|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001014|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001014|";
        }
    }
    else if(ordertypename == "广告航拍")
    {
        if (ordertypeid_sub.indexOf("1000001015|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001015|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001015|";
        }
    }
    else if(ordertypename == "活动航拍")
    {
        if (ordertypeid_sub.indexOf("1000001016|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001016|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001016|";
        }
    }
    else if(ordertypename == "户外运动")
    {
        if (ordertypeid_sub.indexOf("1000001017|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001017|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001017|";
        }
    }
    else if(ordertypename == "赛事直播")
    {
        if (ordertypeid_sub.indexOf("1000001018|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001018|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001018|";
        }
    }
    else if(ordertypename == "新闻现场")
    {
        if (ordertypeid_sub.indexOf("1000001019|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001019|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001019|";
        }
    }
    else if(ordertypename == "电视剧")
    {
        if (ordertypeid_sub.indexOf("1000001020|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001020|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001020|";
        }
    }
    else if(ordertypename == "纪录片")
    {
        if (ordertypeid_sub.indexOf("1000001021|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001021|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001021|";
        }
    }
    else if(ordertypename == "微电影")
    {
        if (ordertypeid_sub.indexOf("1000001022|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001022|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001022|";
        }
    }
    else if(ordertypename == "电影")
    {
        if (ordertypeid_sub.indexOf("1000001023|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001023|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001023|";
        }
    }
    else if(ordertypename == "婚礼航拍")
    {
        if (ordertypeid_sub.indexOf("1000001028|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001028|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001028|";
        }
    }
    else if(ordertypename == "VCR")
    {
        if (ordertypeid_sub.indexOf("1000001027|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001027|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001027|";
        }
    }
    else if(ordertypename == "拉烟")
    {
        if (ordertypeid_sub.indexOf("1000001026|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001026|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001026|";
        }
    }
    else if(ordertypename == "送捧花")
    {
        if (ordertypeid_sub.indexOf("1000001025|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001025|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001025|";
        }
    }
    else if(ordertypename == "送戒指")
    {
        if (ordertypeid_sub.indexOf("1000001024|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001024|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001024|";
        }
    }
    else if(ordertypename == "景区飞行体验")
    {
        if (ordertypeid_sub.indexOf("1000001033|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001033|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001033|";
        }
    }
    else if(ordertypename == "蜜月游航拍")
    {
        if (ordertypeid_sub.indexOf("1000001032|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001032|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001032|";
        }
    }
    else if(ordertypename == "亲子游航拍")
    {
        if (ordertypeid_sub.indexOf("1000001031|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001031|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001031|";
        }
    }
    else if(ordertypename == "随团空中摄影")
    {
        if (ordertypeid_sub.indexOf("1000001030|") > -1) {
            ordertypeid_sub = ordertypeid_sub.replace("1000001030|", "");
        }
        else{
            ordertypeid_sub=ordertypeid_sub+"1000001030|";
        }
    }
}

$("#crruntsubmit").click(function(){
    ordercommit();
});

function ordercommit(){ 
    ordertypeid_sub = ordertypeid_sub.substring(0,ordertypeid_sub.length - 1);
    var s_time = $("#s_time").val();//获取开始时间
    var e_time = $("#e_time").val();//获取结束时间
    var address_service = $("#address_service").val();//获取地址
    var people_service = $("#people_service").val();//获取联系人
    var phone_service = $("#phone_service").val();//获取电话
    var txt_service = $("#txt_service").val();//获取备注
    var prov = $(".prov").find("option:selected").text();
    var city = $(".city").find("option:selected").text();
    var dist = $(".dist").find("option:selected").text();
    var all_address = prov+city+dist+address_service;
    //alert(ordertypeid_sub);
    if (ordertypeid_sub.length>=10) {
        ordertypeid_sub = ordertypeid_sub.split("|");
    }
    //alert(ordertypeid_sub);
    var params="devices=weixin&jsonCallback=studioAppCallback&params={"+
                "\"feishouid\":\"\","+
                "\"ordertablename\":\"order_default\","+
                "\"userid\":\"" + userid + "\","+
                "\"properties\":"+
                    "{"+
                        "\"orderremark\":\""+txt_service+"\","+
                        "\"orderstatus\":\"0\","+
                        "\"username\":\"" + people_service + "\","+
                        "\"userphone\":\"" + userphone + "\","+
                        "\"orderbegintime\":\"" + s_time + "\","+
                        "\"orderendtime\":\"" + e_time + "\","+
                        "\"orderaddtime\":\"\","+
                        "\"ordernumber\":\"\","+
                        "\"orderid\":\"\","+
                        "\"ordertype\":\"" + ordertypeid + "\","+
                        "\"orderlocation\":\""+all_address+"\""+
                    "},"+
                "\"studioid\":\"\","+
                "\"ordertype\":\"" + ordertypeid + "\","+
                "\"ordertype_sub\":\"[" + ordertypeid_sub + "]\","+
                "\"ordertypename\":\"" + ordertypename + "\""+
            "}"
    if (null_check(ordertypeid_sub) == 0) {
        error_service("请选择服务类型");
        bool = false;
    }
    else{
        if (null_check(s_time) == 0) {
            error_service("请选择开始时间");
            bool = false;
        }
        else{
            if (null_check(e_time) == 0) {
                error_service("请选择结束时间");
                bool = false;
            }
            else{
                if (null_check(all_address) == 0) {
                    error_service("联系地址不能为空");
                    bool = false;
                }
                else{
                    if (null_check(people_service) == 0) {
                        error_service("联系人不能为空");
                        bool = false;
                    }
                    else{
                        if (null_check(phone_service) == 0) {
                            error_service("手机号不能为空");
                            bool = false;
                        }
                        else{
                            if (phone_check(phone_service) == 0) {
                                error_service("手机号格式错误");
                                bool = false;
                            }
                            else {
                                    if (null_check(txt_service) == 0) {
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
        $(".loading_wrap").show();
        $.ajax({
            url: "http://123.57.174.52:8080/app/Order_saveOrder",
            type: "POST",
            data: params,
            dataType: "jsonp",

        });
    }
    else{
        return false;
    }   
}
function studioAppCallback(v){
    var status_val = v.status;

    $(".loading_wrap").hide();
    if(status_val==1){
        window.location.href="app_success.html";
    }
    else {
        $(".fail_wrap").show();
    }
}
$("#know_a").click(function(){
    $(".fail_wrap").hide();
})

$('.form_date').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('.form_date').datetimepicker('setStartDate', new Date());

$("#s_time").change(function(){
    $('#e_time_div').datetimepicker('setStartDate', $("#s_time").val());
});

/*空值判断*/
function null_check(str){
    if(str == ""){
       return 0;
    }
    else{
        return 1;
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

/*错误提示*/
function error_service(str){
    $(".error_wrap").show();
    $("#service_span").text(str);
}

$(".bg_mask_fff").click(function(){
    $(".error_wrap").hide();
})