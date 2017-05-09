function fnAjax(url,params){
    $.ajax({
        url: url,
        type: "POST",
        data: { params: params, devices: "weixin" },
        dataType: "jsonp",
        jsonpCallback: " ",
        jsonp:"jsonCallback",
        success: function (data) {
            //$("#getyanzheng").attr('disabled', false);
            // alert(data.status);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //$("#getyanzheng").attr('disabled', false);
            //alert(textStatus);
        },
    }); 
}
