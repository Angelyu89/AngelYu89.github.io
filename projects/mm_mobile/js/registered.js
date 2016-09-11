/**
 * Created by sks on 2016/8/8.
 */
/*注册*/
$(function () {
    $("#reg_btn").bind("click", function () {
        var reg_phone = $("#reg_ipone");
        var reg_ps = $("#reg_password");
        var re_rest_ps = $("#rest_password");

        $.get("http://datainfo.duapp.com/shopdata/userinfo.php", {
            status: "register",
            userID: reg_phone.val(),
            password: reg_ps.val()
        }, function (data) {
            if (reg_phone.val() =="" || reg_ps.val() == "") {
                // alert("内容为空，请输入内容")/;'

                $("#ts").html("<div class='oDiv1'>内容为空，请输入内容</div>");
                $(".oDiv1").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"
                })

            } else if (reg_phone.val().length != 11) {

                $(".reg_ipone").html("<div class='oDiv2'>请输入11位正确的手机号</div>");
                $(".oDiv2").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"

                })

            } else if(reg_ps.val().length < 6){
                $(".reg_password").html("<div class='oDiv3'>密码不能少于6位</div>");
                $(".oDiv3").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"
                })
            }
            else if (reg_ps.val()!= re_rest_ps.val()) {
                $(".rest_password").html("<div class='oDiv4'>密码不一致，请重新输入</div>");
                $(".oDiv4").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"
                })

            }else{
                if(data==0){
                    alert("用户重名")
                }else if(data==2){
                    alert("数据库保存")
                }else{
                    window.location.href="sign.html";
                }
            }
        })
    });
}());