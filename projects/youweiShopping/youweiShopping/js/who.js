/**
 * Created by sks on 2016/8/5.
 */
$(function () {

    var val= sessionStorage.getItem(sessionStorage.key(0));
    var key= sessionStorage.key(0);
    $("#who").html(val);


});