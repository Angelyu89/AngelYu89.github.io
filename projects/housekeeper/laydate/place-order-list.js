var OrderLists = (function() {
    var laydates = function() {
        var startDate = {
            elem: '#startDate',
            format: 'YYYY-MM-DD hh:mm',
            min: '1970-01-01', //设定最小日期为当前日期
            istoday: false,
            istime: true,
            choose: function(datas) {
                endDate.min = datas; //开始日选好后，重置结束日的最小日期
                endDate.start = datas; //将结束日的初始值设定为开始日
                $('#startDate').blur();
            }
        };
        var endDate = {
            elem: '#endDate',
            format: 'YYYY-MM-DD hh:mm',
            min: '1970-01-01', //设定最小日期为当前日期
            istoday: false,
            istime: true,
            choose: function(datas) {
                startDate.max = datas; //开始日选好后，重置结束日的最小日期
                $('#endDate').blur();
            }
        };
        var useStartDate = {
            elem: '#useStartDate',
            format: 'YYYY-MM-DD',
            min: '1970-01-01', //设定最小日期为当前日期
            istoday: false,
            istime: false,
            choose: function (datas) {
                useEndDate.min = datas; //开始日选好后，重置结束日的最小日期
                useEndDate.start = datas; //将结束日的初始值设定为开始日
                $('#useStartDate').blur();
            }
        };
        var useEndDate = {
            elem: '#useEndDate',
            format: 'YYYY-MM-DD',
            min: '1970-01-01', //设定最小日期为当前日期
            istoday: false,
            istime: false,
            choose: function (datas) {
                useStartDate.max = datas; //开始日选好后，重置结束日的最小日期
                $('#useEndDate').blur();
            }
        };
        laydate(startDate);
        laydate(endDate);
        laydate(useStartDate);
        laydate(useEndDate);
    };
    var bootboxs = function() {
        $('.excelBtn').click(function() {
            // 获取数据 number
            bootbox.dialog({
                message: '<form class="form-horizontal search">\
                 <div class="form-body row">\
                    <div class="form-group">\
                        <label class="col-sm-3 control-label no-padding-right" for="form_title"><span style="color:red">*</span>时间段：</label>\
                        <div class="col-sm-9">\
                            <input type="text" class="form-control input-small input-inline laydate-icon" onclick="laydate({startTime: true, format: \'YYYY-MM-DD \'})" name="startTime" id="startTime" placeholder="开始时间">\
                            至&nbsp;&nbsp;<input type="text" class="form-control input-small input-inline laydate-icon" onclick="laydate({endTime: true, format: \'YYYY-MM-DD \'})" name="endTime" id="endTime" placeholder="结束时间">\
                        </div>\
                    </div>\
                    <div class="form-group">\
                        <label class="col-sm-3 control-label no-padding-right" for="form_title"><span style="color:red">*</span>条件：</label>\
                        <div class="col-md-8">\
                            <select class="form-control input-small" name="timeType" id="timeType">\
                                <option value="" selected>请选择</option>\
                                <option value="0">预定时间</option>\
                                <option value="1">使用时间</option>\
                            </select>\
                        </div>\
                    </div>\
                 </div>\
                    \<script src="/public/global/plugins/laydate/laydate.js">\<\/script>\
                    \<link rel="stylesheet" href="/public/global/plugins/laydate/need/laydate.css"\/>\
                    \<link rel="stylesheet" href="/public/boss/css/boss.min.css"\/>\
                  </form>',
                title: "导出excel",
                onEscape: true,
                size: 450,
                className: "my-modal",
                buttons: {
                    cancel: {
                        label: "取消",
                        className: "dark btn-outline",
                        callback: function() {
                            $('#laydate_box').remove();
                        }
                    },
                    success: {
                        label: "确认",
                        className: "red",
                        callback: function() {
                            var start = $("#startTime").val();
                            var end = $("#endTime").val();
                            var timeType = $("#timeType").val();
                            if(start == "" || end == ""){
                                alert("请输入时间段");
                            }else if(start>end){
                                alert("开始日期大于结束日期!");
                            }else if(timeType == ""){
                                alert("请选择时间类型");
                            }else{
                                location.href = "/place/excel?timeType="+timeType+"&startTime="+start+"&endTime="+end;
                            }
                            $('#laydate_box').remove();
                        }
                    }
                }
            });
        });
    };

    return {
        init: function() {
            bootboxs();
            laydates();
        }
    }
})();

jQuery(document).ready(function() {
    OrderLists.init();
});
