/**
 * Created by sks on 2016/8/4.
 */
(function () {
    $("#Login").bind("click",function () {
        var user=getuser();
        var yonghumingmimabucunzai=document.querySelector("#yonghumingmimabucunzai");
        var yonghumingbucunzai=document.querySelector("#yonghumingbucunzai");
        var denglu=document.querySelector("#denglu");
        var telNum=document.querySelector("#telNum");
        var pass=document.querySelector("#pass");
        $.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
            status:"login",
            userID: user.userID,
            password: user.password
        },function (data) {
            console.log(data);
            if(data ==2 ){
                yonghumingmimabucunzai.style.display="block";
                setTimeout(function () {
                    yonghumingmimabucunzai.style.display="none";
                    telNum.value="";
                    pass.value="";
                },2000)
            }
            else {
                if (data == 0) {
                    yonghumingbucunzai.style.display = "block";
                    setTimeout(function () {
                        yonghumingbucunzai.style.display = "none";
                        telNum.value = "";
                        pass.value = "";
                    }, 2000)
                }else {
                    denglu.style.display = "block";
                    window.sessionStorage.setItem("CU",user.userID);

                    setTimeout(function () {
                        denglu.style.display = "none";
                        telNum.value = "";
                        pass.value = "";
                    }, 2000);
                    setTimeout(function () {
                        window.location.href="../html/index.html";
                    },2200)
                }


            }
        })
    });
    function getuser() {
        var user={
            userID:$("#telNum").val(),
            password:$("#pass").val()
        };
        return user;
    }
})();