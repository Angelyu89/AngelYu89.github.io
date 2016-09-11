/**
 * Created by sks on 2016/8/6.
 */

/*登录*/

$(function(){
    $("#sign_btn").bind("click",function(){
        var sg_name=$("#sign_name");
        var sg_password=$("#sign_password");
        var filter=/^[a-z0-9_\.-]{1,16}$/;

        $.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
            status:"login",
            userID:sg_name.val(),
            password:sg_password.val()
        },function(data){
            if(sg_name.val()==""||sg_password.val()==""){

                $("#sign_dl").html("<div class='oDiv5'>内容为空，请输入内容</div>");
                $(".oDiv5").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"
                })
            }
            // else if(filter.test($(this.val()))){
            //     $(this).next().html("");
            //     flag=true;
            // }
            else if(sg_password.val().length<6){
                $("#rg_yz").html("<div class='oDiv6'>密码不得小于6位</div>");
                $(".oDiv6").css({
                    display:"block",
                    position:"absolute",
                    color:"#ff0000",
                    left:"3rem"
                })
            }
        })
    })


}());
