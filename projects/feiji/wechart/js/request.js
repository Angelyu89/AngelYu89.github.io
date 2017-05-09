var request = {
    posturl:"",
    param: "",
    device: "",
    collback: "",
    ajaxRequestFunction: function () {
        var thisElement = this;
        $.ajax({
            url: thisElement.posturl,
            type: "POST",
            data: { params: thisElement.param, devices: thisElement.device, jsonpCallback: thisElement.collback },
            dataType: "jsonp",
            jsonpCallback: thisElement.collback,
            jsonp: "jsonCollback",
            timeout:100,
            success: function (data) {
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
        });
    },
}